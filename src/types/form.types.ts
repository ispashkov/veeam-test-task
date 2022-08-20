export namespace Form {
  export enum FieldType {
    NUMBER = 'NUMBER',
    TEXT = 'TEXT',
    TEXTAREA = 'TEXTAREA',
    CHECKBOX = 'CHECKBOX',
    DATE = 'DATE',
    RADIO = 'RADIO',
  }

  export interface Field {
    type: FieldType
    label: string
  }

  export enum ActionType {
    BUTTON = 'BUTTON',
    SUBMIT = 'SUBMIT',
    RESET = 'RESET',
  }

  export interface Action {
    type: ActionType
    label: string
  }

  export interface Config {
    title: string
    fields: Field[]
    actions: Action[]
  }
}
