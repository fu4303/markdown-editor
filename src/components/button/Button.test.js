import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Button from "./Button"

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button text="button prop text" />)
  })

  it("matches snapshot with data passed correctly", () => {
    const wrapper = shallow(
      <Button text="button prop text" action={jest.fn()} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
