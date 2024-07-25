import styles from "./index.module.css";
import Contact from "@/app/ui/Contact";

export default function Introduction() {
  return (
    <section className="theme--anthracite">
      <div className="screen">
        <h2>About</h2>
        <p className={styles.content}>
          Hello, I am a junior <strong>front-end developer</strong> specialised
          in Component Driven User Interfaces and Agile methodologies with a
          strong focus on accessibility, search engine optimisation, performance
          and security. I also worked for years as a{" "}
          <strong>product manager</strong> and as a <strong>teacher</strong>. I
          can help you build digital products from UX design to front-end
          coding, especially with the React library.
        </p>
        <Contact />
      </div>
    </section>
  );
}
