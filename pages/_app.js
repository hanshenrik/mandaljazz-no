import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default App;
