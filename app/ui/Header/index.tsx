"use client";

import styles from "./index.module.css";
import DarkMode from "@/app/ui/DarkMode";

export default function Header() {
  return (
    <header className="theme--anthracite">
      <div className={`${styles.container} flex--between screen`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            <span className="accent">marion</span> corvez
          </h1>
          <p className={styles.availability}>
            Available in <strong>September, 2024</strong>
          </p>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
