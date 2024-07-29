'use client';
import clsx from 'clsx';
import React, { useState } from 'react';

type ShowMoreTextProps = {
  children: string;
  maxLength?: number;
  className?: string;
};

const ShowMoreText: React.FC<ShowMoreTextProps> = ({
  children,
  className,
  maxLength = 300,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);
  const shouldShowButton = children.length > maxLength;
  return (
    <div className='flex flex-col'>
      <div
        className={clsx('text-[14px] text-gray-600', className)}
        dangerouslySetInnerHTML={{
          __html: isCollapsed ? children.slice(0, maxLength) + '...' : children,
        }}
      ></div>
      {shouldShowButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleCollapsed();
          }}
          className={clsx('self-start text-[14px] text-cyan-400', className)}
        >
          {isCollapsed ? 'Show more' : 'Show less'}
        </button>
      )}
    </div>
  );
};
export default ShowMoreText;
