import type { AppProps } from "next/app";
import "../../styles/globals.css";
import "../load";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
