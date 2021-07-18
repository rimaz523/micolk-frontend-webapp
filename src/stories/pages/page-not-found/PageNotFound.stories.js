import React from 'react'

import { PageNotFound } from './PageNotFound'

export default {
    title: 'Pages/PageNotFound',
    component: PageNotFound,
}

const Template = (args) => <PageNotFound {...args} />

export const Default = Template.bind({})
Default.args = {
    content: 'Page not found.',
}
