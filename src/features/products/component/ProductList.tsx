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
  const navigate = useNavigate();
  const { loginUser } = useSelector((state: any) => state.auth);
  console.log("loginuser redux", loginUser);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [show, setShow] = useState(false);
  const [dataSelected, setDataSelected] = useState<IProduct>();
  const [refreshKey, setRefreshKey] = useState(nanoid());

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("nama");
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getProductData();
  }, [
    refreshKey,
    currentPage,
    itemsPerPage,
    searchTerm,
    categoryFilter,
    statusFilter,
    sortBy,
    sortOrder,
  ]);

  const getProductData = async () => {
    try {
      // Build search_by array based on active filters
      const searchBy: string[] = [];
      if (searchTerm) searchBy.push("nama");
      if (categoryFilter) searchBy.push("kategori");
      if (statusFilter) searchBy.push("status");

      const params: IParamsGetProduct = {
        search: searchTerm || categoryFilter || statusFilter || "",
        search_by: searchBy.length > 0 ? searchBy : [],
        operator: "and",
        orderBy: sortBy,
        order: sortOrder,
        page: currentPage,
        size: itemsPerPage,
      };

      const request: any = await getProducts({ params: params });

      // Handle response structure { data: [...], pagination: {...} }
      if (request && request.data) {
        setProducts(request.data);

        // Update pagination info from server
        if (request.pagination) {
          setPagination(request.pagination);
        }
      } else {
        // Fallback if structure is different
        setProducts([]);
        setPagination({ page: 1, size: 10, total: 0, pages: 1 });
      }
    } catch (error) {
      console.log(error);
      setProducts([]);
      setPagination({ page: 1, size: 10, total: 0, pages: 1 });
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1); // ReactPaginate uses 0-based index, API uses 1-based
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  // Get unique categories from products
  const categories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );
  const categoryOptions = categories.map((cat) => ({ label: cat, value: cat }));

  const statusOptions = [
    { label: "Aktif", value: "aktif" },
    { label: "Nonaktif", value: "nonaktif" },
  ];

  const sortOptions = [
    { label: "Nama Produk", value: "nama" },
    { label: "Kategori", value: "categori" },
    { label: "Harga", value: "harga" },
    { label: "Stok", value: "stokawal" },
  ];

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
      const resp = await deleteProduct(modalDelete?.data?.id);
      console.log(resp);
      setRefreshKey(nanoid()); // Generate new unique ID to trigger refresh
      handleCloseModalDelete();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item: IProduct) => {
    setDataSelected(item);
    handleShow();
    console.log({ item });
  };
  // Helper function to get status label
  const getStatusLabel = (status: any) => {
    if (typeof status === "string") {
      return status.charAt(0).toUpperCase() + status.slice(1);
    }
    return status ? "Aktif" : "Nonaktif";
  };

  // Helper function to get status type for badge
  const getStatusType = (status: any): string => {
    if (typeof status === "string") {
      return status.toLowerCase();
    }
    return status ? "aktif" : "nonaktif";
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
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                      }}
                    />
                  </SearchInputWrapper>
                </Col>
                <Col md={4}>
                  <FormSelectControl
                    placeholder="Semua Kategori"
                    options={categoryOptions}
                    version="simple"
                    style={{ minWidth: "180px" }}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setCategoryFilter(e.target.value);
                      setCurrentPage(1); // Reset to first page on filter
                    }}
                  />
                </Col>
                <Col md={4}>
                  <FormSelectControl
                    placeholder="Semua Status"
                    options={statusOptions}
                    version="simple"
                    style={{ minWidth: "160px" }}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1); // Reset to first page on filter
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <SortContainer>
                <span style={{ marginRight: "8px", fontSize: "14px" }}>
                  Urutkan:
                </span>
                <FormSelectControl
                  placeholder="Nama Produk"
                  options={sortOptions}
                  version="simple"
                  style={{ minWidth: "150px" }}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSortBy(e.target.value)
                  }
                />
                <SortButton
                  onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                  }
                >
                  {sortOrder === "asc" ? "↑" : "↓"}{" "}
                  {sortOrder === "asc" ? "Asc" : "Desc"}
                </SortButton>
              </SortContainer>
            </Col>
          </Row>

          <StyledTable>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Nama Produk</th>
                <th style={{ width: "15%" }}>Kategori</th>
                <th style={{ width: "10%" }}>Stok</th>
                <th style={{ width: "15%" }}>Harga (Rp)</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "10%", textAlign: "center" }}></th>
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
                          {item.status ? (
                            <img src="/check.svg" alt="check" />
                          ) : (
                            <img src="/check-abu.svg" alt="check" />
                          )}

                          {getStatusLabel(item.status)}
                        </StatusBadge>
                      </td>
                      <td>
                        <ActionCell>
                          <ActionButton
                            onClick={() => navigate(String(item?._id))}
                          >
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
                <option value={10}>10</option>
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
              forcePage={currentPage - 1} // ReactPaginate uses 0-based index
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
              <Modal.Title className="mb-0">Form Product</Modal.Title>
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
