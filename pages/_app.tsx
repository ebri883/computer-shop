import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import Navbar from "@/features/Navbar/view/Navbar.component";
import Footer from "@/features/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();
  return (
    <>
      <main>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default App;
