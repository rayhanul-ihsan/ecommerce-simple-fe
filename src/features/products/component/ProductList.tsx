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

function ProductsList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [show, setShow] = useState(false);
  const [dataSelected, setDataSelected] = useState<IProduct>();
  const triggerGet = useRef<number>(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const [modalDelete, setModalDelete] = useState<any>({
    show: false,
    data: null,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const params: IParamsGetProduct = {
      skip: 0,
      limit: 100,
      sortBy: "id",
      order: "asc",
    };
    getProductData(params);

    return () => {
      console.log("clean");
    };
  }, [triggerGet]);

  const getProductData = async (params: IParamsGetProduct) => {
    try {
      const request: any = await getProducts({ params: params });
      setProducts(request.products);
      setTotalItems(request.products.length);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFiltersAndSort = useCallback(() => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product.description === categoryFilter
      );
    }

    if (statusFilter) {
      const isActive = statusFilter === "Aktif";
      filtered = filtered.filter((product) => product.status === isActive);
    }

    filtered.sort((a, b) => {
      const aValue = a[sortBy as keyof IProduct];
      const bValue = b[sortBy as keyof IProduct];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    setFilteredProducts(filtered);
    setTotalItems(filtered.length);
    setCurrentPage(0);
  }, [products, searchTerm, categoryFilter, statusFilter, sortBy, sortOrder]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [applyFiltersAndSort]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(0);
  };

  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const categories = Array.from(
    new Set(products.map((p) => p.description).filter(Boolean))
  );
  const categoryOptions = categories.map((cat) => ({ label: cat, value: cat }));

  const statusOptions = [
    { label: "Aktif", value: "Aktif" },
    { label: "Menipis", value: "Menipis" },
    { label: "Nonaktif", value: "Nonaktif" },
  ];

  const sortOptions = [
    { label: "Nama Produk", value: "title" },
    { label: "Kategori", value: "description" },
    { label: "Harga", value: "price" },
    { label: "Stok", value: "id" },
  ];

  const callbackSubmit = (values: IProduct) => {
    triggerGet.current = Date.now();
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
      handleCloseModalDelete();
    } catch (error) {}
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
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </SearchInputWrapper>
                </Col>
                <Col md={4}>
                  <FormSelectControl
                    placeholder="Semua Kategori"
                    options={categoryOptions}
                    version="simple"
                    style={{ minWidth: "180px" }}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setCategoryFilter(e.target.value)
                    }
                  />
                </Col>
                <Col md={4}>
                  <FormSelectControl
                    placeholder="Semua Status"
                    options={statusOptions}
                    version="simple"
                    style={{ minWidth: "160px" }}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setStatusFilter(e.target.value)
                    }
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
                <th style={{ width: "10%", textAlign: "center" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product, index: number) => (
                <React.Fragment key={product.id}>
                  <tr>
                    <td>
                      <ProductNameCell>
                        <ProductImage src={`/avatar.svg`} alt={product.title} />
                        <span>{product.title}</span>
                      </ProductNameCell>
                    </td>
                    <td className="max-w-[100px]">
                      <PClamp>{product.description || "Meja"}</PClamp>
                    </td>
                    <td>{product.id || 0}</td>
                    <td>{product.price?.toLocaleString("id-ID") || "0"}</td>
                    <td>
                      <StatusBadge
                        status={product.status ? "aktif" : "nonaktif"}
                      >
                        {product.status ? "Aktif" : "Nonaktif"}
                      </StatusBadge>
                    </td>
                    <td>
                      <ActionCell>
                        <ActionButton
                          onClick={() => navigate(String(product?.id))}
                        >
                          Lihat Detail
                        </ActionButton>
                        <MoreButton>...</MoreButton>
                      </ActionCell>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
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
              <span>Dari {totalItems} Data</span>
            </PaginationInfo>

            <ReactPaginate
              previousLabel="‹"
              nextLabel="›"
              pageCount={pageCount}
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
              forcePage={currentPage}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
            />
          </PaginationContainer>
        </Card>
      </ContainerStyled>

      <Modal show={show} onHide={handleClose} size="lg">
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
      <Modal show={modalDelete?.show} size="sm">
        <Modal.Header>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Apakah anda yakin?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleApplyConfirm("x")}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleApplyConfirm("y")}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductsList;

export const ContainerStyled = styled(DFlexColumn)`
  width: 100%;
  background: transparent !important;
  padding: 32px 64px !important;
  margin: 0;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

const SortButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }
`;

const StyledTable = styled(Table)`
  background: white;
  border-radius: 8px;
  overflow: hidden;

  thead {
    background: #f9fafb;

    th {
      padding: 12px 16px;
      font-size: 14px;
      font-weight: 600;
      color: #374151;
      border-bottom: 2px solid #e5e7eb;
      text-align: left;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #e5e7eb;
      transition: background-color 0.2s;

      &:hover {
        background-color: #f9fafb;
      }

      &:last-child {
        border-bottom: none;
      }
    }

    td {
      padding: 16px;
      font-size: 14px;
      color: #1f2937;
      vertical-align: middle;
    }
  }
`;

const ProductNameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  object-fit: cover;
  background: #f3f4f6;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;

  ${({ status }) => {
    if (status === "aktif") {
      return `
        background: #d1fae5;
        color: #065f46;
      `;
    } else if (status === "menipis") {
      return `
        background: #fed7aa;
        color: #92400e;
      `;
    } else {
      return `
        background: #e5e7eb;
        color: #374151;
      `;
    }
  }}
`;

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  background: transparent;
  color: #f97316;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: #fff7ed;
  }
`;

const MoreButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: transparent !important;
  /* border-radius: 8px;
  border: 1px solid #e5e7eb; */

  .pagination {
    display: flex;
    list-style: none;
    gap: 4px;
    margin: 0;
    padding: 0;

    .page-item {
      .page-link {
        padding: 8px 12px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        color: #374151;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 14px;

        &:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }
      }

      &.active .page-link {
        background: #f97316;
        border-color: #f97316;
        color: white;
      }

      &.disabled .page-link {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const ItemsPerPageSelect = styled.select`
  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #3b82f6;
  }
`;
