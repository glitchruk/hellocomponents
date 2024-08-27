import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../index';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        label: 'Button',
    },
};

export const Success: Story = {
    args: {
        type: 'success',
        label: 'Button',
    },
};

export const Danger: Story = {
    args: {
        type: 'danger',
        label: 'Button',
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        label: 'Button',
    },
};

export const ExtraSmall: Story = {
    args: {
        size: 'xs',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        label: 'Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        label: 'Button',
    },
};