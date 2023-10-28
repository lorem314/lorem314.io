import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../layouts/Layout"

const Wrapper = styled.section`
  margin: 2rem auto;
  max-width: 32rem;
`

const Tool = () => {
  return (
    <Layout>
      <Helmet title="工具 | Lorem314's Blog" />
      <Wrapper className="page-content">
        <h2 className="page-content-title">工具</h2>
        <ul>
          <li>
            <Link to="./steam-profile-custom-info-box-designer">
              用表情自定义 Steam 个人信息框
            </Link>
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default Tool
