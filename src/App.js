import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Route, Switch } from 'react-router-dom'
import Header from './stories/components/header/Header'
import { Footer } from './stories/components/footer/Footer'
import { PageNotFound } from './stories/pages/page-not-found/PageNotFound'
import { connect } from 'react-redux'
import { HomePage } from './stories/pages/home/HomePage'

function App({ ...props }) {
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: props.theme.isDark ? 'dark' : 'light',
                },
            }),
        [props.theme.isDark]
    )

    return (
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
