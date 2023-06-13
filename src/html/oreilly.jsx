import React from "react"
import styled from "styled-components"

import pngTip from "../images/oreilly/tip.png"
import pngNote from "../images/oreilly/note.png"
import pngCaution from "../images/oreilly/caution.png"

const OreillyCalloutWrapper = styled.blockquote`
  display: flex;
  align-items: flex-start;
  margin: 2rem 1rem;

  > img {
    width: 80px;
  }
  > div {
    padding: 0 1rem;
    > p {
      margin: 0;
    }
  }
`
export const RedScorpion = ({ children }) => {
  return (
    <OreillyCalloutWrapper>
      <img src={pngCaution} alt="警告-红蝎子" />
      <div>{children}</div>
    </OreillyCalloutWrapper>
  )
}
export const BlueRaven = ({ children }) => {
  return (
    <OreillyCalloutWrapper>
      <img src={pngNote} alt="笔记-蓝渡鸦" />
      <div>{children}</div>
    </OreillyCalloutWrapper>
  )
}
export const GreenSquirrel = ({ children }) => {
  return (
    <OreillyCalloutWrapper>
      <img src={pngTip} alt="建议-绿松鼠" />
      <div>{children}</div>
    </OreillyCalloutWrapper>
  )
}

const BorderBlockWrapper = styled.section`
  margin: 1rem 0;
  border: 1px solid lightgrey;
  padding: 1rem;
  .title {
    text-align: center;
    margin: 0;
    font-size: 1.125rem;
    font-weight: bolder;
  }
`
export const BorderBlock = ({ children }) => {
  return <BorderBlockWrapper>{children}</BorderBlockWrapper>
}

export const CssProperty = styled.section`
  border: 1px solid rgb(52, 168, 149);
  padding: 0 1rem 1rem;
  font-family: "FiraCode Regular";

  > h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  > table {
    > tr {
      > th {
        min-width: 100px;
        text-align: left;
        vertical-align: top;
      }
    }
  }

  > ul {
    padding-left: 0.5rem;
    list-style-type: none;
    > li {
    }
    > div {
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
`

// const StyledSpoilAlert = styled.div`
//   padding: ${props => props.size || 12}rem 0;
//   font-size: 2rem;
//   text-align: center;
//   color: whitesmoke;
//   user-select: none;
//   background: repeating-linear-gradient(
//     -45deg,
//     #222,
//     #222 10px,
//     #333 10px,
//     #333 20px
//   );
// `
// export const SpoilAlert = props => {
//   return (
//     <StyledSpoilAlert {...props}>
//       <p>防 剧 透</p>
//     </StyledSpoilAlert>
//   )
// }

// const WarningWrapper = styled.section`
//   margin: 1.5rem 0;

//   .title {
//     padding: 0.5em;
//     color: white;
//     background: repeating-radial-gradient(
//       circle,
//       #800080,
//       #800080 10px,
//       #4b026f 10px,
//       #4b026f 20px
//     );
//   }
//   .content {
//     padding: 0.5em;
//     border: 1px solid #4b026f;
//     border-top: none;
//   }
// `
// export const Warning = () => {
//   return (
//     <WarningWrapper>
//       <div className="title">标题</div>
//       <div className="content">文字文字文字</div>
//     </WarningWrapper>
//   )
// }
