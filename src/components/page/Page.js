import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"
import { PageContent } from "./styles"

const Page = ({ children, title }) => (
  <Fade delay={250} duration={1500}>
    <PageContent>
      <h2>{title}</h2>
      <hr />
      {children}
    </PageContent>
  </Fade>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Page
