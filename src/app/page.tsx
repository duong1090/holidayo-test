import { Booking, Detail, Summary } from '@/components';

async function getData() {
  const response = await fetch(' https://holidayo.free.beeceptor.com/');
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className='flex justify-center w-full py-[46px] xs:py-0'>
      <Booking data={data} />
    </main>
  );
}
