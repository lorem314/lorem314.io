import React from "react"
import styled from "styled-components"

import Layout from "../../layouts/Layout"
import App from "../../components/tool/steam-profile-custom-info-box-designer"

import PageContent from "../../styled/PageContent"

const Wrapper = styled(PageContent)`
  margin: 2rem auto;
  /* max-width: 90%; */
`

const SteamProfileCustomInfoBoxDesigner = () => {
  return (
    <Layout>
      <Wrapper>
        <App />
      </Wrapper>
    </Layout>
  )
}

export default SteamProfileCustomInfoBoxDesigner
