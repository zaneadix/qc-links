import React from "react"
import { Global } from "@emotion/core"

import globalStyles from "./globalStyles"
import Header from "../components/header"
import Footer from "../components/footer"
import Background from "../components/background"

let AppLayout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header></Header>
      <Background>
        <main>{children}</main>
      </Background>
      <Footer></Footer>
    </div>
  )
}

export default AppLayout
