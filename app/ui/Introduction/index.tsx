import styles from "./index.module.css";
import Contact from "@/app/ui/Contact";

export default function Introduction() {
  return (
    <section className="theme--anthracite">
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
        <Contact />
      </div>
    </section>
  );
}
