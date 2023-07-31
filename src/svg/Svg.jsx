import styled from "styled-components"

const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})`
  display: block;
  width: ${({ size }) => (size ? `${size}px` : "var(--svg-icon-size)")};
  height: ${({ size }) => (size ? `${size}px` : "var(--svg-icon-size)")};

  .icon {
    fill: currentColor;
    transition: fill var(--theme-transition-props);
  }
`

export default Svg
