'use client';
import React, { useState } from 'react';
import { Detail, Summary } from '..';
import { DataProps } from '@/model';

type BookingProps = {
  data: DataProps;
};

const Booking: React.FC<BookingProps> = ({ data }) => {
  const { products, distinctRoomTypes, distinctCatering } = data;
  const [selectedRoomType, setSelectedRoomType] = useState<string>(
    distinctRoomTypes[0]
  );
  const [selectedCatering, setSelectedCatering] = useState<string>(
    distinctCatering[0]
  );
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const selectedProduct = products.find(
    (i) => i.catering === selectedCatering && i.roomType === selectedRoomType
  );

  return (
    <div className='max-w-[1408px] xs:max-w-max flex-1 flex xs:flex-col gap-[45px] p-[20px]'>
      <Detail
        data={data}
        collapsed={collapsed}
        selectedCatering={selectedCatering}
        selectedRoomType={selectedRoomType}
        selectedProduct={selectedProduct}
        setCollapsed={setCollapsed}
        setSelectedCatering={setSelectedCatering}
        setSelectedRoomType={setSelectedRoomType}
      />
      <Summary
        data={data}
        selectedProduct={!collapsed ? selectedProduct : null}
      />
    </div>
  );
};

export default Booking;
