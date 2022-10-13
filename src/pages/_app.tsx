import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Titulo</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
