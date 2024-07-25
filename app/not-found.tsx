import Link from "next/link";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="screen">
            <h2>This page does not exist</h2>
            <Link className="link" href="/">
              You may want to return to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
