import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core'

export const Footer = ({ preContent, postContent }) => {
    return (
        <footer>
            <Box borderTop={1}>
                <Container>
                    <Box
                        textAlign="center"
                        pt={{ xs: 2, sm: 5 }}
                        pb={{ xs: 2, sm: 5 }}
                    >
                        {preContent}
                        {new Date().getFullYear()}
                        {postContent}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

Footer.propTypes = {
    preContent: PropTypes.string,
    postContent: PropTypes.string,
}

Footer.defaultProps = {
    preContent: '© ',
    postContent: ' Mate Inc. All Rights Reserved',
}
