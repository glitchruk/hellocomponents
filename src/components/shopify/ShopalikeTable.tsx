import React from 'react';
import ShopalikeTableHeading from './ShopalikeTableHeading';
import ShopalikeTableRow from './ShopalikeTableRow';
import { Checkbox } from '@shopify/polaris';

interface ShopalikeTableProps {
  headings: string[];
  data: any[][];
  showDividers?: boolean;
  selectable?: boolean;
}

const ShopalikeTable: React.FC<ShopalikeTableProps> = ({
  headings = [],
  data = [],
  showDividers = false,
  selectable = false,
}) => {
  let checkClassName = 'w-10 h-9 text-center align-middle px-2 bg-stone-100';
  if (showDividers) {
      checkClassName += ' border-r border-stone-200';
  }

  return (
    <div className='block w-full border rounded-lg shadow-sm overflow-x-auto border-stone-200'>
      <table className='w-full'>

        {/* -- Create the header -- */}
        <thead className='border-b border-stone-200'>
          <tr className='ml-4'>
            {selectable && (
              <th className={checkClassName}>
                <Checkbox labelHidden label checked={false} />
              </th>
            )}

            {(headings.map((heading, index) => (
              <ShopalikeTableHeading
                first={!selectable && index === 0}
                key={heading}
                heading={heading}
                showDividers={showDividers}
              />
            )))}
          </tr>
        </thead>

        {/* -- Create the body -- */}
        <tbody>
          {data.map((row, index) => (
            <ShopalikeTableRow
              key={index}
              data={row}
              selectable={selectable}
              showDividers={showDividers}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ShopalikeTable;
export type { ShopalikeTableProps };
