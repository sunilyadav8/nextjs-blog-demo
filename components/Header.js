import Link from 'next/link';
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css"
const Header = () => {
  return (
    <header >
      <Navbar />
      <div className={styles.body}>
        <h1>
          Welcome to nextjs blog app
        </h1>
        <Link href='/blogs'> 👉👉👉 Click here for blog</Link>
      </div>
    </header>
  );
};

export default Header;
