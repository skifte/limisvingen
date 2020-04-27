import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Limisvingen realsameie"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Hjem"
          keywords={[`Limisvingen`, `sameie`]}
        />

        <div className="jumbotron">
        <h1>
         Hei, Folkens{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p className="lead">Velkommen til Limisvingen realsameie sine splitter nye nettsider. Her vil det bli lagt ut informasjon
          av ymse slag. For eksempel referater fra styremøter.
        </p>
        <hr/>
        <p>Lurer du på noe om sameiet og hvem som sitter i styret?</p>
        <p>
          <Link className="btn btn-primary btn-lg" to="/om-limisvingen-realsameie/">
          Om sameiet
        </Link>
        </p>
        </div>
        {/*
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        
        */}
        
        
        
      </Layout>
    )
  }
}

export default IndexPage
