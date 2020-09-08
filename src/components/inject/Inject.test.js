import React from "react"
import { shallow } from "enzyme"
import Inject from "./Inject"

describe("<Inject />", () => {
  it("renders without crashing", () => {
    shallow(<Inject />)
  })
})
