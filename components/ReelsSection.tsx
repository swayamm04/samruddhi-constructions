"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import styles from './ReelsSection.module.css';

const reelsData = [
  { id: 1, image: '/image/vintage-wooden-home-interior-design-2022-12-16-00-19-04-utc.jpg', title: 'BHOOMI POOJA' },
  { id: 2, image: '/image/interior-design-of-a-bedroom-2022-11-16-06-07-23-utc.jpg', title: 'SITE UPDATE 1' },
  { id: 3, image: '/image/office-building-2022-12-15-19-40-07-utc.jpg', title: 'CONCRETING' },
  { id: 4, image: '/image/modern-bathroom-interior-design-2022-12-16-11-57-19-utc.jpg', title: 'INTERIOR WORK' },
  { id: 5, image: '/image/interior-design-of-scandinavian-open-space-2022-12-07-04-19-53-utc.jpg', title: 'HANDOVER' },
];

export default function ReelsSection() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reelsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length);
  };

  const getPositionClass = (index: number) => {
    if (index === currentIndex) return styles.center;
    if (index === (currentIndex - 1 + reelsData.length) % reelsData.length) return styles.left;
    if (index === (currentIndex + 1) % reelsData.length) return styles.right;
    return styles.hidden;
  };

  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className={styles.title}>CONSTRUCTION REELS</h2>
        <p className={styles.subtitle}>Daily Site Progress & Project Update</p>
        
        <div className={styles.carouselWrapper}>
          <button className={`${styles.navButton} ${styles.prev}`} onClick={handlePrev} aria-label="Previous Reel">
            <ChevronLeft size={28} color="#333" />
          </button>

          <div className={styles.carousel}>
            {reelsData.map((reel, index) => (
              <div key={reel.id} className={`${styles.reelCard} ${getPositionClass(index)}`}>
                <div className={styles.reelHeader}>
                  <div className={styles.profileInfo}>
                    <div className={styles.profilePic}></div>
                    <div className={styles.profileText}>
                      <span className={styles.username}>samruddhi_constructions</span>
                      <span className={styles.audio}>Original audio</span>
                    </div>
                  </div>
                  <button className={styles.viewProfileBtn}>View profile</button>
                </div>
                
                <div className={styles.reelVideo} style={{ backgroundImage: `url(${reel.image})` }}>
                  <div className={styles.videoOverlay}>
                    <h3 className={styles.videoTitle}>{reel.title}</h3>
                    <div className={styles.playButton}>
                      <Play size={36} fill="#fff" color="#fff" />
                    </div>
                    <p className={styles.watchText}>Watch on Instagram</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navButton} ${styles.next}`} onClick={handleNext} aria-label="Next Reel">
            <ChevronRight size={28} color="#333" />
          </button>
        </div>
      </div>
    </section>
  );
}
