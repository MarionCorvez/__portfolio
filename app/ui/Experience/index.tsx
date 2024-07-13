import styles from "./index.module.css";
import data from "@/app/lib/experience";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2>Education</h2>
      <ul>
        <li>2024 (WIP): RNCP level 5 in Front-end Development</li>
        <li>2007: Master in Medias & Communication</li>
        <li>2006: Master in Literature</li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>2014 - now: Founder of Naota</li>
        <li>2017 - 2021: Trainer</li>
        <li>2007 - 2013: Product Manager</li>
      </ul>
      <h2>Clients</h2>
      <p>
        Arianespace, Danone, Dassault Systèmes, La Mutualité Française, Le
        Conservateur, Le Monde, LVMH, PSA Group, Splendia, SFR, SNCF, Ubisoft,
        Viparis
      </p>
    </section>
  );
}
