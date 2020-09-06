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
    height: 100%;
  }
`

export const MarkdownEditor = styled.textarea`
  align-self: start;
  height: 100%;
  min-height: 560px;
  background: transparent;
  border: 1px solid var(--mid);
  padding: var(--xl) var(--xl) var(--xs);
  border-radius: var(--xxs);
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
  min-height: 560px;
  padding: var(--xl) var(--xl) var(--xs);
  background-color: white;
  border-radius: var(--xxs);
  box-shadow: var(--shadow);
  overflow-y: scroll;
  border: 1px solid var(--mid);
  ul li {
    margin-left: var(--md);
    padding-left: var(--xxs);
    list-style-type: disc;
  }
  ol li {
    list-style-type: decimal;
    margin-left: var(--md);
    padding-left: var(--xxs);
  }
  hr {
    border: 1px solid var(--primary);
    padding: 0;
  }
  a {
    color: var(--primary);
    transition: color 0.2s ease-in-out;
    :hover {
      color: var(--dark);
    }
  }
  img {
    height: auto;
    width: 100%;
  }
  blockquote {
    font-style: italic;
    border-left: 4px solid var(--primary);
    padding: 0 var(--sm);
    > :first-child {
      margin-top: 0;
    }
    > :last-child {
      margin-bottom: 0;
    }
  }
  table {
    padding: 0;
    tr {
      border-top: 1px solid var(--mid);
      background-color: white;
      margin: 0;
      padding: 0;

      :nth-child(2n) {
        background-color: var(--light);
      }
      th {
        font-weight: 500;
        border: 1px solid var(--mid);
        text-align: left;
        margin: 0;
        padding: var(--xxs) var(--xs);
      }
      td {
        border: 1px solid var(--mid);
        text-align: left;
        margin: 0;
        padding: var(--xxs) var(--xs);
      }
      th :first-child,
      td :first-child {
        margin-top: 0;
      }
      th :last-child,
      td :last-child {
        margin-bottom: 0;
      }
    }
  }
  code {
    margin: 0 var(--xxs);
    padding: 0 var(--xxs);
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: var(--light);
    border-radius: var(--xxs);
  }
  pre {
    background-color: var(--light);
    border: 1px solid var(--md);
    font-size: var(--xs);
    line-height: var(--md);
    overflow: auto;
    padding: var(--xxs) var(--xs);
    border-radius: var(--xxs);
    code {
      margin: 0;
      padding: 0;
      white-space: pre;
      border: none;
      background: transparent;
    }
  }
`
