import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  IParamsGetProduct,
  IProduct,
} from "../../../interface/products.interface";
import { deleteProduct, getProducts } from "../productsAPI";
import styled from "styled-components";
import {
  DFlex,
  DFlexALignCenter,
  DFlexColumn,
  DFlexJustifyBetween,
} from "../../../styled/flex.styled";
import { P14Regular, P18High, PClamp } from "../../../styled/text.styled";
import ProductsForm from "./ProductsForm";
import FormSelectControl from "../../../components/input/FormSelectControl";
import ReactPaginate from "react-paginate";
import FiSearchIcon from "../../../assets/icons/FiSearchIcon";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  ActionButton,
  ActionCell,
  ContainerStyled,
  ItemsPerPageSelect,
  MoreButton,
  PaginationContainer,
  PaginationInfo,
  ProductImage,
  ProductNameCell,
  SearchIcon,
  SearchInput,
  SearchInputWrapper,
  SortButton,
  SortContainer,
  StatusBadge,
  StyledTable,
} from "../../../styled/productList.styled";
import DropdownActionData from "../../../components/dropdown/DropdownActionData";
import ModalConfirm from "../../../components/modal/ModalConfirm";

function ProductsList() {
  const [isDetail, setIsDetail] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [show, setShow] = useState(false);
  const [dataSelected, setDataSelected] = useState<IProduct>();
  const [refreshKey, setRefreshKey] = useState(nanoid());

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<any>();
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
    total: 0,
    pages: 1,
  });

  const [modalDelete, setModalDelete] = useState<any>({
    show: false,
    data: null,
  });

  const handleClose = () => {
    setShow(false);
    setDataSelected(undefined);
    setIsEdit(false);
    setIsDetail(false);
  };
  const handleShow = () => {
    setDataSelected(undefined);
    setIsEdit(false);
    setIsDetail(false);
    setShow(true);
  };

  useEffect(() => {
    getProductData();
  }, [
    searchTerm,
    categoryFilter,
    statusFilter,
    sortBy,
    sortOrder,
    currentPage,
    itemsPerPage,
    refreshKey,
  ]);

  const buildQueryParams = (): IParamsGetProduct => {
    const searchBy: string[] = [];
    const searchValues: string[] = [];

    if (searchTerm.trim()) {
      searchBy.push("name");
      searchValues.push(searchTerm.trim());
    }

    if (categoryFilter) {
      searchBy.push("category");
      searchValues.push(categoryFilter);
    }

    if (statusFilter) {
      searchBy.push("status");
      searchValues.push(statusFilter);
    }

    const searchValue = searchValues.length > 0 ? searchValues[0] : "";

    return {
      search: searchValue,
      search_by: searchBy,
      operator: searchBy.length > 1 ? "and" : "and",
      orderBy: sortBy,
      order: sortOrder,
      page: currentPage,
      size: itemsPerPage,
    };
  };

  const getProductData = async () => {
    try {
      const params = buildQueryParams();

      const queryParams: IParamsGetProduct = {
        orderBy: params.orderBy,
        order: params.order,
        page: params.page,
        size: params.size,
        operator: params.operator,
      };

      if (params.search && params.search_by && params.search_by.length > 0) {
        queryParams.search = params.search;
        queryParams.search_by = params.search_by;
      }

      const request: any = await getProducts({ params: queryParams });

      if (request && request.data) {
        setProducts(request.data);

        if (request.pagination) {
          setPagination(request.pagination);
        }
      } else {
        setProducts([]);
        setPagination({ page: 1, size: 10, total: 0, pages: 1 });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setPagination({ page: 1, size: 10, total: 0, pages: 1 });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (e: any) => {
    setStatusFilter(
      e.target.value === "true" ? true : e.target.value === "false" ? false : ""
    );
    setCurrentPage(1);
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const categories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );
  const categoryOptions = categories.map((cat) => ({ label: cat, value: cat }));

  const statusOptions = [
    { label: "Aktif", value: "true" },
    { label: "Nonaktif", value: "false" },
  ];

  const sortOptions = [
    { label: "Nama Produk", value: "name" },
    { label: "Kategori", value: "category" },
    { label: "Harga", value: "price" },
    { label: "Stok", value: "stok" },
  ];

  const handleSortColumn = (column: string) => {
    if (sortBy === column) {
      // Jika column sama, toggle order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Jika column berbeda, set column baru dan reset ke asc
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const callbackSubmit = (values: IProduct) => {
    setRefreshKey(nanoid());
    handleClose();
  };

  const handleCloseModalDelete = () => {
    setModalDelete((prevState: any) => ({ ...prevState, show: false }));
  };

  const handleApplyConfirm = (type: "x" | "y") => {
    if (type === "x") {
      handleCloseModalDelete();
    } else {
      deleteProductById();
    }
  };

  const deleteProductById = async () => {
    try {
      const resp = await deleteProduct(modalDelete?.data?._id);
      console.log(resp);
      setRefreshKey(nanoid());

      handleCloseModalDelete();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item: IProduct) => {
    setDataSelected(item);
    setIsEdit(true);
    setIsDetail(false); 
    setShow(true);
  };

  const handleDetail = (item: IProduct) => {
    setDataSelected(item);
    setIsDetail(true);
    setIsEdit(false); 
    setShow(true);
  };

  const getStatusLabel = (status: any) => {
    if (typeof status === "boolean") {
      return status ? "Aktif" : "Nonaktif";
    }
    if (typeof status === "string") {
      const lowerStatus = status.toLowerCase();
      if (lowerStatus === "true" || lowerStatus === "aktif") return "Aktif";
      if (lowerStatus === "false" || lowerStatus === "nonaktif")
        return "Nonaktif";
      return status.charAt(0).toUpperCase() + status.slice(1);
    }
    return "Nonaktif";
  };

  const getStatusType = (status: any): string => {
    if (typeof status === "boolean") {
      return status ? "aktif" : "nonaktif";
    }
    if (typeof status === "string") {
      const lowerStatus = status.toLowerCase();
      if (lowerStatus === "true" || lowerStatus === "aktif") return "aktif";
      return "nonaktif";
    }
    return "nonaktif";
  };

  const isStatusActive = (status: any): boolean => {
    if (typeof status === "boolean") return status;
    if (typeof status === "string") {
      const lowerStatus = status.toLowerCase();
      return lowerStatus === "true" || lowerStatus === "aktif";
    }
    return false;
  };

  return (
    <>
      <ContainerStyled className="mt-5">
        <div className="d-flex justify-content-between">
          <DFlexColumn className="mb-4">
            <P18High className="m-0 fw-bold">Daftar Product</P18High>
            <P14Regular className="m-0 text-muted">
              Lihat semua produk yang tersedia di inventaris.
            </P14Regular>
          </DFlexColumn>
          <DFlex className="gap-4">
            <Button variant="primary" onClick={handleShow}>
              Tambah Product
            </Button>
          </DFlex>
        </div>
        <Card className="mb-5">
          <Row className="p-4">
            <Col md={6}>
              <Row className="g-2">
                <Col md={4}>
                  <SearchInputWrapper>
                    <SearchIcon>
                      <FiSearchIcon />
                    </SearchIcon>
                    <SearchInput
                      type="text"
                      placeholder="Cari produk"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </SearchInputWrapper>
                </Col>
                <Col md={4}>
                  <FormSelectControl
                    placeholder="Semua Kategori"
                    options={categoryOptions}
                    version="simple"
                    style={{ minWidth: "180px" }}
                    onChange={handleCategoryChange}
                    value={categoryFilter}
                  />
                </Col>
                <Col md={4}>
                  <FormSelectControl
                    placeholder="Semua Status"
                    options={statusOptions}
                    version="simple"
                    style={{ minWidth: "160px" }}
                    onChange={handleStatusChange}
                    value={statusFilter}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <SortContainer>
                <span style={{ marginRight: "8px", fontSize: "14px" }}>
                  Urutkan Berdasarkan:
                </span>
                <FormSelectControl
                  options={sortOptions}
                  version="simple"
                  style={{ minWidth: "150px" }}
                  onChange={handleSortByChange}
                  value={sortBy}
                />
                <SortButton onClick={handleSortOrderToggle}>
                  {sortOrder === "asc" ? "↑" : "↓"}{" "}
                  {sortOrder === "asc" ? "Asc" : "Desc"}
                </SortButton>
              </SortContainer>
            </Col>
          </Row>

          <StyledTable>
            <thead>
              <tr>
                <th
                  style={{ width: "20%" }}
                  onClick={() => handleSortColumn("name")}
                >
                  Nama Produk{" "}
                  {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  style={{ width: "15%" }}
                  onClick={() => handleSortColumn("category")}
                >
                  Kategori{" "}
                  {sortBy === "category" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  style={{ width: "10%" }}
                  onClick={() => handleSortColumn("stok")}
                >
                  Stok {sortBy === "stock" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  style={{ width: "15%" }}
                  onClick={() => handleSortColumn("price")}
                >
                  Harga (Rp){" "}
                  {sortBy === "price" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {products && products.length > 0 ? (
                products.map((item, index: number) => (
                  <React.Fragment key={item._id || index}>
                    <tr>
                      <td>
                        <ProductNameCell>
                          <ProductImage
                            src={item.image || `/avatar.svg`}
                            alt={item.name || "Product"}
                          />
                          <span>{item.name || "-"}</span>
                        </ProductNameCell>
                      </td>
                      <td className="max-w-[100px]">
                        <PClamp>{item.category || "-"}</PClamp>
                      </td>
                      <td>
                        {item.stok || 0} {item.satuan || ""}
                      </td>
                      <td>{(item.price || 0).toLocaleString("id-ID")}</td>
                      <td>
                        <StatusBadge status={getStatusType(item.status)}>
                          {isStatusActive(item.status) ? (
                            <img src="/check.svg" alt="check" />
                          ) : (
                            <img src="/check-abu.svg" alt="check" />
                          )}
                          {getStatusLabel(item.status)}
                        </StatusBadge>
                      </td>
                      <td>
                        <ActionCell>
                          <ActionButton onClick={() => handleDetail(item)}>
                            Lihat Detail
                          </ActionButton>

                          <DropdownActionData
                            handleEdit={() => handleEdit(item)}
                            handleDelete={() =>
                              setModalDelete({ show: true, data: item })
                            }
                          />
                        </ActionCell>
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    style={{ textAlign: "center", padding: "32px" }}
                  >
                    <P14Regular className="text-muted">
                      Tidak ada data produk
                    </P14Regular>
                  </td>
                </tr>
              )}
            </tbody>
          </StyledTable>

          <PaginationContainer>
            <PaginationInfo>
              <span>Menampilkan</span>
              <ItemsPerPageSelect
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </ItemsPerPageSelect>
              <span>Dari {pagination.total || 0} Data</span>
            </PaginationInfo>

            <ReactPaginate
              previousLabel="‹"
              nextLabel="›"
              pageCount={pagination.pages || 1}
              onPageChange={handlePageChange}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              forcePage={currentPage - 1}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
            />
          </PaginationContainer>
        </Card>
      </ContainerStyled>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <DFlexColumn className="w-100 gap-1">
            <DFlexJustifyBetween>
              <Modal.Title className="mb-0">{isDetail === true ? "Detail Produk" : isEdit === true ? "Edit Produk" : "Tambah Produk"}</Modal.Title>
              <DFlexALignCenter
                className="px-2"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">X</span>
              </DFlexALignCenter>
            </DFlexJustifyBetween>
            <P14Regular className="m-0 text-muted text-start text-ellipsis">
              Masukkan detail produk untuk menambahkannya ke inventaris.
            </P14Regular>
          </DFlexColumn>
        </Modal.Header>
        <Modal.Body>
          <ProductsForm
            onClose={handleClose}
            callbackSubmit={callbackSubmit}
            dataSelected={dataSelected}
            onDetail={isDetail}
            onEdit={isEdit}
          />
        </Modal.Body>
      </Modal>

      <ModalConfirm
        modalProps={modalDelete}
        onClose={handleCloseModalDelete}
        handleApplyConfirm={handleApplyConfirm}
        title="Product"
        body={modalDelete?.data?.name}
      />
    </>
  );
}

export default ProductsList;
