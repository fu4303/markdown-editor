import React from "react"
import ReactMarkdown from "react-markdown"
import { useOvermind } from "../hooks/useOvermind"

const Markdown = () => {
  const {
    state,
    actions: { resetMarkdown, updateMarkdown, saveMarkdown },
  } = useOvermind()

  return (
    <>
      <textarea onChange={(e) => updateMarkdown(e)} value={state.markdown} />
      <ReactMarkdown source={state.markdown} />
      <button type="button" onClick={() => resetMarkdown()}>
        Test Reset
      </button>
      <button type="button" onClick={() => saveMarkdown()}>
        Test Save
      </button>
    </>
  )
}

export default Markdown
