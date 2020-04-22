import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Servicephotosection from "../Services/Servicephotosection"

 
const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="service learn code online"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoblock heading="MEssage from ceo" imgsrc="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    <InfoBlock 
    heading="About service"/>
    <Servicephotosection />
    
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ServicePage
