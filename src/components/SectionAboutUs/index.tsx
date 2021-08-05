import Container from 'components/Container'
import Heading from 'components/Heading'
import ProfileCard from 'components/ProfileCard'
import React from 'react'
import { SectionAboutUsProps } from 'types/api'
import * as S from './styles'

type Props = {
  sectionAboutUs: SectionAboutUsProps
}

const SectionAboutUs = ({ sectionAboutUs }: Props) => (
  <Container>
    <Heading reverseColor>{sectionAboutUs.title}</Heading>

    <S.Content>
      {sectionAboutUs.authors.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={profile.avatar}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
