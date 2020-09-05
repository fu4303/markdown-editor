import React from "react"
import { Link } from "@reach/router"

const Nav = () => (
  <nav>
    <h1>Markdown Forge</h1>
    <ul>
      <li>
        <Link to="/info">Info</Link>
      </li>
      <li>Github</li>
      <li>Twitter</li>
    </ul>
  </nav>
)

export default Nav
