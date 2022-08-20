import * as React from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { Form } from '../../types/form.types'

export function genResultField(
  field: Form.Field,
  index: number
): React.ReactElement {
  const { type, label } = field
  const key = `${type}-${label}-${index}`

  return (
    <FormControlStyled key={key} fullWidth>
      <FormLabel>{field.label}</FormLabel>
      {genResultControl(field)}
    </FormControlStyled>
  )
}

function genResultControl(field: Form.Field): React.ReactElement {
  const { type, label } = field

  switch (type) {
    case Form.FieldType.NUMBER:
      return <TextField type="number" placeholder={label} />
    case Form.FieldType.TEXT:
      return <TextField type="text" placeholder={label} />
    case Form.FieldType.TEXTAREA:
      return <TextField type="text" placeholder={label} rows={4} multiline />
    case Form.FieldType.CHECKBOX:
      return <Checkbox placeholder={label} />
    case Form.FieldType.DATE:
      return <TextField type="date" placeholder={label} />
    case Form.FieldType.RADIO:
      return <Radio placeholder={label} />
  }
}

export function genResultAction(
  field: Form.Action,
  index: number
): React.ReactElement {
  const { type, label } = field
  const key = `${type}-${label}-${index}`

  return (
    <Button
      key={key}
      type={genResultActionType(type)}
      variant={genResultActionVariant(type)}
    >
      {label}
    </Button>
  )
}

function genResultActionType(
  type: Form.ActionType
): 'button' | 'submit' | 'reset' {
  switch (type) {
    case Form.ActionType.BUTTON:
      return 'button'
    case Form.ActionType.SUBMIT:
      return 'submit'
    case Form.ActionType.RESET:
      return 'reset'
  }
}

function genResultActionVariant(
  type: Form.ActionType
): 'text' | 'outlined' | 'contained' {
  switch (type) {
    case Form.ActionType.BUTTON:
      return 'outlined'
    case Form.ActionType.SUBMIT:
      return 'contained'
    case Form.ActionType.RESET:
      return 'text'
  }
}

const FormControlStyled = styled(FormControl)`
  display: grid;
  grid-template-columns: 120px max-content;
  align-items: center;
`
