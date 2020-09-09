import React from "react"
import PropTypes from "prop-types"
import { ButtonWrapper } from "./styles"

const Button = ({ text, action }) => (
  <ButtonWrapper onClick={action}>{text}</ButtonWrapper>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
}

Button.defaultProps = {
  action: null,
}

export default Button
