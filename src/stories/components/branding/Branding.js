import React from 'react'
import PropTypes from 'prop-types'
import './branding.css'

export const Branding = ({ name }) => (
    <div>
        <img src={`logo.png`} height="40" width="40" />
        <h1 className="mc-branding__h1">{name}</h1>
    </div>
)

Branding.propTypes = {
    name: PropTypes.string,
}

Branding.defaultProps = {
    name: 'mico.lk',
}
