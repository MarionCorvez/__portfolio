import Image from "next/image";

import styles from "./index.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div>
        <a
          href="mailto:marion.corvez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/mail.svg"
            alt="Email Logo"
            className={styles.vercelLogo}
            width={24}
            height={24}
            priority
          />{" "}
          Email
        </a>
      </div>
      <div>
        <a
          href="https://github.com/MarionCorvez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            className={styles.vercelLogo}
            width={20}
            height={24}
            priority
          />{" "}
          GitHub
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/marioncorvez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/rounded-linkedin.svg"
            alt="LinkedIn Logo"
            className={styles.vercelLogo}
            width={20}
            height={24}
            priority
          />{" "}
          LinkedIn
        </a>
      </div>
    </div>
  );
}
