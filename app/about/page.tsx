import type { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About Us | PrimeCraft Interiors',
    description: 'Learn about PrimeCraft Interiors, an award-winning interior design studio dedicated to creating extraordinary spaces',
};

export default function About() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.label}>About Us</span>
                        <h1 className={styles.title}>
                            Crafting <span className="text-gradient">Extraordinary</span> Spaces
                        </h1>
                        <p className={styles.subtitle}>
                            Since 2010, we've been transforming visions into reality through innovative design and meticulous attention to detail
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={`${styles.story} section`}>
                <div className="container">
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>Our Story</h2>
                            <p className={styles.paragraph}>
                                PrimeCraft Interiors was founded with a simple yet powerful vision: to create spaces that inspire, delight, and transform lives. Our journey began over a decade ago, driven by a passion for design excellence and a commitment to exceeding client expectations.
                            </p>
                            <p className={styles.paragraph}>
                                Today, we're proud to be recognized as one of the leading interior design studios, having completed hundreds of projects ranging from intimate residential spaces to large-scale commercial developments. Every project we undertake reflects our core values of innovation, sustainability, and timeless elegance.
                            </p>
                            <p className={styles.paragraph}>
                                Our multidisciplinary team brings together diverse perspectives and expertise, enabling us to approach each project with fresh eyes and creative solutions. We believe that great design is about more than aesthetics—it's about creating environments that enhance the way people live, work, and connect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={`${styles.values} section`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            Our <span className="text-gradient">Values</span>
                        </h2>
                    </div>

                    <div className={styles.valuesGrid}>
                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.valueIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Excellence</h3>
                            <p className={styles.valueDescription}>
                                We pursue perfection in every detail, from initial concept to final installation.
                            </p>
                        </div>

                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.valueIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Innovation</h3>
                            <p className={styles.valueDescription}>
                                We embrace cutting-edge design trends and technologies to deliver exceptional results.
                            </p>
                        </div>

                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.valueIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Collaboration</h3>
                            <p className={styles.valueDescription}>
                                We work closely with clients to ensure their vision is realized beyond expectations.
                            </p>
                        </div>

                        <div className={`${styles.valueCard} glass`}>
                            <div className={styles.valueIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3 className={styles.valueTitle}>Sustainability</h3>
                            <p className={styles.valueDescription}>
                                We prioritize eco-friendly materials and practices in all our design solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={`${styles.stats} section-sm`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Projects Completed</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>14+</div>
                            <div className={styles.statLabel}>Years of Excellence</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>25+</div>
                            <div className={styles.statLabel}>Design Awards</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>98%</div>
                            <div className={styles.statLabel}>Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
