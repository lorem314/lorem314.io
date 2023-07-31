import styled from "styled-components"

const FixedButton = styled.button.attrs({
  className: "fixed-button",
})`
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 0.25rem;
  padding: 4px;
  margin: 9px;

  position: fixed;
  top: 0;
  ${({ position }) => position}: 0;

  width: 32px;
  height: 32px;

  --svg-icon-size: 28px;
`

export default FixedButton
