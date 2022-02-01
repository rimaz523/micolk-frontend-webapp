import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { IconButton } from '@mui/material'
import Brightness3Icon from '@mui/icons-material/Brightness3'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import { Branding } from '../common-ui/branding/Branding'
import { connect } from 'react-redux'
import { setTheme } from '../../../redux/actions/themeActions'

const Header = ({ setTheme, ...props }) => {
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
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.title}>
                        <Branding />
                    </div>
                    {props.theme.isDark ? (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={setLightMode}
                            size="large"
                        >
                            <Brightness7Icon />
                        </IconButton>
                    ) : (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={setDarkMode}
                            size="large"
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
