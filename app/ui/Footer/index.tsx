import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Footer</h2>
      <p>© 2024 - Marion Corvez</p>
      <ul>
        <li>email</li>
        <li>github</li>
        <li>linkedin</li>
      </ul>
    </footer>
  );
}
