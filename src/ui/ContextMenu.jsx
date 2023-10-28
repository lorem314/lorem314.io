import styled from "styled-components"

const ContextMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  border: 1px solid var(--ui-default-border-color);
  margin: 0;
  border-radius: 0.25rem;
  background-color: var(--content-bg-0);

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: stretch;

  position: fixed;
  top: ${({ y }) => `${y + 1}px`};
  left: ${({ x }) => `${x + 1}px`};

  > li {
    &:hover {
      background-color: var(--ui-default-bg-hover);
    }

    > button {
      width: 100%;
      background: none;
      border: none;
    }
  }
`

export default ContextMenu
