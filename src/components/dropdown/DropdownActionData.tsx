import { nanoid } from "nanoid";
import React from "react";
import { Dropdown } from "react-bootstrap";
import DotDotIcon from "../../assets/icons/DotDotIcon";
import { RotateComponent } from "../../styled/rotate.styled";
import { StyledToggle } from "./DropdownAvatar";

export default function DropdownActionData({
  item,
  handleMonitoring,
  handleDetail,
  handleEdit,
  handleDelete,
  handleDeleteAll,
  handleUpload,
  actionTitle,
  verticalToggler = false,
}: IDropdownActionData) {
  const defaultActionTitle = {
    delete: "Delete",
    deleteAll: "Delete All Content",
    detail: "Detail",
    edit: "Edit",
    upload: "Upload",
    monitoring: "Monitoring",
  };

  return (
    <Dropdown className="hide-toogle hide-focus" >
      <StyledToggle variant="light" id={`dropdown-act-${nanoid()}`}>
        <RotateComponent value={verticalToggler ? "90" : "0"}>
          <DotDotIcon />
        </RotateComponent>
      </StyledToggle>
      <Dropdown.Menu style={{ zIndex: "999" }}>
        {handleDetail && (
          <Dropdown.Item onClick={() => handleDetail(item)}>
            {actionTitle?.detail || defaultActionTitle?.detail}
          </Dropdown.Item>
        )}
        {handleMonitoring && (
          <Dropdown.Item
            onClick={() => handleMonitoring(item)}
            style={{ color: "var(--black-900)" }}
          >
            {actionTitle?.monitoring || defaultActionTitle?.monitoring}
          </Dropdown.Item>
        )}
        {handleUpload && (
          <Dropdown.Item onClick={() => handleUpload(item)}>
            {actionTitle?.upload || defaultActionTitle?.upload}
          </Dropdown.Item>
        )}
        {handleEdit && (
          <Dropdown.Item
            onClick={() => handleEdit(item)}
            style={{ color: "var(--black-900)" }}
          >
            {actionTitle?.edit || defaultActionTitle?.edit}
          </Dropdown.Item>
        )}
        {handleDelete && (
          <Dropdown.Item
            onClick={() => handleDelete(item)}
            className="text-danger"
          >
            {actionTitle?.delete || defaultActionTitle?.delete}
          </Dropdown.Item>
        )}
        {handleDeleteAll && (
          <Dropdown.Item
            onClick={() => handleDeleteAll(item)}
            className="text-danger"
          >
            {actionTitle?.deleteAll || defaultActionTitle?.deleteAll}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

interface IDropdownActionData {
  item?: any;
  handleMonitoring?: any;
  handleDetail?: any;
  handleEdit?: any;
  handleDelete?: any;
  handleDeleteAll?: any;
  handleUpload?: any;
  actionTitle?: {
    detail?: string | React.ReactNode;
    edit?: string | React.ReactNode;
    delete?: string | React.ReactNode;
    deleteAll?: string | React.ReactNode;
    upload?: string | React.ReactNode;
    monitoring?: string | React.ReactNode;
  };
  verticalToggler?: boolean;
}
