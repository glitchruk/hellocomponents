import React from 'react';

interface ShopalikeTableCellProps {
    value: string;
    first?: boolean;
    showDivider?: boolean;
}

const ShopalikeTableCell: React.FC<ShopalikeTableCellProps> = ({
    value,
    first = false,
    showDivider = true,
}) => {
    let className = 'pr-4 h-9 text-left text-sm text-nowrap font-normal text-neutral-900 border-neutral-200';
    if (first || showDivider) {
        className += ' pl-4';
    }
    if (showDivider) {
        className += ' border-r last:border-r-0';
    }

    return (
        <td className={className}>
            {value}
        </td>
    );
};

export default ShopalikeTableCell;
export type { ShopalikeTableCellProps };