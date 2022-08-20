import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { Navigation } from '../../components/navigation/navigation.component'
import { Config } from '../../components/config/config.component'
import { Result } from '../../components/result/result.component'
import { Nullable } from '../../types/lang.types'
import { Section } from '../../types/section.types'
import { Form } from '../../types/form.types'
import { formConfigMock } from '../../mocks/form.mock'

export const Configurator: React.FC = () => {
  const [section, setSection] = React.useState<Section>(Section.CONFIG)
  const [config, setConfig] =
    React.useState<Nullable<Form.Config>>(formConfigMock)

  return (
    <WrapperStyled>
      <Navigation value={section} onChange={setSection} />

      <ContentStyled p={4}>
        {section === Section.CONFIG && (
          <Config config={config} onApply={setConfig} />
        )}

        {section === Section.RESULT && <Result config={config} />}
      </ContentStyled>
    </WrapperStyled>
  )
}

const WrapperStyled = styled(Paper)`
  display: grid;
  grid-template-rows: ${props => props.theme.spacing(6)} auto;
  width: 100%;
  max-width: ${props => props.theme.spacing(60)};
`

const ContentStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${props => props.theme.palette.background.paper};
`
