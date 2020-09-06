import React from "react"
import { Link } from "@reach/router"
import { useOvermind } from "../../hooks/useOvermind"
import { NavWrapper, NavContent, NavLogo, NavMenu, NavMenuItem } from "./styles"
import Button from "../button"

const Nav = () => {
  const {
    actions: { saveMarkdown, resetMarkdown },
  } = useOvermind()

  return (
    <NavWrapper>
      <NavContent>
        <NavLogo>
          <Link to="/">
            <span>Markdown</span> Forge
          </Link>
        </NavLogo>
        <NavMenu>
          <NavMenuItem>
            <Link to="/about">About</Link>
          </NavMenuItem>
          <NavMenuItem>
            <Button type="button" action={resetMarkdown} text="Reset" />
          </NavMenuItem>
          <NavMenuItem>
            <Button type="button" action={saveMarkdown} text="Download" />
          </NavMenuItem>
        </NavMenu>
      </NavContent>
    </NavWrapper>
  )
}

export default Nav
