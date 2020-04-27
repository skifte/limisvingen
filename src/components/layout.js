import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    header = (
      <div className="site-header bg-dark">
        <div className="container">
          <nav className="site-nav">
            <ul className="nav">

              <li className="nav-item">
                <Link to="/" activeClassName="active" className="nav-link">
                  <span>Hjem</span>
                  </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog/" activeClassName="active" className="nav-link">
                  <span>Artikler</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/om-sameiet/" activeClassName="active" className="nav-link">
                  <span>Om sameiet</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    )


    return (
      <div>

        <header>{header}</header>

        
          <main className="main">
          <div className="container">
            {children}
            </div>
            </main>
        
        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    )
  }
}


export default Layout
