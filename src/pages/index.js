import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Homepage">
        <h1>Welcome to my Gatsby Site!</h1>
        <p>This is just a test.</p>
        <StaticImage alt="Just a testimage" src="../images/gatsby.webp" />
      </Layout>
    </main>
  )
}

export default IndexPage