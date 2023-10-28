import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../layouts/Layout"
import PageSetting from "../components/PageSetting"

const Setting = () => {
  return (
    <Layout>
      <Helmet title="设置 | Lorem314's Blog" />
      <PageSetting />
    </Layout>
  )
}

export default Setting
