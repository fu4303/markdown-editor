import React from "react"
import { Link } from "@reach/router"
import Nav from "../components/Nav"
import Page from "../components/Page"

const Lost = () => (
  <>
    <Nav />
    <Page>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking does not exist or has been removed.</p>
      <Link to="/">Return to Markdown Forge</Link>
    </Page>
  </>
)

export default Lost
