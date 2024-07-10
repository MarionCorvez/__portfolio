import styles from "./index.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>email</li>
        <li>github</li>
        <li>linkedin</li>
      </ul>
      <div className={styles.aside_links}>
        <a href="#" title="">
          email
        </a>
        <a href="#" title="">
          github
        </a>
        <a href="#" title="">
          linkedin
        </a>
      </div>
    </aside>
  );
}
