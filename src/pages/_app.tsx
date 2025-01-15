import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import AnimatedCursor from 'react-animated-cursor';

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
      {/* <AnimatedCursor
        clickables={['a', 'button', '.menu-item']}
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={1}
        outerStyle={{ mixBlendMode: 'exclusion' }}
        innerStyle={{ mixBlendMode: 'exclusion' }}
      /> */}
    </ThemeProvider>
  );
}

export default App;
