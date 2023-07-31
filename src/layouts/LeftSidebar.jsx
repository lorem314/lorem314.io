import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./Logo"
import Tooltip from "../ui/Tooltip"

import CloseIcon from "../svg/CloseIcon"
import HomeIcon from "../svg/HomeIcon"
import ArticleIcon from "../svg/ArticleIcon"
import BookIcon from "../svg/BookIcon"
import CodeIcon from "../svg/CodeIcon"
import ComponentsIcon from "../svg/ComponentsIcon"
import SettingIcon from "../svg/SettingIcon"

import { transition } from "../utils/css"

const Wrapper = styled.aside`
  position: absolute;
  top: ${({ isInDrawer }) => (isInDrawer ? 0 : "var(--header-height)")};
  left: 0;
  bottom: 0;
  width: var(--layout-left-drawer-width);

  color: var(--page-content-text-color-1);
  background-color: var(--content-bg-1);
  ${transition("color", "bg")}

  display: flex;
  flex-direction: column;

  > .header {
    flex-basis: var(--header-height);
    /* height: var(--header-height); */
    background-color: var(--header-bg);
    display: flex;
    align-items: center;

    > .left-drawer-closer {
      --svg-icon-size: 24px;
      background-color: rgba(0, 0, 0, 0.15);
      margin-left: 10px;
      border: none;
      border-radius: 0.25rem;
      padding: 0.25rem;
      color: whitesmoke;
      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
  }

  > .body {
    flex-grow: 1;
    display: flex;
    overflow: auto;

    > .site-routes {
      flex-basis: 50px;
      flex-shrink: 0;
      padding-top: 10px;
      background-color: var(--content-bg-0);
      ${transition("bg")}

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      > .route {
        --svg-icon-size: 20px;
        padding: 0.35rem;
        border-radius: 0.25rem;
        color: var(--ui-svg-icon-color);
        background-color: var(--ui-svg-icon-bg);
        ${transition("color", "bg")}

        &:hover {
          background-color: var(--ui-svg-icon-bg-hover);
        }
      }
      > .route.active {
        color: var(--ui-svg-icon-color-active);
        background-color: var(--ui-svg-icon-bg-active);
      }
    }

    > .latest-articles {
      flex-grow: 1;
      margin: 10px 10px 0;
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.05);
      padding: 10px;
      overflow: auto;

      > .page-content-title {
        /* font-size: smaller; */
      }
    }
  }

  > .footer {
    padding: 10px 1rem;
  }
`

