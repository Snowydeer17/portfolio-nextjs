import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <div className={styles.social}>
          <a href="https://instagram.com/cj_vick" aria-label="Instagram" className={styles.icon}>
            <img src="/images/social/insta-logo.svg" alt="instagram" />
          </a>

          <a href="https://tiktok.com/@snowydeeri" aria-label="TikTok" className={styles.icon}>
            <img src="/images/social/tiktok-logo.svg" alt="tiktok" />
          </a>

          <a href="https://youtube.com/@SnowyDeerIsHere" aria-label="YouTube" className={styles.icon}>
            <img src="/images/social/yt-logo.svg" alt="youtube" />
          </a>

          <a href="mailto:jol223@hotmail.com" aria-label="Email" className={styles.icon}>
            <img src="/images/social/email-logo.svg" alt="email" />
          </a>
        </div>

        <Link className={styles.brand} href="/" aria-label="Robotic Kirin Home">
          <Image
            src="/images/port-logos-assets.svg"
            alt="Robotic Kirin"
            width={300}
            height={120}
            priority
          />
        </Link>
      </div>

      <nav className={styles.siteNav} aria-label="primary">
        <Link href="/">Illustrations</Link>
        <a href="https://etsy.com/shop/SnowyDeerDesigns">Store</a>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}