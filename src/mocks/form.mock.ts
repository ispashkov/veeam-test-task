import { Form } from '../types/form.types'

export const formConfigMock: Form.Config = {
  title: 'Test Form',
  fields: [
    {
      type: Form.FieldType.NUMBER,
      label: 'Count',
    },
    {
      type: Form.FieldType.CHECKBOX,
      label: 'Is Editable',
    },
    {
      type: Form.FieldType.TEXT,
      label: 'Caption',
    },
    {
      type: Form.FieldType.TEXTAREA,
      label: 'Description',
    },
  ],
  actions: [
    {
      type: Form.ActionType.RESET,
      label: 'Cancel',
    },
    {
      type: Form.ActionType.SUBMIT,
      label: 'Submit',
    },
  ],
}
