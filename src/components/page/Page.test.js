import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Page from "./Page"

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(
      <Page title="page prop title">
        <p>Page children content</p>
      </Page>
    )
  })

  it("matches snapshot with data passed correctly", () => {
    const wrapper = shallow(
      <Page title="page prop title">
        <p>Page children content</p>
      </Page>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
