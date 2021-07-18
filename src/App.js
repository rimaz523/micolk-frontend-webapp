import React from 'react'
import './App.css'
import { Page } from './stories/Page'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Route, Switch } from 'react-router-dom'
import { Header } from './stories/components/header/Header'
import { Footer } from './stories/components/footer/Footer'
import { PageNotFound } from './stories/pages/page-not-found/PageNotFound'

function App() {
    const prefersDarkMode = false
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
            <Header />
            <Switch>
                <Route exact path="/" component={Page} />
                <Route component={PageNotFound} />
                <Route />
            </Switch>
            <Footer />
        </ThemeProvider>
    )
}

export default App
