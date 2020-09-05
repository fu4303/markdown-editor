import "reset-css"
import { css } from "@emotion/core"

const GlobalStyles = css`
  :root {
    --primary: #5316c1;
    --accent: #dd4b08;
    --dark: #3c3c3c;
    --mid: #cfcfcf;
    --light: #f0f0f0;
    --xl: 2.369rem;
    --lg: 1.777rem;
    --md: 1.333rem;
    --sm: 1rem;
    --xs: 0.75rem;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    text-size-adjust: 100%;
  }
  body {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: var(--lg);
    color: var(--dark);
    background-color: var(--light);
  }
  h1 {
    font-size: var(--lg);
    font-weight: 500;
    line-height: var(--xl);
    margin: 0;
  }
  h2 {
    font-size: var(--lg);
    font-weight: 500;
    line-height: var(--xl);
    margin: var(--lg) 0;
  }
  h3 {
    font-size: var(--md);
    font-weight: 500;
    margin: var(--lg) 0 0;
  }
  h4 {
    font-size: var(--sm);
    font-weight: 500;
    margin: var(--lg) 0;
  }
  h5 {
    font-size: var(--sm);
    font-weight: 500;
    margin: var(--lg) 0 0;
  }
  p,
  ul,
  ol,
  pre,
  table,
  blockquote,
  img {
    margin: 0 0 var(--lg);
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }
  hr {
    border: 1px solid var(--mid);
    margin: -1px 0;
  }
  a,
  b,
  i,
  strong,
  em,
  small,
  code {
    line-height: 0;
  }
  strong,
  b {
    font-weight: 500;
  }
  em,
  i {
    font-style: italic;
  }
  small {
    font-size: var(--xs);
  }
  sub,
  sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
`

export default GlobalStyles
