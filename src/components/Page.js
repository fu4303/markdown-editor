import React from "react"
import PropTypes from "prop-types"

const Page = ({ children }) => <main>{children}</main>

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
