import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Om sameiet" />

        <div className="row">
          <article className="col-lg-8 full-story">
          <h1>Om Limi realsameie</h1>
        <p>Sameiet er registrert som <em>Limi realsameie for G/BNR 56/189</em> i <a href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=822050492">Brønnøysundregistrene</a>,
        og har organisasjons&#173;nummer 822050492.</p>

        <p>Bankkonto er 2635.19.60697.</p>
        <p>Vi har en egen gruppe på <a href="https://www.facebook.com/groups/401821740391426">Facebook</a>.</p>
<hr/>
      
        

        <h2>Styret</h2>       
        <p>Styret består av:</p>
        <ul>
          <li>Lene Killingtveit (styreleder)</li>
          <li>Milica Corovic</li>
          <li>Truls Magnus Juul </li>
          <li>Andre Ødefjeld</li>
          <li>Anders Skifte</li>
        </ul>
        <h3>Kontakt</h3>
        <p>Styret kan kontaktes på styret@limisvingen.no.</p>
          </article>
        </div>
        
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
