import { AppProps } from "next/app";
import { useRouter } from "next/router";
import store from "@/store";
import "../styles/globals.scss";
import Navbar from "@/features/Navbar/view/Navbar.view";
import Footer from "@/features/Footer";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();
  return (
    <>
      <main>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </main>
    </>
  );
};

export default App;
