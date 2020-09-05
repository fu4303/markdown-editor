/* eslint-disable no-param-reassign */
import { createHook } from "overmind-react"

export const config = {
  state: {
    markdown: "Hello, World!",
  },
  actions: {
    resetMarkdown({ state }) {
      state.markdown = ""
    },
    updateMarkdown({ state }, event) {
      state.markdown = event.target.value
    },
    saveMarkdown({ state }) {
      const source = document.createElement("a")
      const file = new Blob([state.markdown], { type: "text/plain" })
      source.href = URL.createObjectURL(file)
      source.download = "markdownForge.md"
      source.click()
    },
  },
}

export const useOvermind = createHook()
