import styled from "@emotion/styled"
import ReactMarkdown from "react-markdown"

export const MarkdownWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--xl);
  position: relative;
  max-width: 1440px;
  width: calc(100% - (var(--xl) * 2));
  margin: var(--xl) auto;
  height: calc(100vh - (var(--xl) * 4));
  min-height: 560px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const MarkdownEditor = styled.textarea`
  align-self: start;
  height: 100%;
  background: transparent;
  border: 1px solid var(--mid);
  padding: var(--xl) var(--xl) var(--xs);
  border-radius: 0.25rem;
  font-family: "Roboto", sans-serif;
  font-size: var(--sm);
  font-weight: 300;
  line-height: var(--lg);
  color: var(--dark);
  resize: none;
  outline: none;
  overflow-y: scroll;
  -webkit-appearance: none;
`

export const MarkdownPreview = styled(ReactMarkdown)`
  align-self: start;
  height: 100%;
  padding: var(--xl) var(--xl) var(--xs);
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: var(--shadow);
  overflow-y: scroll;
  border: 1px solid var(--mid);
`

export const MarkdownOptions = styled.ul`
  position: absolute;
  bottom: var(--md);
  right: var(--md);
  display: flex;
  margin: 0;
`

export const MarkdownOption = styled.li`
  padding: 0.25rem var(--md);
  background-color: var(--primary);
  font-size: var(--xs);
  font-weight: 500;
  text-transform: uppercase;
  color: var(--light);
  border-radius: 0.25rem;
  transition: transform 0.2s ease-in-out;
  :not(:last-of-type) {
    margin-right: var(--sm);
  }
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: var(--primary);
    color: var(--light);
  }
  :active {
    transform: scale(0.95);
  }
`
