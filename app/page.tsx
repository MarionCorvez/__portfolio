import Image from "next/image";
import styles from "./page.module.css";
import Introduction from "@/app/ui/Introduction";
import Work from "@/app/ui/Work";
import Aside from "@/app/ui/Aside";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import Skills from "@/app/ui/Skills";
import Experience from "@/app/ui/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Introduction />
        <Work />
        <Skills />
        <Experience />
      </main>
      {/*<Aside />*/}
      <Footer />
    </>
  );
}
