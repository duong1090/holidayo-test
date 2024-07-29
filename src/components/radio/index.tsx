import clsx from 'clsx';
import React from 'react';

type RadioProps = {
  checked: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
};

const RadioButton: React.FC<RadioProps> = ({
  checked,
  className,
  onChange,
}) => {
  return (
    <button
      className={clsx(
        'w-[24px] h-[24px] xs:h-[17px] xs:w-[17px] rounded-full border border-cyan-400 flex items-center justify-center',
        className
      )}
      onClick={() => onChange?.(!checked)}
    >
      {checked && <div className='bg-cyan-400 w-[60%] h-[60%] rounded-full' />}
    </button>
  );
};

export default RadioButton;
