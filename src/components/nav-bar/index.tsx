import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className='flex px-[20px] py-[26px] xs:py-[15px] justify-between shadow-md z-10'>
      <Image src='/holidayo.svg' alt='holidayo' width={135} height={32} />
      <div className='flex space-x-[5px]'>
        <Image src='/slovakia.svg' alt='slovakia' width={34} height={34} />
        <Image src='/menu.svg' alt='menu' width={69} height={34} />
      </div>
    </nav>
  );
};

export default NavBar;
