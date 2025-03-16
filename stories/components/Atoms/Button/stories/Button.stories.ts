import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../index';

const meta = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 테마",
      defaultValue: "point"
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 이벤트"
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PointButton: Story = {
  args: {
    children: "버튼",
  },
};
