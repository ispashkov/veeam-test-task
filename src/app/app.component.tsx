import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import grey from '@mui/material/colors/grey'
import { Configurator } from '../container/configurator/configurator.component'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '& > div': {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: grey['100'],
            padding: 20,
          },
        },
      },
    },
  },
})

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Configurator />
    </ThemeProvider>
  )
}
