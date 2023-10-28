import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import PageIndex from "../components/PageIndex"

const Index = () => {
  return (
    <Layout>
      <Helmet title="主页 | Lorem314's Blog" />
      <PageIndex />
    </Layout>
  )
}

export default Index
