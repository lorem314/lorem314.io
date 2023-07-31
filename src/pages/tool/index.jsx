import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../layouts/Layout"
import PageContent from "../../styled/PageContent"

const Wrapper = styled(PageContent)`
  margin: 2rem auto;
  max-width: 32rem;
`

const Tool = () => {
  return (
    <Layout>
      <Wrapper>
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
