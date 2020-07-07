import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import theme from "../src/theme";
import { PolymorphicContextProvider } from "../src/PolymorphicContext";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const fathom = (
    <script
      src="https://cattle.lambda.town/script.js"
      // @ts-ignore
      site="EDWLWRMA"
      defer
    ></script>
  );
  return (
    <PolymorphicContextProvider>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: {
              background: theme.colors.gray[100],
            },
          }}
        />
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
      <Head>
        {process.env.NODE_ENV === "production" ? fathom : null}
      </Head>
    </PolymorphicContextProvider>
  );
};

export default MyApp;
