import styles from "./index.module.css";

export default function Introduction() {
  return (
    <section className={styles.section}>
      <div className="screen">
        <h2>About</h2>
        <p className={styles.content}>
          Hello, I am a junior{" "}
          <span className="accent">front-end developer</span> specialised in
          Component Driven User Interfaces with a strong focus on accessibility,
          search engine optimisation, performance and security. I also worked
          for years as a <span className="accent">product manager</span> and as
          a <span className="accent">trainer</span>.
        </p>
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
    </section>
  );
}
