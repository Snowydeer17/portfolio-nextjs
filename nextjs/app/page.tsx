"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const workItems = Array.from({ length: 21 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/assets/work-${number}.jpg`,
    alt: `Work ${number}`,
    title: `Work ${number}`,
  };
});

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<null | {
    src: string;
    alt: string;
    title: string;
  }>(null);

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.gallery} aria-label="Featured work">
          {workItems.map((work) => (
            <button
              className={styles.tile}
              key={work.src}
              type="button"
              onClick={() => setSelectedWork(work)}
            >
              <span className={styles.tileTitle}>{work.title}</span>
            </button>
          ))}
        </section>
      </main>

      {selectedWork && (
        <div className={styles.lightbox}>
          <button
            className={styles.close}
            type="button"
            onClick={() => setSelectedWork(null)}
          >
            ×
          </button>

          <Image
            src={selectedWork.src}
            alt={selectedWork.alt}
            width={900}
            height={900}
          />

          <p>{selectedWork.title}</p>
        </div>
      )}

      <Footer />
    </>
  );
}

