import styles from "./index.module.css";
import { skills } from "@/app/lib/placeholder-data";
import { Icon } from "@/app/lib/icons";

export default function Skills() {
  return (
    <section className="theme--grey">
      <div className="screen">
        <h2>Skills & Tools</h2>
        <div className={styles.panel}>
          {skills.map((skill) => (
            <div key={skill} className={`${styles.card} theme--anthracite`}>
              <div className={styles.card_inner}>
                <div className={styles.card_front}>
                  <Icon
                    name={skill}
                    size={32}
                    className={styles.card_icon}
                    title={skill}
                    aria-label={skill}
                    role="img"
                  />
                </div>
                <div className={styles.card_back}>
                  <span className={styles.card_title}>{skill}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
