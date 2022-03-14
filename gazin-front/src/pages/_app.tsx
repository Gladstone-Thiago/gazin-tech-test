import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Base } from '../components/Form/Base';
import { ResponseToast } from '../components/Form/ResponseToast';
import { AuthProvider } from '../contexts/AuthContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { ToastProvider } from '../contexts/ToastContext';
import { theme } from '../styles/theme';
import '../styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToastProvider>
        <AuthProvider>
          <LanguageProvider>
            <SidebarDrawerProvider>
              <div suppressHydrationWarning>
                <Base>
                  <ResponseToast />
                  <Component {...pageProps} />
                </Base>
              </div>
            </SidebarDrawerProvider>
          </LanguageProvider>
        </AuthProvider>
      </ToastProvider>
    </ChakraProvider>
  );
}

export default MyApp;
