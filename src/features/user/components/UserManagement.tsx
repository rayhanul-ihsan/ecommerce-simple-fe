import React, { useEffect, useRef, useState } from "react";
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
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { IParamsGetUser, IUser } from "../../../interface/user.interface";
import { deleteUser, getUsers } from "../UserAPI";
import UserForm from "./UserForm";
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
import {
  DFlex,
  DFlexALignCenter,
  DFlexColumn,
  DFlexJustifyBetween,
  DFlexJustifyStart,
} from "../../../styled/flex.styled";
import {
  P12Regular,
  P14Regular,
  P16Medium,
  P18High,
} from "../../../styled/text.styled";
import FormSelectControl from "../../../components/input/FormSelectControl";
import FiSearchIcon from "../../../assets/icons/FiSearchIcon";
import DropdownActionData from "../../../components/dropdown/DropdownActionData";
import ModalConfirm from "../../../components/modal/ModalConfirm";
import { nanoid } from "nanoid";

function UserManagement() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<IUser[]>([]);
  const [show, setShow] = useState(false);
  const [dataSelected, setDataSelected] = useState<IUser | undefined>();
  const [refreshKey, setRefreshKey] = useState(nanoid());

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<any>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
    total: 0,
    pages: 1,
  });

  const [modalDelete, setModalDelete] = useState<{
    show: boolean;
    data: IUser | null;
  }>({
    show: false,
    data: null,
  });

  const handleClose = () => {
    setShow(false);
    setDataSelected(undefined);
  };

  const handleShow = () => setShow(true);

  // Fetch users data whenever dependencies change
  useEffect(() => {
    getUsersData();
  }, [
    refreshKey,
    searchTerm,
    statusFilter,
    sortOrder,
    currentPage,
    itemsPerPage,
  ]);

  const buildQueryParams = (): IParamsGetUser => {
    const searchBy: string[] = [];
    const searchValues: string[] = [];

    // Build search parameters - pisahkan search term dan filter
    if (searchTerm.trim()) {
      searchBy.push("username");
      searchValues.push(searchTerm.trim());
    }

    if (statusFilter !== "") {
      searchBy.push("status");
      searchValues.push(statusFilter);
    }

    // Gunakan searchValue pertama (prioritas ke search term)
    const searchValue = searchValues.length > 0 ? searchValues[0] : "";

    return {
      search: searchValue,
      search_by: searchBy,
      operator: searchBy.length > 1 ? "and" : "and",
      orderBy: "created_at",
      order: sortOrder,
      page: currentPage,
      size: itemsPerPage,
    };
  };

  const getUsersData = async () => {
    try {
      const params = buildQueryParams();

      // Build query params dengan kondisi
      const queryParams: IParamsGetUser = {
        orderBy: params.orderBy,
        order: params.order,
        page: params.page,
        size: params.size,
        operator: params.operator,
      };

      // Hanya tambahkan search dan search_by jika ada nilai
      if (params.search && params.search_by && params.search_by.length > 0) {
        queryParams.search = params.search;
        queryParams.search_by = params.search_by;
      }

      const request: any = await getUsers({ params: queryParams });

      // Handle response structure { data: [...], pagination: {...} }
      if (request && request.data) {
        setUsers(request.data);

        // Update pagination info from server
        if (request.pagination) {
          setPagination(request.pagination);
        }
      } else {
        // Fallback if structure is different
        setUsers([]);
        setPagination({ page: 1, size: 10, total: 0, pages: 1 });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
      setPagination({ page: 1, size: 10, total: 0, pages: 1 });
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1); // ReactPaginate uses 0-based index
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Convert string value to boolean or empty string
    setStatusFilter(
      e.target.value === "true" ? true : e.target.value === "false" ? false : ""
    );
    setCurrentPage(1);
  };

  const statusOptions = [
    { label: "Semua Status", value: "" },
    { label: "Aktif", value: "true" },
    { label: "Nonaktif", value: "false" },
  ];

  const callbackSubmit = (values: IUser) => {
    setRefreshKey(nanoid());
    handleClose();
  };

  const handleEdit = (item: IUser) => {
    setDataSelected(item);
    handleShow();
    console.log({ item });
  };

  const handleCloseModalDelete = () => {
    setModalDelete({ show: false, data: null });
  };

  const handleShowModalDelete = (user: IUser) => {
    setModalDelete({ show: true, data: user });
  };

  const handleApplyConfirm = (type: "cancel" | "confirm") => {
    if (type === "cancel") {
      handleCloseModalDelete();
    } else {
      deleteUserById();
    }
  };

  const deleteUserById = async () => {
    try {
      if (modalDelete?.data?._id) {
        await deleteUser(String(modalDelete.data._id));
        setRefreshKey(nanoid());
        handleCloseModalDelete();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <>
      <ContainerStyled className="mt-5">
        <div className="d-flex justify-content-between">
          <DFlexColumn className="mb-4">
            <P18High className="m-0 fw-bold">Management User</P18High>
            <P14Regular className="m-0 text-muted">
              Lihat semua User yang tersedia di inventaris.
            </P14Regular>
          </DFlexColumn>
          <DFlex className="gap-4">
            <Button variant="primary" onClick={handleShow}>
              + Tambah User
            </Button>
          </DFlex>
        </div>

        <Card className="mb-5 position-relative">
          <Row className="p-4">
            <Col md={6}>
              <DFlexJustifyStart className="gap-3">
                <SearchInputWrapper>
                  <SearchIcon>
                    <FiSearchIcon />
                  </SearchIcon>
                  <SearchInput
                    type="text"
                    placeholder="Cari user"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </SearchInputWrapper>
                <FormSelectControl
                  placeholder="Semua Status"
                  options={statusOptions}
                  version="simple"
                  value={statusFilter === true ? "true" : statusFilter === false ? "false" : ""}
                  style={{ minWidth: "160px" }}
                  onChange={handleStatusChange}
                />
              </DFlexJustifyStart>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <SortContainer>
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
                <th style={{ width: "25%" }}>Nama User</th>
                <th style={{ width: "15%" }}>No Telp</th>
                <th style={{ width: "15%" }}>Tanggal Dibuat</th>
                <th style={{ width: "10%" }}>Status</th>
                <th style={{ width: "20%", textAlign: "center" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <DFlexALignCenter className="gap-3">
                        <ProductImage src={item.image} alt={item.username} />
                        <DFlexColumn className="gap-0">
                          <P16Medium className="m-0">{item.username}</P16Medium>
                          <P14Regular className="m-0">{item.email}</P14Regular>
                        </DFlexColumn>
                      </DFlexALignCenter>
                    </td>
                    <td>{item.phone || "-"}</td>
                    <td>{formatDate(item.created_at)}</td>
                    <td>
                      <StatusBadge status={item.status ? "aktif" : "nonaktif"}>
                        {item.status ? "Aktif" : "Nonaktif"}
                      </StatusBadge>
                    </td>
                    <td>
                      <ActionCell>
                        <ActionButton
                          onClick={() => navigate(String(item._id))}
                        >
                          Lihat Detail
                        </ActionButton>
                        <DropdownActionData
                          handleEdit={() => handleEdit(item)}
                          handleDelete={() => handleShowModalDelete(item)}
                        />
                      </ActionCell>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    style={{ textAlign: "center", padding: "2rem" }}
                  >
                    Tidak ada data user
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
              <span>Dari {pagination.total} Data</span>
            </PaginationInfo>

            <ReactPaginate
              previousLabel="‹"
              nextLabel="›"
              pageCount={pagination.pages}
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

      {/* Modal Tambah/Edit User */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <DFlexColumn className="w-100 gap-1">
            <DFlexJustifyBetween>
              <Modal.Title className="mb-0">
                {dataSelected ? "Edit User" : "Tambah User"}
              </Modal.Title>
              <DFlexALignCenter
                className="px-2"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">✕</span>
              </DFlexALignCenter>
            </DFlexJustifyBetween>
            <P14Regular className="m-0 text-muted text-start text-ellipsis">
              Masukkan detail user untuk menambahkannya ke management user
            </P14Regular>
          </DFlexColumn>
        </Modal.Header>
        <Modal.Body>
          <UserForm
            onClose={handleClose}
            callbackSubmit={callbackSubmit}
            dataSelected={dataSelected}
          />
        </Modal.Body>
      </Modal>

      {/* Modal Delete Confirmation */}
      <ModalConfirm
        modalProps={modalDelete}
        onClose={handleCloseModalDelete}
        handleApplyConfirm={handleApplyConfirm}
        title="User"
        body={modalDelete.data?.username}
      />
    </>
  );
}

export default UserManagement;