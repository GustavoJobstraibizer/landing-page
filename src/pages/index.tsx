import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import PricingBox from 'components/PricingBox'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionAgenda from 'components/SectionAgenda'
import SectionConcepts from 'components/SectionConcepts'
import SectionFaq from 'components/SectionFaq'
import SectionHero from 'components/SectionHero'
import SectionModules from 'components/SectionModules'
import SectionReviews from 'components/SectionReviews'
import SectionTech from 'components/SectionTech'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { GetStaticProps } from 'next'
import React from 'react'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionTech,
  sectionConcepts,
  sectionModules,
  sectionSchedule,
  pricingBox,
  sectionAboutUs,
  sectionReviews,
  sectionFaq
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject sectionAboutProject={sectionAboutProject} />
    <SectionTech sectionTech={sectionTech} />
    <SectionConcepts sectionConcepts={sectionConcepts} />
    <SectionModules sectionModules={sectionModules} />
    <SectionAgenda sectionSchedule={sectionSchedule} />
    <PricingBox pricingBox={pricingBox} />
    <SectionAboutUs sectionAboutUs={sectionAboutUs} />
    <SectionReviews sectionReviews={sectionReviews} />
    <SectionFaq sectionFaq={sectionFaq} />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
