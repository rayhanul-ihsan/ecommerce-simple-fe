import styled from "styled-components";

export const RotateComponent = styled.div<{ value: string }>`
  transform: rotate(${(props) => (props.value)}deg);
  width: fit-content;
  height: fit-content;
`