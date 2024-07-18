import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <p>© 2024 - Marion Corvez</p>
        <ul className={styles.icon_list}>
          <li>
            <a href="#">email</a>
          </li>
          <li>
            <a href="#">github</a>
          </li>
          <li>
            <a href="#">linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
