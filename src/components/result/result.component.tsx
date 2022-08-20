import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import { Form } from '../../types/form.types'
import { isDef, Nullable } from '../../types/lang.types'
import { genResultAction, genResultField } from './result.utils'

interface Props {
  config: Nullable<Form.Config>
}

export const Result: React.FC<Props> = props => {
  const { config } = props

  if (isDef(config)) {
    return (
      <Box component="form">
        <TitleStyled variant="h6">{config.title}</TitleStyled>

        <FieldsStyled>{config.fields.map(genResultField)}</FieldsStyled>

        <DividerStyled />

        <ActionsStyled>{config.actions.map(genResultAction)}</ActionsStyled>
      </Box>
    )
  }

  return (
    <Box>
      <Typography>Config isn't valid</Typography>
    </Box>
  )
}

const TitleStyled = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(2)};
`

const FieldsStyled = styled(Box)`
  display: grid;
  grid-gap: ${props => props.theme.spacing(2)};
`

const DividerStyled = styled(Divider)`
  margin: ${props => props.theme.spacing(4)} 0;
`

const ActionsStyled = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-gap: ${props => props.theme.spacing(2)};
`
