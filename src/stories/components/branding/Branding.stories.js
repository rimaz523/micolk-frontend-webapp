import React from 'react'

import { Branding } from './Branding'

export default {
    title: 'Example/Branding',
    component: Branding,
}

const Template = (args) => <Branding {...args} />

export const MicoLK = Template.bind({})
MicoLK.args = {
    name: 'mico.lk',
}
