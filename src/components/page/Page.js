import React from "react"
import PropTypes from "prop-types"
import { PageContent } from "./styles"

const Page = ({ children }) => <PageContent>{children}</PageContent>

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
