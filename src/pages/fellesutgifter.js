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
          <p>Sameiet har delt ansvar for vei og lekeplass. Dermed får vi også fellesutgifter. 
            Vi forsøker med 250 kr per mnd per hustand som eier egen bolig, så ser vi om det kan justeres
            ned etter hvert. Det er ikke mål om å gå i overskudd.  
          </p>
         
        
          <p>Innbetaling, av 250 kroner, gjøres til <strong>kontonummer 2635.19.60697</strong> (Limi realsameie) den 1. hver måned. Merk betalingen med husnummer. 
          Sett gjerne opp automatisk trekk, så går dette av seg selv.
          </p> 
            <p>Om du vil, kan du gjerne bruke <a href="/files/faktura-felleskostnader-limi-realsameie.pdf">denne fakturaen</a>. Se bort fra forfallsdato, som er vilkårlig satt.
            Det sendes <em>ikke</em> ut faktura hver måned.</p>

        <h2>Hva går pengene til?</h2>

          <p>Fellesutgiftene er ment å dekke følgende:</p>
          <ul>
              <li>Brøyting og strøing av vei</li>
              <li>Strøm til gatelys</li>
              <li>Vedlikehold og klipping av lekeplassen (Ugleredet)</li>
              <li>Andre kostnader i forbindelse med vedlikehold o.l.</li>              
              </ul>
         
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
