import styled from "styled-components"

const Svg = styled.svg.attrs({
  className: "svg",
  xmlns: "http://www.w3.org/2000/svg",
})`
  display: block;
  width: ${({ size }) => (size ? `${size}` : "var(--svg-icon-size)")};
  height: ${({ size }) => (size ? `${size}` : "var(--svg-icon-size)")};

  .icon {
    fill: currentColor;
    /* stroke: currentColor; */
    transition: fill var(--theme-transition-props),
      stroke var(--theme-transition-props);
  }
`

export default Svg
