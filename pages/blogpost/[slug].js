import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Blogpost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query; // we took the slug key from object. in object we got the component typed in url by the user.
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page is {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus
          possimus alias, quis natus quod quo? Quis eum et optio quos sit,
          cupiditate deserunt veritatis laboriosam dolor rem perspiciatis, modi
          consequuntur soluta nihil distinctio.
        </div>
      </main>
    </div>
  );
};

export default slug;
