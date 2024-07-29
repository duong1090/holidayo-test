type Transport = {
  type: string;
  departureLocation: string;
};

export type Product = {
  catering: string;
  roomType: string;
  startDate: string;
  endDate: string;
  transport: Transport;
  discountedPriceFrom: string;
  priceFrom: string;
  adults: number;
  children: number;
};

export type DataProps = {
  description: string;
  distinctRoomTypes: string[];
  distinctCatering: string[];
  differences: {
    [x: string]: string;
  };
  products: Product[];
};
