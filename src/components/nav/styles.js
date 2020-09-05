import styled from "@emotion/styled"

export const NavWrapper = styled.nav`
  background-color: var(--primary);
`

export const NavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(var(--xl) * 2);
  max-width: 1440px;
  width: calc(100% - (var(--xl) * 2));
  margin: 0 auto;
`

export const NavLogo = styled.h1`
  font-size: var(--md);
  a {
    color: white;
    text-decoration: none;
    span {
      color: var(--light);
      font-weight: 300;
    }
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
    color: white;
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
      transform: translateY(0.25rem);
      background-color: var(--light);
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
    :hover::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
