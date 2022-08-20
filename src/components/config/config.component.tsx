import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import { styled } from '@mui/material/styles'
import { Form } from '../../types/form.types'
import { isDef, isDefAndNotEmpty, Nullable } from '../../types/lang.types'
import { configValidate, genConfigInitialValue } from './config.utils'

interface Props {
  config: Nullable<Form.Config>
  onApply: (config: Form.Config) => void
}

export const Config: React.FC<Props> = props => {
  const { config, onApply } = props

  const [value, setValue] = React.useState<string>(() =>
    genConfigInitialValue(config)
  )
  const [errors, setErrors] = React.useState<Nullable<string[]>>(null)

  const isValid = !isDefAndNotEmpty(errors)

  React.useEffect((): void => {
    configValidate(value)
      .then(([_, errors]) => setErrors(errors))
      .catch(([_, errors]) => setErrors(errors))
  }, [value])

  const onChangeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      const { value } = event.target
      setValue(value)
    },
    []
  )

  const onApplyHandler = React.useCallback((): void => {
    configValidate(value)
      .then(([config, errors]) => {
        if (isDefAndNotEmpty(errors)) {
          return setErrors(errors)
        }

        if (isDef(config)) {
          return onApply(config)
        }
      })
      .catch(([_, errors]) => setErrors(errors))
  }, [onApply, value])

  return (
    <WrapperStyled>
      <TextFieldStyled
        value={value}
        onChange={onChangeHandler}
        multiline
        rows={25}
      />

      {isDefAndNotEmpty(errors) && (
        <>
          {errors.map(error => (
            <FormHelperText key={error} error>
              {error}
            </FormHelperText>
          ))}
        </>
      )}

      <ButtonStyled
        variant="contained"
        onClick={onApplyHandler}
        disabled={!isValid}
      >
        Apply
      </ButtonStyled>
    </WrapperStyled>
  )
}

const WrapperStyled = styled(Box)`
  display: flex;
  flex-direction: column;
`

const TextFieldStyled = styled(TextField)`
  width: 100%;
`

const ButtonStyled = styled(Button)`
  margin: ${props => props.theme.spacing(2, 0, 0, 'auto')};
`
