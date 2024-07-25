import styles from "./index.module.css";
import data from "@/app/lib/experience";

export default function Experience() {
  return (
    <section className={`${styles.section} theme--main`}>
      <div className="screen">
        <div className="grid">
          <div>
            <h2>Education</h2>
            <ul>
              <li>2024 (WIP): RNCP level 5 in Front-end Development</li>
              <li>2007: Master in Medias & Communication</li>
              <li>2006: Master in Literature</li>
            </ul>
          </div>
          <div>
            <h2>Experience</h2>
            <ul>
              <li>2022 - now: Design & Development of web applications</li>
              <li>2017 - 2021: New Media & Communication Teacher</li>
              <li>2007 - 2016: Digital Product Manager</li>
            </ul>
          </div>
          <div>
            <h2>Clients</h2>
            <p>
              Arianespace, Danone, Dassault Systèmes, La Mutualité Française, Le
              Conservateur, Le Monde, LVMH, PSA Group, Splendia, SFR, SNCF,
              Ubisoft, Viparis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
