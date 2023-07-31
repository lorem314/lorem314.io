import React from "react"

import NotificationList from "./ui/Notification"

const PageElementWrapper = ({ element }) => {
  return (
    <>
      {element}
      <NotificationList />
    </>
  )
}

export default PageElementWrapper
