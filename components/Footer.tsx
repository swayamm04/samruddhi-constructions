import styles from "./Footer.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Samruddhi <br/><span style={{ fontSize: "0.5em", letterSpacing: "1px", fontWeight: "normal" }}>Architects | Construction | Interiors</span></h2>
          <p className={styles.description}>
            DESIGNING SPACES. BUILDING TRUST.<br />
            YOUR VISION. OUR EXPERTISE. BUILT TO PERFECTION.
          </p>
        </div>
        
        <div className={styles.linksGroup}>
          <h3 className={styles.heading}>Navigation</h3>
          <ul className={styles.list}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className={styles.contactGroup}>
          <h3 className={styles.heading}>Get in Touch</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <MapPin size={18} />
              <span>Bangalore, Karnataka, India</span>
            </li>
            <li className={styles.contactItem}>
              <Phone size={18} />
              <span>9483106164 / 9481936167</span>
            </li>
            <li className={styles.contactItem}>
              <Mail size={18} />
              <span>info@samruddhiconstructions.com</span>
            </li>
          </ul>
        </div>
        
        <div className={styles.socialGroup}>
          <h3 className={styles.heading}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/samruddhi_construction?igsh=MWkwODF2c2t5NGo1Mg==" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Samruddhi Constructions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
