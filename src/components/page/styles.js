import styled from "@emotion/styled"

// eslint-disable-next-line import/prefer-default-export
export const PageContent = styled.main`
  max-width: 720px;
  width: calc(100% - (var(--xl) * 2));
  margin: var(--xl) auto;
  padding: var(--xl) var(--xl) var(--xs);
  background-color: white;
  border-radius: var(--xxs);
  box-shadow: var(--shadow);
  border: 1px solid var(--mid);
  h2 {
    margin-top: 0;
    color: var(--primary);
  }
  ul {
    margin-top: var(--md);
  }
  a {
    color: var(--primary);
    transition: color 0.2s ease-in-out;
    :hover {
      color: var(--dark);
    }
  }
`