const LeftSidebar = ({
  isInDrawer = false,
  onCloseDrawer = () => {},
  latestArticles = [],
}) => {
  return (
    <Wrapper isInDrawer={isInDrawer}>
      {isInDrawer ? (
        <header className="header">
          <button className="left-drawer-closer" onClick={onCloseDrawer}>
            <CloseIcon />
          </button>
          <Logo />
        </header>
      ) : null}

      <div className="body">
        <nav className="site-routes">
          {routes.map(({ Icon, title, path, partiallyActive }, index) => {
            return (
              <Tooltip key={index} position="right">
                <Link
                  className="route"
                  activeClassName="active"
                  to={path}
                  partiallyActive={partiallyActive}
                >
                  <Icon />
                </Link>
                <span>{title}</span>
              </Tooltip>
            )
          })}
        </nav>

        <section className="latest-articles page-content">
          <h3 className="page-content-title">博客</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Labore repellat enim, illum ea totam error ipsam ducimus temporibus,
            corporis dicta consequatur quibusdam commodi tempore nulla.
          </p>
          <p>
            Esse aut facilis recusandae maxime blanditiis. Culpa, nam iusto?
          </p>
          <p>
            Tenetur, numquam doloremque maiores corrupti quibusdam inventore
            vitae nobis quo, qui quae libero, placeat quasi dignissimos?
          </p>
          <p>Debitis, iure facere!</p>
          <p>Impedit a blanditiis itaque eum dolores soluta.</p>
          <p>
            Veniam minus deleniti sint nesciunt alias itaque consectetur nihil
            quidem asperiores sunt dolores fugit quibusdam rem, omnis provident
            assumenda animi hic eos voluptatum eveniet architecto esse, iusto
            quasi deserunt!
          </p>
          <p>
            Cum dicta commodi unde eius iure blanditiis, itaque officiis.
            Necessitatibus, accusantium.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <h3 className="page-content-title">书籍</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>
            Tempora temporibus debitis dicta nulla omnis rerum nihil culpa amet
            veritatis deleniti, ea nostrum beatae ratione iste quisquam earum
            ducimus atque et quod nam animi praesentium minus ipsa id!
          </p>
          <p>
            Sunt provident asperiores quaerat labore earum in, quia id dolorem
            voluptates atque voluptatem cum quos pariatur, doloremque et nostrum
            necessitatibus aperiam, quisquam consequatur natus.
          </p>
          <p>
            Reiciendis atque, tempora tempore distinctio tenetur, est dolores ab
            culpa numquam reprehenderit ea dolore quam expedita omnis
            repellendus sunt.
          </p>
          <p>Magnam debitis vero iusto quidem beatae. Quasi, magni?</p>
          <p>
            Repellat architecto corrupti iure, dicta id blanditiis doloremque
            aut optio, natus, quam repudiandae illum.
          </p>
          <p>Tempora, quod similique exercitationem facilis laborum rem.</p>
          <p>Animi nam aut rem dolore optio obcaecati ipsam beatae quasi!</p>
          <p>Architecto, numquam ut.</p>
          <p>
            Eligendi velit quos eveniet laudantium unde earum, architecto
            officia molestias cum temporibus nemo soluta.
          </p>
          <p>
            Laboriosam, quae adipisci dolorum at nemo porro, non consectetur
            illum quidem expedita ipsum magni?
          </p>
          <p>
            Nam veniam quasi delectus tempora mollitia unde repellat excepturi
            officia.
          </p>

          <p>
            Illo, incidunt, iure, dolorum molestiae tempore mollitia beatae sit
            aperiam nisi dolore asperiores.
          </p>
          <p>
            Repellendus deleniti nesciunt, porro eum inventore vitae recusandae
            laudantium quam, repudiandae illo quia?
          </p>
          <p>
            Dolorum totam laborum voluptatum corrupti quasi sapiente eaque animi
            libero voluptate magnam nobis hic, porro ratione aspernatur nulla
            possimus dolores exercitationem.
          </p>
          <p>
            Ab odit vel corrupti, sit soluta fugit et eos, temporibus mollitia
            nihil error sed dolore praesentium labore fuga maiores nemo quaerat
            ipsam blanditiis aut libero adipisci nesciunt veritatis?
          </p>
          <p>
            Repellendus minus suscipit quaerat, debitis ipsum sunt aliquam
            deleniti optio, rem minima doloremque corrupti quae temporibus iusto
            nihil fugit quia officia exercitationem autem dolore inventore totam
            dolor dolorum similique!
          </p>
          <p>
            Nemo mollitia ipsum quisquam blanditiis expedita enim voluptate,
            iure similique repellat eius, voluptatum magni omnis aspernatur illo
            eaque fugiat ea illum aliquid quos saepe inventore laborum
            repellendus labore delectus!
          </p>
          <p>Neque magnam ratione magni aliquam nisi repellat?</p>
        </section>
      </div>

      <footer className="footer">
        <div>footer</div>
      </footer>
    </Wrapper>
  )
}

export default LeftSidebar

const routes = [
  {
    Icon: (props) => <HomeIcon {...props} />,
    title: "主页",
    path: "/",
    partiallyActive: false,
  },
  {
    Icon: (props) => <ArticleIcon {...props} />,
    title: "博客",
    path: "/blog",
    partiallyActive: true,
  },
  {
    Icon: (props) => <BookIcon {...props} />,
    title: "书籍",
    path: "/book",
    partiallyActive: true,
  },
  // {
  //   Icon: (props) => <CodeIcon {...props} />,
  //   title: "代码",
  //   path: "/code",
  //   partiallyActive: true,
  // },
  {
    Icon: (props) => <ComponentsIcon {...props} />,
    title: "工具",
    path: "/tool",
    partiallyActive: true,
  },
  {
    Icon: (props) => <SettingIcon {...props} />,
    title: "设置",
    path: "/setting",
    partiallyActive: true,
  },
]
