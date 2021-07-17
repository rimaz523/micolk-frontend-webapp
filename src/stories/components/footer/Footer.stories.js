import React from 'react'

import { Footer } from './Footer'

export default {
    title: 'Example/Footer',
    component: Footer,
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
    preContent: '© ',
    postContent: ' Mate Inc. All Rights Reserved',
}
