import React from 'react';
import ShopalikeTableCell from './ShopalikeTableCell';
import { Checkbox } from '@shopify/polaris';

interface ShopalikeTableRowProps {
    data: any[];
    selectable?: boolean;
    showDividers?: boolean;
}

const ShopalikeTableRow: React.FC<ShopalikeTableRowProps> = ({
    data = [],
    selectable = false,
    showDividers = false,
}) => {
    let className = 'bg-white hover:bg-stone-100 border-b border-stone-200 last:border-b-0';
    let checkClassName = 'w-10 h-9 text-center align-middle px-2';
    if (showDividers) {
        checkClassName += ' border-r border-stone-200';
    }

    return (
        <tr className={className}>
            {selectable && (
                <td className={checkClassName}>
                    <Checkbox labelHidden label checked={false} />
                </td>
            )}

            {data.map((cell, index) => (
                <ShopalikeTableCell
                    first={!selectable && index === 0}
                    key={index}
                    value={cell}
                    showDivider={showDividers}
                />
            ))}
        </tr>
    );
};

export default ShopalikeTableRow;
export type { ShopalikeTableRowProps };