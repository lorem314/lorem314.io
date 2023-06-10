import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Layout from "../../layouts/Layout"

const Wrapper = styled.div`
  padding: 0 1rem 1rem;
  margin: 2rem auto 2rem;
  max-width: 32rem;
  border: 1px solid transparent;
`

const Tools = () => {
  return (
    <Layout>
      <Helmet title="工具 | Lorem314's Blog" />
      <Wrapper className="page-content">
        <h2>工具</h2>
        <ul>
          <li>
            <Link to="./steam-profile-custom-info-box-designer">
              用表情设计Steam个人自定义信息框
            </Link>
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default Tools
