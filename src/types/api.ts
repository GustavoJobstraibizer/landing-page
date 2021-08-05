export type LogoProps = {
  alternativeText: string
  url: string
}
export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: LogoProps
}

export type SectionAboutProjectProps = {
  media: LogoProps
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: Array<{
    title: string
    icon: LogoProps
  }>
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type SectionScheduleProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type AuthorProps = {
  avatar: LogoProps
  name: string
  role: string
  description: string
  socialLinks: Array<{
    title: string
    url: string
  }>
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

export type ReviewsProps = {
  name: string
  text: string
  avatar: LogoProps
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionSchedule: SectionScheduleProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
