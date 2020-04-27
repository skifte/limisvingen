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
        <SEO title="Om Limisvingen realsameie" />
        <h1>Om Limisvingen realsameie</h1>
        <p>Sameiet er registrert i <a href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=822050492">Brønnøysundregistrene</a>,
        og har organisasjonsnummer 822050492.</p>
        <p>Vi har en egen gruppe på <a href="https://www.facebook.com/groups/401821740391426">Facebook</a>.</p>

        <h2>Fellesutgifter</h2>
        <p>Det blir en liten sum å betale per husstand per mnd, som skal dekke brøyting og strøing, vedlikehold og klipping av ugleredet,
          samt eventuelle uforutsette utgifter.
        </p>
        <p><strong>kommer: </strong> Kontonummer, endelig sum og faktura.</p>

        <h2>Styret</h2>
        <p>Styret består av:</p>
        <ul>
          <li>Truls Magnus Juul (styreleder)</li>
          <li>Kai Roger Habberstad</li>
          <li>Kenneth Heisholt</li>
          <li>Andre Ødefjeld</li>
          <li>Anders Skifte</li>
        </ul>
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
