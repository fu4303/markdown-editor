import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import Home from "./pages/Home"
import Create from "./pages/Create"
import NotFound from "./pages/NotFound"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Create path="/create" />
      <NotFound path="*" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
