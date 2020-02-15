import React from "react"
import { Global } from "@emotion/core"

import Header from "../components/Header"
import globalStyles from "./globalStyles"

let AppLayout = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header></Header>
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
