import styles from "./index.module.css";
import Image from "next/image";
import { works } from "@/app/lib/placeholder-data";

export default function Work() {
  return (
    <section className={styles.work}>
      <h2>Latest projects</h2>
      {works.map((work) => (
        <article key={work.id} className={styles.work__wrapper}>
          <div className={styles.work__content}>
            <h3 className={styles.work__title}>{work.title}</h3>
            <p className={styles.work__description}>{work.description}</p>
            <ul className={styles.work__tags}>
              {work.tags.map((tag) => (
                <li key={tag.toString()} className={styles.work__tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <div>
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
          <div className={styles.work__picture}>
            <Image
              src={work.image}
              width={600}
              height={432}
              className="{styles.work__image}"
              alt={`${work.title}'s project illustration`}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
