import type { Meta, StoryObj } from '@storybook/react';
import { ShopalikeTable } from '../../index';

const meta = {
    title: 'Shopify/ShopalikeTable',
    component: ShopalikeTable,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'polaris',
            values: [
                { name: 'polaris', value: '#fafafa' },
                { name: 'dark', value: '#000000' },
            ],
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ShopalikeTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headings: ['Name', 'Email', 'Role'],
        data: [
            ['John Doe', 'john.doe@example.com', 'Admin'],
            ['Jane Doe', 'jane.doe@example.com', 'User'],
            ['James Doe', 'james.doe@example.com', 'User'],
        ],
        selectable: false,
        showDividers: false,
    },
};