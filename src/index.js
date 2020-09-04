import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import { config } from "./hooks/useOvermind"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const overmind = createOvermind(config)

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <Layout>
        <Router>
          <Home path="/" />
          <NotFound path="*" />
        </Router>
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
