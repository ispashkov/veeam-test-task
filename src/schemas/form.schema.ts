import * as yup from 'yup'
import { Form } from '../types/form.types'
import { getStrEnumValues } from '../utils/enum.utils'

const formFieldSchema: yup.SchemaOf<Form.Field> = yup.object({
  type: yup
    .mixed<Form.FieldType>()
    .oneOf(getStrEnumValues<Form.FieldType>(Form.FieldType))
    .required(),
  label: yup.string().required(),
})

const formActionSchema: yup.SchemaOf<Form.Action> = yup.object({
  type: yup
    .mixed<Form.ActionType>()
    .oneOf(getStrEnumValues<Form.ActionType>(Form.ActionType))
    .required(),
  label: yup.string().required(),
})

export const formConfigSchema: yup.SchemaOf<Form.Config> = yup.object({
  title: yup.string().required(),
  fields: yup.array().of(formFieldSchema).min(1).required(),
  actions: yup.array().of(formActionSchema).min(1).required(),
})
