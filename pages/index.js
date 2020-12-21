import Head from "next/head";

// import { Artists } from "../../components";

import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mandaljazz 2021 | 1.–3. juli</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.SplashPage}>
          <header className={styles.Header}>
            <div>
              <img
                src="/images/profile/lighthouse-transparent.jpg"
                className={styles.Logo}
                alt="Lighthouse"
              />
            </div>
            <h1 className={styles.HeaderText}>mandaljazz</h1>
            <p className={styles.SubHeader}>1.–3. juli 2021</p>
          </header>
          {/* <Artists /> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
