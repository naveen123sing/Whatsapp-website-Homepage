import styles from "./animated-background.module.css";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className={`${styles.orbit} ${styles.orbitGreen}`}></div>
      <div className={`${styles.orbit} ${styles.orbitBlue}`}></div>
      <div className={styles.particles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
