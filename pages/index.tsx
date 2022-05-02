import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>nextjs blog app</title>
        <meta name="description" content="nextjs blog app" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="Sunil Yadav" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <footer className={styles.footer}>
        <a
          href="http://www.logicstime.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Sunil
        </a>
      </footer>
    </div>
  );
};

export default Home;
