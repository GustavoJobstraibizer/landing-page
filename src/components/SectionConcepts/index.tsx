import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionConceptsProps } from 'types/api'
import * as S from './styles'

type Props = {
  sectionConcepts: SectionConceptsProps
}

const SectionConcepts = ({ sectionConcepts }: Props) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts?.title}</Heading>
      <S.List>
        {sectionConcepts.concepts.map(({ title }) => (
          <S.Item key={title}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
