import * as yup from 'yup'
import { formConfigSchema } from '../../schemas/form.schema'
import { isDef, Nullable } from '../../types/lang.types'
import { Form } from '../../types/form.types'

export function genConfigInitialValue(config: Nullable<Form.Config>): string {
  if (isDef(config)) {
    return JSON.stringify(config, null, 2)
  }

  return "Config isn't valid"
}

export async function configValidate(
  value: string
): Promise<[Nullable<Form.Config>, Nullable<string[]>]> {
  try {
    const config = JSON.parse(value)

    await formConfigSchema.validate(config, {
      abortEarly: false,
    })

    return [config, null]
  } catch (e: unknown) {
    const isError = yup.ValidationError.isError(e)

    if (isError) {
      return Promise.reject([null, e.errors])
    }

    if (e instanceof Error) {
      return Promise.reject([null, [e.message]])
    }

    return Promise.reject([null, null])
  }
}
