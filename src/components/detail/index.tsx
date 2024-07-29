'use client';
import { bloggerSans } from '@/styles';
import clsx from 'clsx';
import { RadioButton, ShowMoreText } from '..';
import Button from '../button';
import Image from 'next/image';
import { DetailProps, ProductType } from './types';
import { useEffect, useState } from 'react';
import { diffDays, formatCurrency, formatDate, formatWeekDay } from '@/utils';
import Collapsible from '../collapsible';
import { useMediaQuery } from 'react-responsive';

const Detail: React.FC<DetailProps> = ({
  data,
  collapsed,
  selectedCatering,
  selectedRoomType,
  selectedProduct,
  setCollapsed,
  setSelectedCatering,
  setSelectedRoomType,
}) => {
  const { description, distinctRoomTypes, distinctCatering, differences } =
    data;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const infoItems = [
    {
      src: '/calendar-outline.svg',
      info:
        formatDate(selectedProduct?.startDate) +
        ' - ' +
        formatDate(selectedProduct?.endDate),
    },
    {
      src: '/meal-outline.svg',
      info: selectedProduct?.catering,
    },
    {
      src: '/flight-outline.svg',
      info: selectedProduct?.transport.departureLocation,
    },
    {
      src: '/room-outline.svg',
      info: 'Select from 2 room types',
    },
  ];

  // function ----------------------------------------------------------------------------------------------------
  const onToggle = (e: any) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
  };

  // render ----------------------------------------------------------------------------------------------------
  const renderInfoItem = (src: string, info?: string) => (
    <div key={src} className='flex space-x-[10px] min-w-[220px] xs:min-w-max'>
      <Image src={src} alt={src} width={28} height={28} />
      {info && <span className='text-[14px] xs:text-[12px]'>{info}</span>}
    </div>
  );

  const renderHeader = () => (
    <div className='flex justify-between'>
      <h3 className={clsx(bloggerSans.className, 'text-[20px] xs:text-[16px]')}>
        {diffDays(selectedProduct?.startDate, selectedProduct?.endDate)} nights
        / {formatWeekDay(selectedProduct?.startDate, isMobile)} -{' '}
        {formatWeekDay(selectedProduct?.endDate, isMobile)}
      </h3>
      <div className='flex space-x-[8px]'>
        <div className='flex items-center px-[12px] xs:px-[10px] text-[14px] xs:text-[12px] bg-gray-100 rounded-[24px]'>
          Hydrotour
        </div>
        <div className='flex items-center px-[12px] xs:px-[10px] text-[14px] xs:text-[12px] text-gray-50 bg-red-500 rounded-[24px]'>
          -{formatCurrency(selectedProduct?.discountedPriceFrom)} today
        </div>
      </div>
    </div>
  );

  const renderInfo = () => (
    <div className='flex xs:flex-col justify-between items-end gap-[20px] xs:gap-[15px]'>
      <div className='flex justify-between flex-wrap flex-1 max-w-[600px] gap-[20px] xs:gap-[5px]'>
        {infoItems.map((i) => renderInfoItem(i.src, i.info))}
      </div>
      <div className='flex flex-col items-end gap-[10px]'>
        <span className='text-[12px] xs:text-[10px] text-gray-500'>
          From{' '}
          <span className='text-[20px] xs:text-[16px] text-cyan-400'>
            {formatCurrency(selectedProduct?.priceFrom)}
          </span>{' '}
          / per person
        </span>
        {!isMobile && (
          <Button
            type={collapsed ? 'normal' : 'primary'}
            onClick={(e) => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? 'Show more' : 'Show less'}
            <Image
              src={collapsed ? '/arrow-down.svg' : '/arrow-up.svg'}
              alt='arrow-up'
              width={18}
              height={18}
            />
          </Button>
        )}
      </div>
      {isMobile && collapsed && (
        <button
          className='flex items-center justify-center gap-[5px] text-[12px] text-[#9CA3AF] absolute bottom-0 right-0 left-0 py-[6.5px] bg-[#F9FAFB]'
          onClick={onToggle}
        >
          {collapsed ? 'Show more' : 'Show less'}
          <Image
            src={collapsed ? '/arrow-down.svg' : '/arrow-up.svg'}
            alt='arrow-up'
            width={18}
            height={18}
          />
        </button>
      )}
    </div>
  );

  const renderDescription = () => (
    <div className='space-y-[18px] xs:space-y-[10px]'>
      <h3 className={clsx(bloggerSans.className, 'text-[24px] xs:text-[18px]')}>
        {isMobile ? 'Description' : 'Description of term'}
      </h3>
      <ShowMoreText className='xs:text-[12px]'>{description}</ShowMoreText>
    </div>
  );

  const renderProductItem = (
    type: ProductType,
    title: string,
    price: string,
    checked: boolean,
    changeFunc: (title: string) => void
  ) => {
    const icon =
      type === ProductType.ROOM ? (
        <Image
          src='/room-default.png'
          className='object-cover rounded-[6px] h-[91px] xs:h-[70px] xs:w-[70px]'
          width={108}
          height={91}
          alt='room'
        />
      ) : (
        <div className='w-[108px] h-[91px] xs:h-[70px] xs:w-[70px] flex justify-center items-center'>
          <Image src='/icon-meals.svg' width={40} height={40} alt='room' />
        </div>
      );

    return (
      <div
        className={clsx(
          'p-[8px] xs:p-[4px] rounded-[12px] border flex gap-[30px] xs:gap-[14px] cursor-pointer hover:border-cyan-400',
          checked ? 'border-cyan-400' : 'border-[#DDD]'
        )}
        onClick={(e) => {
          e.stopPropagation();
          changeFunc(title);
        }}
      >
        {icon}
        <div className='self-center flex-1 flex justify-between items-center gap-[5px]'>
          <label className='text-[18px] xs:text-[12px] font-medium line-clamp-2'>
            {title}
          </label>
          <span className='text-[20px] xs:text-[16px] text-cyan-400'>
            {formatCurrency(Number(price) * 1000)}
          </span>
        </div>
        <RadioButton
          className='self-center mr-[30px] xs:mr-[10px]'
          checked={checked}
        />
      </div>
    );
  };

  const renderRoomTypes = () => (
    <div className='space-y-[10px]'>
      <h3 className={clsx(bloggerSans.className, 'text-[24px] xs:text-[18px]')}>
        Room Type
      </h3>
      {distinctRoomTypes.map((i, index) =>
        renderProductItem(
          ProductType.ROOM,
          i,
          differences[`${i}-${selectedCatering}`],
          i === selectedRoomType,
          setSelectedRoomType
        )
      )}
    </div>
  );

  const renderMealTypes = () => (
    <div className='space-y-[10px]'>
      <h3 className={clsx(bloggerSans.className, 'text-[24px] xs:text-[18px]')}>
        Meal Type
      </h3>
      {distinctCatering.map((i, index) =>
        renderProductItem(
          ProductType.CATERING,
          i,
          differences[`${selectedRoomType}-${i}`],
          i === selectedCatering,
          setSelectedCatering
        )
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        'flex-1',
        !isMobile && 'border border-gray-100 p-[32px] rounded-[16px]'
      )}
    >
      <div
        onClick={() => setCollapsed(!collapsed)}
        className={clsx(
          'border border-cyan-400 p-[20px] rounded-[16px] flex flex-col gap-[30px] xs:shadow-lg xs:relative overflow-hidden',
          !collapsed &&
            'bg-cyan-25 xs:border-none xs:shadow-none xs:p-0 xs:pt-[20px] xs:pb-[40px]'
        )}
      >
        {renderHeader()}
        {renderInfo()}
        <Collapsible collapsed={collapsed} className='space-y-[30px]'>
          {renderDescription()}
          {renderRoomTypes()}
          {renderMealTypes()}
        </Collapsible>
      </div>
    </div>
  );
};

export default Detail;
