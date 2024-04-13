import React from 'react';
import Button from '../Components/Button';

// Define the default export with metadata
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning', 'information'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

// Define a template function for the Button story
const Template = (args) => (
  <Button variant={args.variant} disabled={args.disabled}>
    {args.children}
  </Button>
);

// Define a story using the template and default arguments
export const ButtonStory = Template.bind({});
ButtonStory.args = {
  variant: 'default',
  disabled: false,
  children: 'Button',
};
