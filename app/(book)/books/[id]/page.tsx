import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Books",
};

async function getBooks(id: string) {
  const res = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  return res.json();
}

export default async function BookList({ params }: { params: { id: string } }) {
  const { results } = await getBooks(params.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{results.display_name}</h1>
      <div className={styles.bookGrid}>
        {results.books.map((book: any) => (
          <div key={book.primary_isbn10} className={styles.bookItem}>
            <Image
              src={book.book_image}
              alt={book.title}
              width={200}
              height={300}
              className={styles.bookCover}
            />
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>{book.author}</p>
            <a
              href={book.amazon_product_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyButton}
            >
              Buy now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
