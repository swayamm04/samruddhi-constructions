"use client";

import { useState } from 'react';
import { PenTool, Building2, PaintBucket, Wrench, ClipboardCheck, Key, Plus, X } from 'lucide-react';
import styles from './ServicesAccordion.module.css';

const services = [
  {
    id: "01",
    title: "Architecture",
    description: "Concept to construction-ready drawings, built around light, structure and how a place will actually be lived in.",
    Icon: PenTool
  },
  {
    id: "02",
    title: "Construction",
    description: "In-house execution teams, precision scheduling and site discipline that keeps tolerances tight from foundation to finish.",
    Icon: Building2
  },
  {
    id: "03",
    title: "Interior Design",
    description: "Material palettes, bespoke joinery and lighting design that carry the architecture's intent into every room.",
    Icon: PaintBucket
  },
  {
    id: "04",
    title: "Renovation",
    description: "Structural retrofits and adaptive reuse for properties that deserve a second life without losing their character.",
    Icon: Wrench
  },
  {
    id: "05",
    title: "Project Management",
    description: "One point of accountability across consultants, contractors and vendors, reporting against a live master schedule.",
    Icon: ClipboardCheck
  },
  {
    id: "06",
    title: "Turnkey Solutions",
    description: "End-to-end service from initial concept to final handover, delivering a fully furnished, ready-to-use space.",
    Icon: Key
  }
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>WHAT WE DO</span>
          <h2 className={styles.title}>Six disciplines, one<br/>accountable team.</h2>
        </div>
        
        <div className={styles.accordionContainer}>
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const Icon = service.Icon;
            
            return (
              <div 
                key={service.id} 
                className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.itemHeader}>
                  <div className={styles.itemHeaderLeft}>
                    <span className={styles.itemNumber}>{service.id}</span>
                    <Icon className={styles.itemIcon} size={24} />
                    <h3 className={styles.itemTitle}>{service.title}</h3>
                  </div>
                  <div className={styles.itemHeaderRight}>
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <div className={`${styles.itemContent} ${isOpen ? styles.contentOpen : ''}`}>
                  <div className={styles.contentInner}>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
