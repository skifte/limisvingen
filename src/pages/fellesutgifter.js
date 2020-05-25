import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class expensesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Fellesutgifter" />

        <div className="row">
          <article className="col-lg-8 full-story">
          <h1>Fellesutgifter</h1>
          <p>Sameiet har delt ansvar for vei og lekeplass. Dermed får vi også fellesutgifter,
            om enn av det beskjedne slaget. Vi forsøker med 150 kr per mnd per tomt, så ser vi om det skal justeres
            opp eller ned etter hvert.   
          </p>
          <p>Fellesutgiftene er ment å dekke følgende:
            <ul>
              <li>Brøyting og strøing av vei</li>
              <li>Strøm til gatelys</li>
              <li>Vedlikehold og klipping av lekeplassen (Ugleredet)</li>
              <li>Eventuelle uforutsette kostnader</li>
              
              </ul>
            <p>Det er ikke mål om å gå i overskudd.</p>
          </p>
          <h2>Innbetaling</h2>
          <p>Innbetaling gjøres til kontonummer 2635.18.99629 (Limi realsameie) den 1. hver måned. Merk betalingen med <em>tomtenummer</em>. 
          Sett gjerne opp automatisk trekk, så går dette av seg selv.
          </p> 
            <p>Om du vil, kan du gjerne bruke <a href="/files/faktura-limi-realsameie.pdf">denne fakturaen</a>. Se bort fra forfallsdato, som er vilkårlig satt.
            Det sendes <em>ikke</em> ut faktura hver måned.</p>
          </article>
        </div>
        
      </Layout>
    )
  }
}

export default expensesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
