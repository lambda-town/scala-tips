import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import theme from "../src/theme";
import { PolymorphicContextProvider } from "../src/PolymorphicContext";

const MyApp = ({ Component, pageProps }) => {
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
    </PolymorphicContextProvider>
  );
};

export default MyApp;
