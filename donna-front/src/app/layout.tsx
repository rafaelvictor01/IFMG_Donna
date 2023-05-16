'use client';

import './globals.css';
import { Poppins } from 'next/font/google';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DefaultTheme } from '../themes/default_theme';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout(props: IRootLayout) {
  return (
    <html lang="pt-br">
      <head>
        <title>Donna</title>
        <meta name={'description'} content={'Plataforma web guarda Sabará'} />
      </head>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <body className={poppins.className}>
          <main>{props.children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
