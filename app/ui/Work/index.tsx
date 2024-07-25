import styles from "./index.module.css";
import Image from "next/image";
import { works } from "@/app/lib/placeholder-data";

export default function Work() {
  return (
    <section className={`${styles.section} theme--main`}>
      <div className="screen">
        <h2>Latest projects</h2>
        <div className={`${styles.panel} flex--between`}>
          {works.map((work) => (
            <article key={work.id} className={`${styles.card} flex--between`}>
              <div className={styles.picture}>
                <Image
                  src={work.image}
                  width={686}
                  height={250}
                  className={styles.image}
                  priority={true}
                  alt={`${work.title}'s project illustration`}
                />
              </div>
              <div className={styles.content}>
                <ul className={styles.tags}>
                  {work.tags.map((tag) => (
                    <li key={tag.toString()} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3 className={styles.title}>{work.title}</h3>
                <p className={styles.work__description}>{work.description}</p>

                <div className={styles.ctas}>
                  <a
                    className={`${styles.cta} ${styles.cta_code}`}
                    href={work.code}
                    target="_blank"
                  >
                    View code
                  </a>
                  {work.demo && (
                    <a
                      className={`${styles.cta} ${styles.cta_demo}`}
                      href={work.demo}
                      target="_blank"
                    >
                      View demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
