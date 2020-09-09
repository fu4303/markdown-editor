import React from "react"
import PropTypes from "prop-types"
import { Link, Match } from "@reach/router"
import Slide from "react-reveal/Slide"
import { useOvermind } from "../../hooks/useOvermind"
import { NavWrapper, NavContent, NavLogo, NavMenu, NavMenuItem } from "./styles"
import Button from "../button"

const Nav = () => {
  const {
    actions: { saveMarkdown, resetMarkdown },
  } = useOvermind()

  return (
    <Slide top delay={250} duration={750}>
      <NavWrapper>
        <NavContent>
          <NavLogo>
            <Link to="/">
              <span>Markdown</span> Forge
            </Link>
          </NavLogo>
          <NavMenu>
            <NavMenuItem>
              <Link to="/about">About</Link>
            </NavMenuItem>
            <Match path="/">
              {(props) =>
                props.match && (
                  <>
                    <NavMenuItem>
                      <Button
                        type="button"
                        action={resetMarkdown}
                        text="Reset"
                      />
                    </NavMenuItem>
                    <NavMenuItem>
                      <Button
                        type="button"
                        action={saveMarkdown}
                        text="Download"
                      />
                    </NavMenuItem>
                  </>
                )
              }
            </Match>
          </NavMenu>
        </NavContent>
      </NavWrapper>
    </Slide>
  )
}

Nav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object,
}

Nav.defaultProps = {
  match: {},
}

export default Nav
