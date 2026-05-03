
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <>

    <Header />

    <main className={styles.page}>
      <section className={styles.contact}>
        <h1>Contact</h1>

        <form
          className={styles.contactForm}
          action="mailto:jol223@hotmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Name <span className={styles.req}>(required)</span>
            <div className={styles.nameRow}>
              <input type="text" name="First Name" placeholder="First Name" required />
              <input type="text" name="Last Name" placeholder="Last Name" required />
            </div>
          </label>

          <label>
            Email <span className={styles.req}>(required)</span>
            <input type="email" name="Email" required />
          </label>

          <label className={styles.checkboxRow}>
            <input type="checkbox" name="Newsletter" />
            <span>Sign up for news and updates</span>
          </label>

          <label>
            Subject <span className={styles.req}>(required)</span>
            <input type="text" name="Subject" required />
          </label>

          <label>
            Message <span className={styles.req}>(required)</span>
            <textarea name="Message" rows={6} required></textarea>
          </label>

          <button className={styles.btn} type="submit">
            Submit
          </button>
        </form>

        <p className={styles.contactNote}>
          (This form opens your email app to send the message.)
        </p>
      </section>
    </main>

    <Footer />
    </>
  );
}
