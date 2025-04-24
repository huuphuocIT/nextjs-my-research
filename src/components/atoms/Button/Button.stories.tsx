import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variants',
      defaultValue: 'default',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    size: 'default',
    variant: 'default',
    children: 'Default Button',
    disabled: false,
    onClick: action('clicked'),
  },
};

export const DestructiveButton: Story = {
  args: {
    size: 'default',
    variant: 'destructive',
    children: 'Destructive Button',
    disabled: false,
    onClick: action('clicked'),
  },
};
