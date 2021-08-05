import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

type Props = {
  sectionTech: SectionTechProps
}

const SectionTech = ({ sectionTech }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionTech.title}</Heading>
      <S.IconsContainer>
        {sectionTech.techIcons.map(
          ({ title, icon: { url, alternativeText } }) => (
            <S.Icon key={url}>
              <S.Icons
                src={getImageUrl(url)}
                alt={alternativeText || title}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          )
        )}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
