import localFont from 'next/font/local'

export const geistSans = localFont({
	src: './source/geist.woff2',
	variable: '--font-geist-sans',
	weight: '100 900',
})

export const roboto = localFont({
  src: [
    { path: './source/Roboto-Regular.ttf', weight: '400', style: 'normal' },
    { path: './source/Roboto-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-roboto',
});

export const alegreya = localFont({
  src: [
    { path: './source/Alegreya-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './source/Alegreya-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-alegreya',
});