import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Coursecart from "../components/Cart/Coursecart"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="I write code"
    subtitle="Learn code online"
    heroclass="hero-background"
    />
    <InfoBlock 
    heading="About US"/>

    <Coursecart courses={data.courses} />
    <DualInfoblock heading="my team" imgsrc="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
  courses:allContentfulCourses{
    edges {
      node {
        id
        title
        price
        category
        description {
          id
          description
        }
        image{
          fixed(width:200,height:120){
            src
          }
        }
      }
    }
  }
}
`

export default IndexPage
