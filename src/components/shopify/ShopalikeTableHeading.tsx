import React from 'react';

interface ShopalikeTableHeadingProps {
    heading: string;
    first?: boolean;
    showDividers?: boolean;
}

const ShopalikeTableHeading: React.FC<ShopalikeTableHeadingProps> = ({
    heading,
    first = false,
    showDividers = false,
}) => {
    let className = 'pr-4 h-9 text-left text-xs font-medium text-nowrap text-stone-600 bg-stone-100';
    if (first || showDividers) {
        className += ' pl-4';
    }
    if (showDividers) {
        className += ' border-r last:border-r-0';
    }

    return (
        <th className={className}>
            {heading}
        </th>
    );
};

export default ShopalikeTableHeading;
export type { ShopalikeTableHeadingProps };