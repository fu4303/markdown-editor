import React from "react"
import { Link } from "@reach/router"
import { NavWrapper, NavLogo, NavMenu, NavMenuItem } from "./styles"

const Nav = () => (
  <NavWrapper>
    <NavLogo>
      <Link to="/">
        <span>Markdown</span>Forge
      </Link>
    </NavLogo>
    <NavMenu>
      <NavMenuItem>
        <Link to="/info">Info</Link>
      </NavMenuItem>
      <NavMenuItem>
        <a href="https://github.com/justinjunodev/markdown-forge/">
          Contribute
        </a>
      </NavMenuItem>
    </NavMenu>
  </NavWrapper>
)

export default Nav
