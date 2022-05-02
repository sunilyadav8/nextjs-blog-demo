import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Navbar: NextPage = () => {
  return (
    <>
      <nav>
        <div className={styles.topnav}>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/createblog">Create Blog</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
