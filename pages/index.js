import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{`
        h2 {
          font-size: 38px;
        }
        h3 {
          font-size: 21px;
        }
      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>
        <div className={styles.myImgWrap}>
          <Image
            className={styles.myImg}
            src="/homeImg.jpg"
            width={388}
            height={258}
          />
        </div>
        <p className={styles.description}>A blog for coders by a coder</p>
        <div className="blogs">
          <h2>Popular blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}