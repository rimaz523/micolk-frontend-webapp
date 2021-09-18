import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Switch } from 'react-router-dom'
import Header from './stories/components/header/Header'
import { Footer } from './stories/components/footer/Footer'
import { PageNotFound } from './stories/pages/page-not-found/PageNotFound'
import { connect } from 'react-redux'
import { HomePage } from './stories/pages/home/HomePage'

function App({ ...props }) {
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: props.theme.isDark ? 'dark' : 'light',
                },
            }),
        [props.theme.isDark]
    )

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={PageNotFound} />
                    <Route />
                </Switch>
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

App.propTypes = {
    theme: PropTypes.object.isRequired,
}

App.defaultProps = {
    theme: {
        isDark: false,
    },
}

function mapStateToProps(state) {
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(App)
