import React from "react"
import Fade from "react-reveal/Fade"
import { useOvermind } from "../../hooks/useOvermind"
import { MarkdownWrapper, MarkdownEditor, MarkdownPreview } from "./styles"

const Markdown = () => {
  const {
    state,
    actions: { updateMarkdown },
  } = useOvermind()

  return (
    <Fade delay={250} duration={1500}>
      <MarkdownWrapper>
        <MarkdownEditor
          onChange={(e) => updateMarkdown(e)}
          value={state.markdown}
        />
        <MarkdownPreview source={state.markdown} />
      </MarkdownWrapper>
    </Fade>
  )
}

export default Markdown
