"use client";

import { motion } from "framer-motion";
import styles from "./ProjectGallery.module.css";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "The Oasis Villa",
    category: "Residential Architecture",
    image: "/project_1.png",
  },
  {
    id: 2,
    title: "Apex Tower",
    category: "Commercial Skyscraper",
    image: "/project_2.png",
  }
];

export default function ProjectGallery() {
  return (
    <section id="projects" className={styles.gallerySection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Featured Works</span>
          <h2 className="section-title">Our Projects</h2>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.projectInfo}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
