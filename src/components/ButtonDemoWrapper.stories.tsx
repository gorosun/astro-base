import type { Meta, StoryObj } from '@storybook/react';
import ButtonDemoWrapper from './ButtonDemoWrapper';

// ButtonDemo.astroのラッパー
const meta: Meta<typeof ButtonDemoWrapper> = {
  title: 'Components/ButtonDemo',
  component: ButtonDemoWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonDemoWrapper>;

export const Default: Story = {};