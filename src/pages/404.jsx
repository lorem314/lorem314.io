import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import Page404 from "../components/Page404"

const NotFound = () => {
  return (
    <Layout>
      <Helmet title="404 | Lorem314's Blog" />
      <Page404 />
    </Layout>
  )
}

export default NotFound
