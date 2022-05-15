import { Meta, Story } from '@storybook/react';
// @ts-ignore
import { BorderBox } from 'component/atoms/Box';

export default {
    title: 'Atom/Box',
    component: BorderBox
} as Meta;

const Template: Story = (args) => <BorderBox />;

export const Basic = Template.bind({});
