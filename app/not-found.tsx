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
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
