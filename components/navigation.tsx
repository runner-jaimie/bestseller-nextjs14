"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.navLink} ${
          pathname === "/" ? styles.activeLink : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about-us"
        className={`${styles.navLink} ${
          pathname === "/about-us" ? styles.activeLink : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
}
