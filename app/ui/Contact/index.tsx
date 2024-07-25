import styles from "./index.module.css";

export default function Contact() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="mailto:marion.corvez@gmail.com"
          rel="noopener noreferrer"
          title="Send me an email, open webmail"
          aria-label="Send me an email, open webmail"
          className={styles.link}
        >
          Email
        </a>
      </li>
      <li>
        <a
          href="https://github.com/MarionCorvez"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my GitHub account, new window"
          aria-label="Visit my GitHub account, new window"
          className={styles.link}
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/marioncorvez/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my LinkedIn page, new window"
          aria-label="Visit my LinkedIn page, new window"
          className={styles.link}
        >
          {" "}
          LinkedIn
        </a>
      </li>
    </ul>
  );
}
