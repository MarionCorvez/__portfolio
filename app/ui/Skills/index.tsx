import styles from "./index.module.css";
import { skills } from "@/app/lib/placeholder-data";

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className="screen">
        <h2>Skills & Tools</h2>
        <ul className={styles.tags}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
