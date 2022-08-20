import { Section } from '../types/section.types'

export function formatSection(section: Section): string {
  switch (section) {
    case Section.CONFIG:
      return 'Config'
    case Section.RESULT:
      return 'Result'
  }
}
