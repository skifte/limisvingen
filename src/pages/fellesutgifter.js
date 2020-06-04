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
            Vi forsøker med 250 kr per mnd per tomt, så ser vi om det kan justeres
            ned etter hvert. Det er ikke mål om å gå i overskudd.  
          </p>

          <h2>Nytt kontonummer</h2>
          <p>Oppdatering 4 juni 2020:<br/> <strong>Sameiets opprinnelige bankkonto ble slettet på grunn av inaktivitet</strong>. Vi får opprettet en ny en, og legger deretter kontonummeret her.</p>
          {/* whenClicked is a property not an event, per se. 
          <p>Innbetaling, av 250 kroner, gjøres til <strong>kontonummer 2635.18.99629</strong> (Limi realsameie) den 1. hver måned. Merk betalingen med <em>tomtenummer</em>. 
          Sett gjerne opp automatisk trekk, så går dette av seg selv.
          </p> 
            <p>Om du vil, kan du gjerne bruke <a href="/files/faktura-250-limi-realsameie.pdf">denne fakturaen</a>. Se bort fra forfallsdato, som er vilkårlig satt.
            Det sendes <em>ikke</em> ut faktura hver måned.</p>
*/}
        <h2>Hva går pengene til?</h2>

          <p>Fellesutgiftene er ment å dekke følgende:</p>
          <ul>
              <li>Brøyting og strøing av vei</li>
              <li>Strøm til gatelys</li>
              <li>Vedlikehold og klipping av lekeplassen (Ugleredet)</li>
              <li>Eventuelle uforutsette kostnader</li>              
              </ul>
          
          <p>I tillegg har styret hatt utlegg for brøyting i sesongen 2018/2019, som også dekkes inn over felleskostnadene. Noe av dette faktureres JM for, som på
            daværende tidspunkt fortsatt eide flere av tomtene. 
          </p>

          <p>Dersom kommunen overtar ansvar for veien, bortfaller brøytekostnadene. Det utgjør nær halvparten av fellesutgiftene.</p>
          
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
