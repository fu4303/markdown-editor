import React from "react"
import PropTypes from "prop-types"
import { PageContent } from "./styles"

const Page = ({ children, title }) => (
  <PageContent>
    <h2>{title}</h2>
    <hr />
    {children}
  </PageContent>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Page
