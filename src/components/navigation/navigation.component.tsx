import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
import { formatSection } from '../../format/text.format'
import { Section } from '../../types/section.types'

interface Props {
  value: Section
  onChange: (value: Section) => void
}

export const Navigation: React.FC<Props> = props => {
  const { value, onChange } = props

  const onChangeHandler = React.useCallback(
    (_: React.SyntheticEvent, value: Section): void => {
      onChange(value)
    },
    [onChange]
  )

  return (
    <TabsStyled value={value} onChange={onChangeHandler}>
      <Tab label={formatSection(Section.CONFIG)} value={Section.CONFIG} />
      <Tab label={formatSection(Section.RESULT)} value={Section.RESULT} />
    </TabsStyled>
  )
}

const TabsStyled = styled(Tabs)`
  border-bottom: 1px solid ${props => props.theme.palette.divider};
`
