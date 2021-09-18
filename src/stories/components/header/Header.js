import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { IconButton } from '@material-ui/core'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import MenuIcon from '@material-ui/icons/Menu'
import { Branding } from '../branding/Branding'
import { connect } from 'react-redux'
import { setTheme } from '../../../redux/actions/themeActions'

const Header = ({ user, setTheme, ...props }) => {
    const setDarkMode = () => {
        setTheme({ isDark: true })
    }

    const setLightMode = () => {
        setTheme({ isDark: false })
    }

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.title}>
                        <Branding />
                    </div>

                    {user ? (
                        <Button color="inherit">Logout</Button>
                    ) : (
                        <>
                            <Button color="inherit">Login</Button>
                            <Button color="inherit">Sign up</Button>
                        </>
                    )}
                    {props.theme.isDark ? (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={setLightMode}
                        >
                            <Brightness7Icon />
                        </IconButton>
                    ) : (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={setDarkMode}
                        >
                            <Brightness3Icon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

Header.propTypes = {
    user: PropTypes.shape({}),
    setTheme: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
}

Header.defaultProps = {
    user: null,
    theme: {
        isDark: false,
    },
}

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}))

function mapStateToProps(state) {
    return {
        theme: state.theme,
    }
}

const mapDispatchToProps = {
    setTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
