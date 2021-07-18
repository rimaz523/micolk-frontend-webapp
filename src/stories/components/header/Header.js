import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Branding } from '../branding/Branding'

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <div className={classes.title}>
                        <Branding />
                    </div>

                    {user ? (
                        <Button color="inherit" onClick={onLogout}>
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button color="inherit" onClick={onLogin}>
                                Login
                            </Button>
                            <Button color="inherit" onClick={onCreateAccount}>
                                Sign up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

Header.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
}

Header.defaultProps = {
    user: null,
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}))
