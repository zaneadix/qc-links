import React from "react"
import styled from "@emotion/styled"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Logo from "../../static/images/icons/qc_logo_light.svg"
import { colors } from "../utils/style-vars"
import Container from "./container"

let Footer = styled.footer`
  background-color: ${colors.everglaze};
  color: white;
  height: 15rem;
  display: flex;

  a {
    color: white;
  }

  .content-container {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      height: 100%;
    }

    .links {
      display: flex;
      flex-direction: row;
      text-transform: uppercase;
      letter-space: 0.125rem;
      margin-bottom: 0.5rem;
    }

    .copyright {
      text-align: center;
      font-size: 0.75rem;
      font-family: "Playfair Display";
      margin-bottom: 1rem;
    }

    .logo {
      svg {
        height: 2.5rem;
        width: 5.1875rem;
      }
    }
  }
`

export default () => (
  <Footer>
    <Container className="content-container">
      <div className="content">
        <div className="links">
          <OutboundLink href="mailto: quartercastle@gmail.com">
            Contact
          </OutboundLink>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <OutboundLink
            href="https://www.instagram.com/quartercastlekiera/"
            target="_blank_"
          >
            Instagram
          </OutboundLink>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <OutboundLink
            href="https://www.youtube.com/quartercastle"
            target="_blank_"
          >
            Youtube
          </OutboundLink>
        </div>
        <p className="copyright">{`All rights reserved by Quarter Castle ${new Date().getFullYear()}`}</p>
        <div className="logo">
          <svg>
            <use xlinkHref={`#${Logo.id}`} />
          </svg>
        </div>
      </div>
    </Container>
  </Footer>
)
