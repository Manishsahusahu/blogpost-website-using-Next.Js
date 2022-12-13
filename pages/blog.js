import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

const Blog = ({ allBlogs }) => {
  const [blogs, setblogs] = useState(allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.title} className={styles.blogItem}>
                <Link href={`blogpost/${blogItem.slug}`}>
                  <a>
                    <h3>{`${blogItem.title}`}</h3>
                  </a>
                </Link>
                <p className={styles.blogItemP}>{`${blogItem.content.substr(
                  0,
                  200
                )}...`}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  // this function is running on server side and giving content before rendering the page on browser. means front end does not need to wait for content from api.
  // please keep in mind that to run this function we have to hit this page now. means refresh this page from browser.
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
