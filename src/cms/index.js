// eslint-disable-next-line
import CMS from "netlify-cms-app"

const isDevelopment = process.env.NODE_ENV === "development"

if (isDevelopment) {
  window.CMS_ENV = "localhost_development"
  const fileSystemBackend = require("netlify-cms-backend-fs")
  CMS.registerBackend("file-system", fileSystemBackend)
}

CMS.init()
