import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1>
          <Link
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 >
          <Link         
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
     <div>
        <div class="container">
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
    )
  }
}


export default Layout
