import React from "react"
import { useOvermind } from "../../hooks/useOvermind"
import {
  MarkdownWrapper,
  MarkdownEditor,
  MarkdownPreview,
  MarkdownOptions,
  MarkdownOption,
} from "./styles"

const Markdown = () => {
  const {
    state,
    actions: { resetMarkdown, updateMarkdown, saveMarkdown },
  } = useOvermind()

  return (
    <MarkdownWrapper>
      <MarkdownEditor
        onChange={(e) => updateMarkdown(e)}
        value={state.markdown}
      />
      <MarkdownPreview source={state.markdown} />
      <MarkdownOptions>
        <MarkdownOption onClick={() => resetMarkdown()}>
          <span>Reset Editor</span>
        </MarkdownOption>
        <MarkdownOption onClick={() => saveMarkdown()}>
          <span>Download File</span>
        </MarkdownOption>
      </MarkdownOptions>
    </MarkdownWrapper>
  )
}

export default Markdown
