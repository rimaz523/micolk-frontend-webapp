import React from 'react'
import './App.css'
import { Page } from './stories/Page'

import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
    const prefersDarkMode = true

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Page></Page>
        </ThemeProvider>
    )
}

export default App
