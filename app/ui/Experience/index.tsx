import styles from "./index.module.css";
import data from "@/app/lib/experience";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2>Education</h2>
      <ul>
        <li>RNCP level 5 in Front-end Development</li>
        <li>Master in Medias & Communication</li>
        <li>Master in Literature</li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>2014 - now: Founder of Naota</li>
        <li>2017 - 2021: Trainer</li>
        <li>2007 - 2013: Web Product Manager</li>
      </ul>
      <h2>Clients</h2>
      <p>
        Arianespace, Dassault Systèmes, LVMH, La Mutualité Française, Le
        Conservateur, PSA Group, Splendia, Ubisoft, Viparis
      </p>
    </section>
  );
}
