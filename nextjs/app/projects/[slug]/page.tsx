import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projects from "@/app/data/projects";
import styles from "../../page.module.css";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.about}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <Image
            src={project.image}
            alt={project.title}
            width={850}
            height={500}
          />

          {project.year && (
            <p>
              <strong>Year:</strong> {project.year}
            </p>
          )}

          {project.tools && (
            <>
              <h2>Tools</h2>
              <ul>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

