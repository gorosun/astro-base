import type { Meta, StoryObj } from '@storybook/react';
import ReactComponent from './ReactComponent';

const meta: Meta<typeof ReactComponent> = {
  title: 'Components/ReactComponent',
  component: ReactComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReactComponent>;

export const Default: Story = {};