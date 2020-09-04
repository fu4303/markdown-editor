import React from "react"
import ReactDOM from "react-dom"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import { config } from "./hooks/useOvermind"
import Routes from "./components/Routes"

const overmind = createOvermind(config)

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
