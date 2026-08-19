import React from 'react';
import styles from './LoanSupportSection.module.css';

const banks = [
  "Citi",
  "Canara Bank",
  "Kotak",
  "HDFC Bank",
  "LIC",
  "ICICI Bank"
];

export default function LoanSupportSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.badge}>LOAN PARTNER</span>
        <h2 className={styles.title}>EASY HOME LOAN SUPPORT</h2>
        <p className={styles.subtitle}>Simplifying your home construction with easy loan approvals.</p>
        
        <div className={styles.logoGrid}>
          {banks.map((bank, index) => (
            <div key={index} className={styles.logoCard}>
              {/* Replace the span below with an <img /> tag when you have the bank logo images */}
              <span className={styles.placeholderText}>{bank}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
