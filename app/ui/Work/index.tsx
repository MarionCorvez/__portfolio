import styles from "./index.module.css";
import Image from "next/image";
import { works } from "@/app/lib/placeholder-data";

export default function Work() {
  return (
    // <section className={[styles.work, "screen"].join(" ")}>
    <section className={styles.section}>
      <div className="screen">
        <h2>Latest projects</h2>
        <div className={styles.panel}>
          {works.map((work) => (
            <article key={work.id} className={styles.card}>
              <div className={styles.picture}>
                <Image
                  src={work.image}
                  width={400}
                  height={250}
                  className="{styles.image}"
                  alt={`${work.title}'s project illustration`}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.work__title}>{work.title}</h3>
                <p className={styles.work__description}>{work.description}</p>
                <ul className={styles.tags}>
                  {work.tags.map((tag) => (
                    <li key={tag.toString()} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className={styles.buttons}>
                  <a href={work.code} target="_blank">
                    View code
                  </a>
                  {work.demo && (
                    <a href={work.demo} target="_blank">
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
