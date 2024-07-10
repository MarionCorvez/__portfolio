import styles from "./index.module.css";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <h2>About</h2>
      <p>
        Hello, I am a junior <strong>front-end developer</strong> specialised in
        Component Driven User Interfaces with a strong focus on search engine
        optimisation, accessibility, performance et security.
      </p>
      <p>
        I also worked for years as a <strong>trainer</strong> and as a{" "}
        <strong>product manager</strong>.
      </p>
      <ul>
        <li>email</li>
        <li>github</li>
        <li>linkedin</li>
      </ul>
    </section>
  );
}
