import React from "react"
import ReactDOM from "react-dom"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import { Global } from "@emotion/core"
import { config } from "./hooks/useOvermind"
import Inject from "./components/inject"
import GlobalStyles from "./styles/globalStyles"
import Routes from "./components/routes"

const overmind = createOvermind(config)

ReactDOM.render(
  <React.StrictMode>
    <Inject />
    <Provider value={overmind}>
      <Global styles={GlobalStyles} />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
