/* eslint-disable no-param-reassign */
import { createHook } from "overmind-react"

const initialState =
  "# Hello, World!\n\nWelcome to **Markdown Forge**, an online editor for creating and saving markdown files.\n\n _Created by [@JustinJunoDev](https://twitter.com/justinjunodev)._"

const resetState = "So fresh and so clean . . ."

export const config = {
  state: {
    markdown: initialState,
  },
  actions: {
    resetMarkdown({ state }) {
      state.markdown = resetState
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
