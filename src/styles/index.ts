import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const bloggerSans = localFont({
  src: [
    {
      path: './fonts/Blogger-Sans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Blogger-Sans-Medium-Italic.ttf',
      weight: '500',
      style: 'italic',
    },
  ],
});
