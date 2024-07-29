import dayjs from 'dayjs';

export const formatWeekDay = (date?: string, short?: boolean) =>
  dayjs(date).format(short ? 'ddd' : 'dddd');

export const formatDate = (date?: string) => dayjs(date).format('DD.MM.YYYY');

export const diffDays = (start?: string, end?: string) =>
  dayjs(end).diff(dayjs(start), 'days');

export const formatCurrency = (value?: string | number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(Number(value) / 1000);
