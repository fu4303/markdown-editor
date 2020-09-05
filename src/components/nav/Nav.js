import React from "react"
import { Link } from "@reach/router"
import { NavWrapper, NavContent, NavLogo, NavMenu, NavMenuItem } from "./styles"

const Nav = () => (
  <NavWrapper>
    <NavContent>
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
    </NavContent>
  </NavWrapper>
)

export default Nav
