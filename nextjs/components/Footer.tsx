import styles from "../app/page.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <small>© {currentYear} Robotic Kirin Entertainment LLC</small>
    </footer>
  );
}