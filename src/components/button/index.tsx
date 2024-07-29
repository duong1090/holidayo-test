import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  className?: string;
  type?: 'primary' | 'normal';
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  onClick,
  ...props
}) => {
  const typeClass =
    type === 'primary'
      ? 'bg-cyan-400 text-white border border-cyan-400'
      : 'bg-white text-cyan-400 border border-cyan-400';

  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-cyan-400 px-[18px] py-[6px] flex items-center justify-center gap-[10px] rounded-full text-[16px]',
        className,
        typeClass
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
