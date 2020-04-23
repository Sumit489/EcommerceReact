import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/infoblock"
import Contact from "../components/Contact/contact"


 
const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="Contact learn code online"
    subtitle=""
    heroclass="about-background"
    />
    
    <InfoBlock 
    heading="How Can we Help"/>

    <Contact />
    
    
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
