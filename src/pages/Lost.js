import React from "react"
import { Link } from "@reach/router"
import Nav from "../components/nav"
import Page from "../components/page"

const Lost = () => (
  <>
    <Nav />
    <Page title="Page Not Found">
      <p>The page you are looking does not exist or has been removed.</p>
      <p>
        <Link to="/">Return to Editor?</Link>
      </p>
    </Page>
  </>
)

export default Lost
