import React, { useRef } from "react"

import Layout from "../layouts/Layout"

import Accordion from "../ui/Accordion"

const Test = () => {
  const refDialog = useRef(null)

  const handleClick = () => {
    refDialog.current.showModal()
  }

  return (
    <Layout>
      <h1>测试页面</h1>
      <button onClick={handleClick}>Open Dialog</button>
      <dialog ref={refDialog}>
        <div>helo</div>
      </dialog>
    </Layout>
  )
}

export default Test
