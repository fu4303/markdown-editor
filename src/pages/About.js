import React from "react"
import Nav from "../components/nav"
import Page from "../components/page"

const About = () => (
  <>
    <Nav />
    <Page title="About">
      <p>
        Markdown Forge is an online editor for creating and saving markdown
        files. It is also an{" "}
        <a href="https://github.com/justinjunodev/markdown-forge">
          open-source project
        </a>{" "}
        <i>(contributions welcome)</i>.
      </p>
      <h3>What is Markdown?</h3>
      <p>
        Markdown is a lightweight markup language with plain-text-formatting
        syntax. It was created in 2004 by John Gruber and Aaron Swartz. It is
        very popular in web/ software engineering and is often used for
        formatting readme files, but is becoming increasingly popular in modern
        applications.{" "}
      </p>
      <p>
        If you are new to Markdown and want to learn more about it and it&apos;s
        syntax here are a few resources I&apos;d recommend:
        <ul>
          <li>
            <a href="https://www.markdownguide.org/getting-started/">
              Markdown Guide by Matt Cone
            </a>
          </li>
          <li>
            <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
              Markdown Cheatsheet by Adam Pritchard
            </a>
          </li>
          <li>
            <a href="https://masteringmarkdown.com/">
              Mastering Markdown by Wes Bos
            </a>
          </li>
        </ul>
      </p>
      <h4>Who Is Behind This Project?</h4>
      <p>
        My name is Justin Juno. I&apos;m an infinitely curious and optimistic
        software engineer from the Lone Star State.{" "}
        <a href="https://twitter.com/justinjunodev">
          Let&apos;s connect on Twitter!
        </a>
      </p>
    </Page>
  </>
)

export default About
