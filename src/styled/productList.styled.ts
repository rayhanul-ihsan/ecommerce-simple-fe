import styled from "styled-components";
import { DFlexColumn } from "./flex.styled";
import { Table } from "react-bootstrap";

export const ContainerStyled = styled(DFlexColumn)`
  width: 100%;
  background: transparent !important;
  padding: 32px 64px !important;
  margin: 0;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
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

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

export const SortButton = styled.button`
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

export const StyledTable = styled(Table)`
  background: white;
  border-radius: 8px;
  overflow: hidden;

  thead {
    tr {
      background-color: #F4F7FA !important;
    }

    th {
      padding: 12px 16px;
      font-size: 14px;
      font-weight: 600;
      color: #374151;
      border-bottom: 2px solid #e5e7eb;
      text-align: left;
      background-color: #F4F7FA !important;
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

export const ProductNameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  object-fit: cover;
  background: #f3f4f6;
`;

export const StatusBadge = styled.span<{ status: string }>`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  border: 1px solid #065f46;
  padding: 4px 8px;
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

export const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

export const ActionButton = styled.button`
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

export const MoreButton = styled.button`
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

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: transparent !important;

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

export const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
`;

export const ItemsPerPageSelect = styled.select`
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