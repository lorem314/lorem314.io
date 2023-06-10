import styled from "styled-components"

const FixedButton = styled.button.attrs({
  className: "fixed-button",
})`
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 25%;
  padding: 4px;

  position: fixed;
  top: 0px;
  ${(props) => props.position}: 0px;

  width: 32px;
  height: 32px;

  margin: 9px 10px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  --svg-icon-size: 24px;
  --svg-icon-color: whitesmoke;

  &:focus-visible {
    outline-width: 2px;
    outline-style: solid;
    outline-color: var(--link-color);
  }
`

export default FixedButton
