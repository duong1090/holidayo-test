'use client';
import { bloggerSans } from '@/styles';
import { diffDays, formatCurrency, formatDate } from '@/utils';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Button } from '..';
import { DataProps, Product } from '@/model';
import { useMediaQuery } from 'react-responsive';

type SummaryProps = {
  data: DataProps;
  selectedProduct?: Product | null;
};

const Summary: React.FC<SummaryProps> = ({ selectedProduct }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobile && !selectedProduct) {
    return null;
  }

  const renderInfoItem = (
    src: string,
    title: string | ReactNode,
    label?: string
  ) => (
    <div className='flex flex-1 gap-[12px] items-center'>
      <Image
        src={src}
        width={24}
        height={24}
        alt={src}
        className='xs:w-[18px] xs:h-[18px]'
      />
      <div>
        {isMobile && !!label && (
          <span className='text-[12px] text-cyan-400'>{label}</span>
        )}
        <span className='line-clamp-2 text-[14px] xs:text-[12px] text-gray-900 xs:font-medium'>
          {title}
        </span>
      </div>
    </div>
  );

  const renderCostItem = (
    label: string,
    value?: string,
    isDiscount?: boolean
  ) => (
    <div
      className={clsx(
        'flex justify-between',
        isDiscount ? 'text-red-500' : 'text-gray-500'
      )}
    >
      <span className='text-[14px] xs:text-[12px]'>{label}</span>
      <span className='text-[16px] xs:text-[14px] font-medium'>
        {formatCurrency(value)}
      </span>
    </div>
  );

  const renderInfo = () => (
    <div className='border border-gray-200 rounded-[16px] xs:bg-white'>
      <div className='flex p-[20px] gap-[20px] xs:p-[15px] xs:gap-[20px]'>
        {renderInfoItem(
          '/icon-calendar.svg',
          <span>
            {formatDate(selectedProduct?.startDate)}
            <br />
            {formatDate(selectedProduct?.endDate)}
          </span>
        )}
        {renderInfoItem(
          '/icon-night.svg',
          `${diffDays(
            selectedProduct?.startDate,
            selectedProduct?.endDate
          )} nights`,
          'Length'
        )}
      </div>
      <div className='flex  p-[20px] gap-[20px] xs:p-[15px] xs:gap-[20px] border-y border-gray-200'>
        {renderInfoItem(
          '/icon-users.svg',
          `${selectedProduct?.adults} dospelí, ${selectedProduct?.children} dieťa`,
          'Travelers'
        )}
        {renderInfoItem(
          '/icon-stay.svg',
          '2+0 Premium izba Club Rotana',
          'Room Type'
        )}
      </div>
      <div className='flex p-[20px] gap-[20px] xs:p-[15px] xs:gap-[20px]'>
        {renderInfoItem(
          '/icon-transport.svg',
          selectedProduct?.transport.departureLocation,
          'Departure'
        )}
        {renderInfoItem('/icon-meals.svg', selectedProduct?.catering, 'Meals')}
      </div>
    </div>
  );

  const renderCost = () => (
    <div className='space-y-[19px] xs:space-y-[10px]'>
      {renderCostItem('Cost per adult', '1200')}
      {renderCostItem('Cost per child under 5 years', '800')}
      {renderCostItem('Discount', `-${selectedProduct?.discountedPriceFrom}`)}
      <div className='h-[1px] bg-gray-200' />
      <div className='flex justify-between'>
        <span className='text-[16px] xs:text-[14px] font-medium text-gray-800'>
          Cost for all passengers
        </span>
        <span className='text-[16px] font-medium text-cyan-400'>
          {formatCurrency(
            Number(selectedProduct?.priceFrom) *
              Number(selectedProduct?.adults) -
              Number(selectedProduct?.discountedPriceFrom)
          )}
        </span>
      </div>
    </div>
  );

  const renderEmpty = () => (
    <div className='border border-gray-200 rounded-[16px] xs:bg-white flex flex-col justify-center items-center p-[58px]'>
      <Image
        src='/select-date.svg'
        width={105}
        height={105}
        alt='select-date'
      />
      <span className='text-[16px] text-cyan-400'>Date not yet selected</span>
    </div>
  );

  return (
    <div className='border border-gray-200 p-[32px] xs:p-[15px] rounded-[16px] space-y-[32px] xs:space-y-[20px] w-[30%] xs:w-auto xs:bg-cyan-50'>
      <h2
        className={clsx(
          bloggerSans.className,
          'text-[32px] xs:text-[20px] text-center'
        )}
      >
        Booking Summary
      </h2>
      {selectedProduct ? (
        <>
          {renderInfo()}
          {renderCost()}
        </>
      ) : (
        renderEmpty()
      )}
      <Button
        type='primary'
        className='py-[17px] xs:py-[12px] w-[100%] text-[20px] xs:text-[18px]'
      >
        {selectedProduct ? 'Continue with selected' : 'View date and prices'}
        {!!selectedProduct && (
          <Image src='/arrow-right.svg' width={24} height={24} alt='arrow' />
        )}
      </Button>
    </div>
  );
};

export default Summary;
