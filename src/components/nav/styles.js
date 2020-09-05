import styled from "@emotion/styled"

export const NavWrapper = styled.nav`
  height: calc(var(--lg) * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--sm);
  background-color: var(--primary);
`

export const NavLogo = styled.h1`
  font-size: var(--md);
  span {
    font-weight: 300;
  }
  a {
    color: var(--light);
    text-decoration: none;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  margin: 0;
`

export const NavMenuItem = styled.li`
  font-size: var(--sm);
  :not(:last-of-type) {
    margin-right: var(--sm);
  }
  a {
    color: var(--light);
    text-decoration: none;
    padding-bottom: 2px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      left: 0;
      bottom: 0;
      opacity: 0;
      transform: translateY(4px);
      background-color: var(--light);
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
    :hover::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
