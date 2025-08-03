import styles from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Collect Feedback Easily & Effectively
        </h1>
        <p className={styles.subheading}>
          FeedbackHub helps you create, share, and analyze feedback forms in minutes.
        </p>
        <Link href="/signup" className={styles.ctaButton}>
          Get Started
        </Link>
      </div>
      <div className={styles.right}>
        <img src="/image.png" alt="Feedback Visual" className={styles.heroImage} />
      </div>
    </section>
  );
}
