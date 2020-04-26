import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

      header = (
        <nav className="sitenav">
         
            <Link to="/" activeClassName="active" className="btn btn-secondary">
          Hjem
        </Link>
            
            <Link to="/blog/" activeClassName="active" className="btn btn-secondary">
          Artikler
        </Link>
           
         <Link to="/om-limisvingen-realsameie/" activeClassName="active" className="btn btn-secondary">
          Om sameiet
        </Link>
         
        </nav>
      )


    return (
     <div>
        <div className="container">
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <footer>
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
