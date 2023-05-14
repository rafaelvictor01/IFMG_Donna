import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata = {
  title: 'Donna',
  description: 'Plataforma web guarda Sabará'
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
