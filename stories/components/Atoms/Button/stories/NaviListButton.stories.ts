import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../index';

const meta = {
  title: 'Button/NaviListButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    btnImgSrc: {
      control: "text",
      description: "버튼 이미지의 src 속성",
      defaultValue: "icon" 
    },
    btnImgAlt: {
      control: "text",
      description: "버튼 이미지 alt 속성",
      defaultValue: ""
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

export const NaviListButton: Story = {
  args: {
    btnImgAlt: "목록 페이지로 가는 버튼",
    btnImgSrc: ""
  },
}