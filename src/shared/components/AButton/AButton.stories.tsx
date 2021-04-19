import React from 'react'
import { Story, Meta } from '@storybook/react'

import { App } from '../../../config/app'
import { AButton } from './index'
import { AButtonProps } from './types'

export default {
  title: 'buttons/AButton',
  component: AButton,
} as Meta

const Template: Story<AButtonProps> = ({ children, ...args }) => (
  <App>
    <AButton {...args}> {children} </AButton>
  </App>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  color: 'primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
}
