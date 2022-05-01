import type { AppProps } from "next/app";
import axios from "axios";
import Navbar from "components/Navbar";
import "styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
