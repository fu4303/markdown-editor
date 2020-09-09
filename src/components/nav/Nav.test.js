import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Nav from "./Nav"

describe("<Nav />", () => {
  it("renders without crashing", () => {
    shallow(<Nav />)
  })

  it("matches snapshot with data passed correctly", () => {
    const wrapper = shallow(<Nav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
