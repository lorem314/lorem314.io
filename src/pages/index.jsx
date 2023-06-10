import React from "react"

import Layout from "../layouts/Layout"
import PageIndex from "../components/PageIndex"
import { StaticQuery, useStaticQuery } from "gatsby"

const Index = () => {
  return (
    <Layout>
      <PageIndex />
    </Layout>
  )
}

export default Index
