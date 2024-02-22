import { FC, ReactNode } from 'react';


interface HorizontalSeparatorProps {
  direction: 'up' | 'down';
  children?: ReactNode
}

export const HorizontalSeparator: FC<HorizontalSeparatorProps> = ({ direction, children }) => {
  const directionClass = direction === 'up' ? 'rounded-t-2xl border-b-2' : 'rounded-b-2xl border-t-2';
  const classWithChildren = children ? 'py-5 px-6' : 'h-6';
  return (
    <div className={`${directionClass} ${classWithChildren} flex gap-4 justify-between bg-gray-vlg-100/65 border-gray-vlg-200/80`}>
      {children}
    </div>
  );
};
