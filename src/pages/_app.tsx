import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '../components/theme-provider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
