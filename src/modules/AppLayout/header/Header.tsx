import { Navbar } from "react-bootstrap";
import LazyImage from "../../../components/LazyLoad/LazyImage";
import { DFlexJustifyBetween } from "../../../styled/flex.styled";
import DropdownAvatar from "../../../components/dropdown/DropdownAvatar";
import styled from "styled-components";

export default function Header() {
  return (
    // <Navbar>
    <HeaderWrapper>
      <DFlexJustifyBetween className="w-100">
        <Navbar.Brand href="products/list">
          <LazyImage src="/logo.svg" width={100} />
        </Navbar.Brand>

        <DropdownAvatar />
      </DFlexJustifyBetween>
    </HeaderWrapper>
    // </Navbar>
  );
}
const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
`;
