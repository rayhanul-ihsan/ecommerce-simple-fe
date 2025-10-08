import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import LazyImage from "../LazyLoad/LazyImage";
import { Link } from "react-router-dom";

export default function DropdownAvatar() {
  return (
    <Dropdown align="end">
      <StyledToggle variant="light" id="dropdown-avatar">
        <ToggleContent>
          <Arrow width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Arrow>
          <AdminName>Admin1</AdminName>
          <LazyImage
            src="/avatar.svg"
            width={36}
            height={36}
            alt="Avatar"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </ToggleContent>
      </StyledToggle>

      <StyledMenu>
        <StyledItem href="/user-management">Management User</StyledItem>
        <Dropdown.Divider />
        <StyledItem href="/signin" className="logout">
          Logout
        </StyledItem>
      </StyledMenu>
    </Dropdown>
  );
}

const StyledToggle = styled(Dropdown.Toggle)`
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  padding: 8px 12px;

  &::after {
    display: none !important;
  }
`;

const ToggleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AdminName = styled.span`
  font-weight: 600;
  color: #212529;
  font-size: 14px;
`;

const Arrow = styled.svg`
  color: #6c757d;
  transition: transform 0.2s;

  ${StyledToggle}[aria-expanded="true"] & {
    transform: rotate(180deg);
  }
`;

const StyledMenu = styled(Dropdown.Menu)`
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  margin-top: 8px;
  padding: 8px 0;
`;

const StyledItem = styled(Dropdown.Item)`
  padding: 10px 16px;
  color: #495057;
  transition: all 0.2s;
  font-size: 14px;

  &:hover {
    background: #f8f9fa;
    color: #212529;
  }

  &.logout:hover {
    background: #fff5f5;
    color: #dc3545;
  }
`;
