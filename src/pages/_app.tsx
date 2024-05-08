import "~/styles/globals.css";
import '@mantine/core/styles.css';

import NextAdapterApp from 'next-query-params/app';
import type { AppProps } from "next/app";
import { QueryParamProvider } from 'use-query-params';
import { NextPage } from 'next';

import { MantineProvider } from '@mantine/core';


type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const theme = {
  /** Put your mantine theme override here */
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // const { asPath } = useRouter();
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <QueryParamProvider adapter={NextAdapterApp}>
      <MantineProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </QueryParamProvider>
  );
}
