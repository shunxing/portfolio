import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp;
