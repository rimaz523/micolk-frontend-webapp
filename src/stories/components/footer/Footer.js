import React from 'react'
import PropTypes from 'prop-types'
import './footer.css'

export const Footer = ({ preContent, postContent }) => (
    <div className="mc-footer">
        <p>
            {preContent}
            {new Date().getFullYear()}
            {postContent}
        </p>
    </div>
)

Footer.propTypes = {
    preContent: PropTypes.string,
    postContent: PropTypes.string,
}

Footer.defaultProps = {
    preContent: '© ',
    postContent: ' Mate Inc. All Rights Reserved',
}
