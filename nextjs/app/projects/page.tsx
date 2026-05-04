import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projects from "@/app/data/projects";
import styles from "../page.module.css";


export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.about}>
          <h1>Projects</h1>

          {projects.map((project) => (
            <article key={project.slug} className={styles.projectCard}
            data-coming={project.comingSoon ?
            "true" : "false"}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <Image
  src={project.image}
  alt={project.title}
  width={600}
  height={350}
  className={styles.projectImage}
/>


              {project.comingSoon ? (
                <span className={styles.comingSoon}>Coming Soon</span>
              ) : (
                <Link href={`/projects/${project.slug}`}>View Project</Link>
              )}
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
