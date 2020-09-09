import styled from "@emotion/styled"

// eslint-disable-next-line import/prefer-default-export
export const ButtonWrapper = styled.button`
  background: var(--light);
  border: none;
  border-radius: var(--xxs);
  padding: var(--xxs) var(--sm);
  font-size: var(--xs);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: var(--primary);
  -webkit-appearance: none;
  transition: transform 0.1s ease-in-out;
  outline: none;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
`
