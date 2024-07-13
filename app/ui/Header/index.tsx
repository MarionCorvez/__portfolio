"use client";

import styles from "./index.module.css";
import DarkMode from "@/app/ui/DarkMode";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>marion corvez</h1>
      <p>Available in September, 2024</p>
      <DarkMode />
    </header>
  );
}
