/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/Reusable/Footer"
import Navbar from "../components/Reusable/Navbar"

import "./bootstrap.min.css"
import "./layout.css"



const Layout =({children}) =>(
  <>
  <Navbar /> 
  {children}
  <Footer />
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
