import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { max: '639px' },
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      'blogger-sans': ['Blogger Sans', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'red-500': '#EF4444',
        'gray-50': '#FEF2F2',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
        'cyan-25': '#F1FEFF',
        'cyan-50': '#ECFEFF',
        'cyan-400': '#04CEDB',
        white: '#FFFFFF',
      },
      boxShadow: {
        md: '1px 1px 4px 0px rgba(0, 0, 0, 0.10)',
        lg: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
