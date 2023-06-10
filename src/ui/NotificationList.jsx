import React, { useState, useEffect, useReducer } from "react"
import styled from "styled-components"

import Timer from "./Timer"
import CloseIcon from "../svg/CloseIcon"

const TYPE = { ADD: "ADD", REMOVE: "REMOVE", PAUSE: "PAUSE" }

const manager = {
  subscribe(callback) {
    this.callback = callback
  },
  add(params) {
    this.callback(TYPE.ADD, params)
  },
  remove(id) {
    this.callback(TYPE.REMOVE, { id })
  },
  pause(id) {
    this.callback(TYPE.PAUSE, { id })
  },
}

const reducer = (notifications = [], { type, ...rest }) => {
  switch (type) {
    case TYPE.ADD:
      return [...notifications, { id: Date.now(), ...rest }]
    case TYPE.REMOVE:
      return notifications.filter((notification) => notification.id !== rest.id)
    case TYPE.PAUSE:
      return notifications
    default:
      return notifications
  }
}

const Wrapper = styled.div`
  margin: 10px 0;
  margin-right: 1rem;
  position: absolute;
  top: 50px;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  overflow-x: hidden;
  overflow-y: auto;
`

const NotificationList = () => {
  const [notifications, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    const callback = (actionType, { id, varient, duration, title, body }) => {
      switch (actionType) {
        case TYPE.ADD:
          dispatch({ type: actionType, varient, duration, title, body })
          break
        case TYPE.REMOVE:
          dispatch({ type: actionType, id })
          break
        case TYPE.PAUSE:
          dispatch({ type: actionType, id })
          break
        default:
          break
      }
    }
    manager.subscribe(callback)
  }, [])

  return (
    <Wrapper>
      {notifications.map((notification) => {
        return (
          <NotificationItem key={notification.id} notification={notification} />
        )
      })}
    </Wrapper>
  )
}

const NotificationItemWrapper = styled.div`
  margin-left: 1rem;
  padding: 1rem;
  min-width: 200px;
  max-width: 320px;
  position: relative;
  transform: translateX(${({ offsetX }) => offsetX}%);
  transition: transform 500ms ease-in-out, background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  background-color: var(--page-content-bg);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  > .close-notification-btn {
    background-color: rgba(10, 10, 10, 0.15);
    margin: 0;
    border: none;
    padding: 0;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 50%;
    &:hover {
      background-color: rgba(10, 10, 10, 0.25);
    }
    > .border-ring {
      transform: rotate(-90deg);
      width: 24px;
      height: 24px;
      > circle {
        fill: transparent;
        stroke: red;
      }
    }
    > .close-icon {
      position: absolute;
      width: 18px;
      height: 18px;
    }
  }
  > .notification-title {
    margin: 0 0 0.75rem;
    font-size: 1rem;
  }
  > .notification-body {
    margin: 0;
  }
`

const NotificationItem = ({ notification }) => {
  const [offsetX, setOffsetX] = useState(100)

  useEffect(() => setOffsetX(0), [])

  const onTimesup = () => {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          setOffsetX(100)
          setTimeout(() => {
            resolve()
          }, 500)
        })
      })
      .then(() => {
        manager.remove(notification.id)
      })
    // setOffsetX(100)
    // setTimeout(() => manager.remove(notification.id), 500)
  }

  return (
    <NotificationItemWrapper offsetX={offsetX}>
      <button className="close-notification-btn" onClick={onTimesup}>
        <Timer
          isTiming={true}
          onTimesup={onTimesup}
          duration={notification.duration}
        >
          {(time) => {
            const perimeter = Math.PI * 30
            return (
              <svg
                className="border-ring"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  strokeWidth={2}
                  strokeDasharray={`${perimeter} ${perimeter}`}
                  strokeDashoffset={(time * perimeter) / 100}
                />
              </svg>
            )
          }}
        </Timer>
        <CloseIcon />
      </button>
      <h6 className="notification-title">
        {notification.varient}-{notification.title}
      </h6>
      <p className="notification-body">{notification.body}</p>
    </NotificationItemWrapper>
  )
}

/*
  varient: success | info | warning | error 不同样式
  duration: number 持续时长 若为 Infinity 则为永久
  title: 标题
  body: 信息正文
*/
export const showNotification = ({
  varient = "info",
  duration = "5000",
  title = "通知",
  body = "",
}) => {
  manager.add({ varient, duration, title, body })
}
// export const removeNotification = (id) => {
//   manager.remove(id)
// }
// export const pauseNotification = (id) => {
//   manager.pause(id)
// }

export default NotificationList
