import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
    title: 'Portfolio | PrimeCraft Interiors',
    description: 'Explore our stunning portfolio of residential and commercial interior design projects',
};

const projects = [
    {
        id: 1,
        title: 'Serene Sanctuary',
        category: 'Residential',
        description: 'Modern minimalist bedroom featuring ambient lighting and luxury finishes',
        image: '/images/portfolio_bedroom_modern_1768460762455.png',
    },
    {
        id: 2,
        title: 'Culinary Excellence',
        category: 'Residential',
        description: 'Sophisticated kitchen with marble countertops and gold accents',
        image: '/images/portfolio_kitchen_luxury_1768460782323.png',
    },
    {
        id: 3,
        title: 'Executive Suite',
        category: 'Commercial',
        description: 'Contemporary office space with dramatic lighting and premium finishes',
        image: '/images/portfolio_office_contemporary_1768460800246.png',
    },
    {
        id: 4,
        title: 'Urban Oasis',
        category: 'Residential',
        description: 'Luxury living room with floor-to-ceiling windows and sophisticated furnishings',
        image: '/images/hero_living_room_1768460746028.png',
    },
];

export default function Portfolio() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.label}>Our Work</span>
                        <h1 className={styles.title}>
                            Inspiring <span className="text-gradient">Spaces</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Explore our collection of thoughtfully designed interiors that blend beauty, functionality, and innovation
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className={`${styles.portfolio} section`}>
                <div className="container-wide">
                    <div className={styles.projectsGrid}>
                        {projects.map((project) => (
                            <div key={project.id} className={`${styles.projectCard} card`}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className={styles.image}
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.category}>{project.category}</span>
                                    </div>
                                </div>
                                <div className={styles.projectInfo}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
