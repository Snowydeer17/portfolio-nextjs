import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function About() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.about}>
          <h1>About</h1>

          <p>
            Hi, I'm Snowy (CJ Vick), an illustrator, designer, and aspiring
            themed-entertainment creator. I create under the names SnowyDeer,
            SnowyDeerIsHere, and Snowy Deer Designs, where I share
            illustrations, merchandise, and other personal creative work. I'm
            also developing Robotic Kirin Entertainment, an upcoming studio brand
            for my larger projects including video games, animatronics, and
            immersive experiences.
          </p>

          <div className={styles.aboutImage}>
            <Image
              src="/assets/GDES132_SP26_ALLABOUTME_CVICK.png"
              alt="All about me poster featuring me and stuff I like"
              width={850}
              height={500}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}