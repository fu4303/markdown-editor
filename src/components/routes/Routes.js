import React from "react"
import { Router } from "@reach/router"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Lost from "../../pages/Lost"

const Routes = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <Lost path="*" />
  </Router>
)

export default Routes
