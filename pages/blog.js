import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          <div className={styles.blogItem}>
            <Link href="blogpost/learn-javascript">
              <a>
                <h3>How to learn javascript in 2023?</h3>
              </a>
            </Link>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript in 2023?</h3>
            <p>Javascript is used to give brain to the static webpages.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
