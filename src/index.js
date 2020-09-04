import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <Home path="/" />
        <NotFound path="*" />
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
)
