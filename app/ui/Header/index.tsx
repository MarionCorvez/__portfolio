"use client";

import styles from "./index.module.css";
import DarkMode from "@/app/ui/DarkMode";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>marion corvez</h1>
          <p className={styles.availability}>
            Available in <span className="accent">September, 2024</span>
          </p>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
