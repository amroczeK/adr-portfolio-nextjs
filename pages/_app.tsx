import "../styles/globals.css";
import "../styles/pagination.scss";
import type { AppProps } from "next/app";
import Header from "../components/Nav"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
