import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

export const HomePage = ({ content }) => {
    return (
        <Box textAlign="center" pt={{ xs: 25 }} pb={{ xs: 25 }}>
            <h1>{content}</h1>
        </Box>
    )
}

HomePage.propTypes = {
    content: PropTypes.string,
}

HomePage.defaultProps = {
    content: 'Welcome to our marketplace.',
}
