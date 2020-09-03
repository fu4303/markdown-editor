import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import Layout from "./components/layout"
import Home from "./pages/Home"
import Create from "./pages/Create"
import NotFound from "./pages/NotFound"

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <Home path="/" />
        <Create path="/create" />
        <NotFound path="*" />
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
)
