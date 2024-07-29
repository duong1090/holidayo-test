import { DataProps, Product } from '@/model';

export type DetailProps = {
  data: DataProps;
  collapsed?: boolean;
  selectedRoomType: string;
  selectedCatering: string;
  selectedProduct?: Product;
  setCollapsed: (collapsed: boolean) => void;
  setSelectedRoomType: (roomType: string) => void;
  setSelectedCatering: (catering: string) => void;
};

export enum ProductType {
  ROOM = 'room',
  CATERING = 'catering',
}
