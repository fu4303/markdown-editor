import React from "react"
import { Router } from "@reach/router"
import Home from "../pages/Home"
import Info from "../pages/Info"
import Lost from "../pages/Lost"

const Routes = () => (
  <Router>
    <Home path="/" />
    <Info path="/info" />
    <Lost path="*" />
  </Router>
)

export default Routes
