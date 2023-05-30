import React from "react"

import Layout from "../layouts/Layout"
import TemplateBookChapter from "../components/TemplateBookChapter"

const BookChapter = ({ data, location }) => {
  return (
    <Layout>
      <TemplateBookChapter />
    </Layout>
  )
}

export default BookChapter
