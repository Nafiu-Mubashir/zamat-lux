import "~/styles/globals.css";
import '@mantine/core/styles.css';

import NextAdapterApp from 'next-query-params/app';
import type { AppProps } from "next/app";
import { QueryParamProvider } from 'use-query-params';

import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    /** Put your mantine theme override here */
  };
  return (
    <QueryParamProvider adapter={NextAdapterApp}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </QueryParamProvider>
  );
}
