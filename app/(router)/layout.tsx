import type { Metadata } from 'next';
import '@/app/styles/globals.scss';

export const metadata: Metadata = {
  title: 'moviego',
  description: 'moviego description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <div className='wrap'>
          {children}
        </div>
      </body>
    </html>
  );
}
