import styles from "./index.module.css";
import Contact from "@/app/ui/Contact";

export default function Footer() {
  return (
    <footer className="theme--anthracite">
      <div className={`${styles.container} flex--center screen`}>
        <span>© 2024 - Marion Corvez</span>
        <Contact />
      </div>
    </footer>
  );
}
