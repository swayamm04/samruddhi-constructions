"use client";

import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.gridContainer}`}>
        <div className={styles.textContent}>
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting Spaces That Inspire
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Samruddhi Constructions, we believe that architecture is more than just building structures; it's about creating environments that resonate with the human spirit. With a legacy of excellence and a passion for innovation, we deliver projects that stand the test of time.
          </motion.p>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our multidisciplinary approach combines sustainable practices with cutting-edge design, ensuring that every project not only meets but exceeds our clients' expectations.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </motion.div>
        </div>
        <div className={styles.imageContent}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image 
              src="/project_3.png" 
              alt="Interior Design" 
              fill
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
