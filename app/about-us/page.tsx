export const metadata = {
  title: "About us",
};

import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About us</h1>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </p>
        <p className={styles.paragraph}>We hope you enjoy your stay!</p>
      </div>
    </div>
  );
}
