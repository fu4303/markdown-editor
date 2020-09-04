import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

const Markdown = () => {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!")

  function handleChange(e) {
    setMarkdown(e.target.value)
  }

  return (
    <>
      <textarea onChange={handleChange} value={markdown} />
      <ReactMarkdown source={markdown} />
    </>
  )
}

export default Markdown
