import React from "react"

import Layout from "../layouts/Layout"
import TemplateBookCover from "../components/TemplateBookCover"

const BookCover = ({ data, location }) => {
  return (
    <Layout>
      <TemplateBookCover />
    </Layout>
  )
}

export default BookCover
