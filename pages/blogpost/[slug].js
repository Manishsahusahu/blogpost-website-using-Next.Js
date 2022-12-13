import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Blogpost.module.css";

const slug = ({ myBlog }) => {
  const [blog, setBlog] = useState(myBlog);
  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return; // router takes time to be ready
  //   const { slug } = router.query; // we took the slug key from object. in object we got the component typed in url by the user.
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => a.json())
  //     .then((parsed) => setBlog(parsed));
  // }, [router.isReady]); // whenever router.isReady is changed then run again this useEffect.

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch(
    `http://localhost:3000/api/getblog?slug=${context.query.slug}`
  );
  let myBlog = await data.json();
  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default slug;
