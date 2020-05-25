import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/artikler/`
    let header

    header = (
      <div className="site-header bg-dark">
        <div className="container">

        <div className="row">
        <div className="col-lg-12">

          <nav className="site-nav">
            <ul className="nav">

              <li className="nav-item">
                <Link to="/" activeClassName="active" className="nav-link">
                  <span>Hjem</span>
                  </Link>
              </li>
              <li className="nav-item">
                <Link to="/artikler/" partiallyActive={true} activeClassName="active" className="nav-link">
                  <span>Artikler</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fellesutgifter/" partiallyActive={true} activeClassName="active" className="nav-link">
                  <span>Fellesutgifter</span>
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
          <p><em>Limi realsameie for G/BNR 56/189. Org.nr 822050492.<br/>
            E-post: styret@limisvingen.no.</em></p>
          </div>
        </footer>
      </div>
    )
  }
}


export default Layout
