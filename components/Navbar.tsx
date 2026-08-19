"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logoContainer}>
        <img src="/logo.jpeg" alt="Samruddhi Constructions Logo" className={styles.logo} />
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`${styles.navLink} ${pathname === '/projects' ? styles.active : ''}`}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>
              CONTACT
            </Link>
          </li>
        </ul>

        <Link href="/quote" className={styles.quoteBtn}>
          GET OUR BROCHURE
          <div className={styles.iconCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </Link>
      </nav>
    </div>
  );
}
