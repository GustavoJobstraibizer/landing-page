import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

type Props = {
  sectionAboutProject: SectionAboutProjectProps
}

const SectionAboutProject = ({ sectionAboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <img
            src={getImageUrl(sectionAboutProject.media?.url)}
            loading="lazy"
            alt={sectionAboutProject.media?.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sectionAboutProject.description
            }}
          />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
