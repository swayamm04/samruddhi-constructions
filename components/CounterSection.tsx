import React from 'react';
import { Home, Building2, Users, Building } from 'lucide-react';
import styles from './CounterSection.module.css';

const counters = [
  {
    icon: <Home size={28} strokeWidth={2.5} color="#333" />,
    number: "70+",
    title: "COMPLETED PROJECTS",
    description: "Successfully completed multiple residential and commercial projects with a focus on quality, safety"
  },
  {
    icon: <Building2 size={28} strokeWidth={2.5} color="#333" />,
    number: "10+",
    title: "YEARS OF EXPERIENCES",
    description: "Decades of hands-on experience delivering quality construction projects with proven expertise and reliability."
  },
  {
    icon: <Users size={28} strokeWidth={2.5} color="#333" />,
    number: "120+",
    title: "HAPPY CLIENTS",
    description: "Trusted by satisfied clients through transparent communication, professional service, and consistent project outcomes."
  },
  {
    icon: <Building size={28} strokeWidth={2.5} color="#333" />,
    number: "5+",
    title: "5 HIGH-RISE",
    description: "We have successfully completed five high-rise projects with strong structural integrity and modern architectural design."
  }
];

export default function CounterSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {counters.map((counter, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className={styles.card}>
                <div className={styles.iconBox}>
                  {counter.icon}
                </div>
                <div className={styles.number}>{counter.number}</div>
                <h3 className={styles.title}>{counter.title}</h3>
                <p className={styles.description}>{counter.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
