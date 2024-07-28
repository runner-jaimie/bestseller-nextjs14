import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Home",
};

async function getBookLists() {
  const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  return res.json();
}

export default async function Home() {
  const { results } = await getBookLists();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <div className={styles.grid}>
        {results.map((list: any) => (
          <Link
            href={`/books/${list.list_name_encoded}`}
            key={list.list_name_encoded}
            className={styles.card}
          >
            <div className={styles.cardContent}>{list.display_name} →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
