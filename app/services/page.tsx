import type { Metadata } from 'next';
import styles from './services.module.css';

export const metadata: Metadata = {
    title: 'Services | PrimeCraft Interiors',
    description: 'END TO END INTERIORS WORK - False Ceiling, Fabrication, Wood Works, ACP Elevation, 3D & 2D light boards, Banners and Digital Marketing',
};

export default function Services() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.label}>What We Do</span>
                        <h1 className={styles.title}>
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className={styles.subtitle}>
                            END TO END INTERIORS WORK - We value your investments
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className={`${styles.services} section`}>
                <div className="container">
                    <div className={styles.servicesGrid}>
                        {/* False Ceiling */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>False Ceiling</h2>
                            <p className={styles.serviceDescription}>
                                Expert false ceiling installation with modern designs and premium materials for enhanced aesthetics and functionality.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>Gypsum false ceiling</li>
                                <li>POP ceiling designs</li>
                                <li>Grid ceiling systems</li>
                                <li>Decorative ceiling patterns</li>
                                <li>LED integration</li>
                            </ul>
                        </div>

                        {/* Fabrication */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>Fabrication</h2>
                            <p className={styles.serviceDescription}>
                                Custom fabrication services with precision craftsmanship for metal, glass, and composite materials.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>Metal fabrication</li>
                                <li>Glass partitions</li>
                                <li>Custom fixtures</li>
                                <li>Structural elements</li>
                                <li>Decorative metalwork</li>
                            </ul>
                        </div>

                        {/* Wood Works */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>Wood Works</h2>
                            <p className={styles.serviceDescription}>
                                Premium carpentry and woodwork solutions including custom furniture, paneling, and decorative elements.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>Custom furniture</li>
                                <li>Wood paneling</li>
                                <li>Modular wardrobes</li>
                                <li>Kitchen cabinets</li>
                                <li>Decorative woodwork</li>
                            </ul>
                        </div>

                        {/* ACP Elevation */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>ACP Elevation</h2>
                            <p className={styles.serviceDescription}>
                                Modern ACP (Aluminum Composite Panel) cladding for building exteriors and facades with durability and style.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>Exterior cladding</li>
                                <li>Facade design</li>
                                <li>Weather-resistant panels</li>
                                <li>Color customization</li>
                                <li>Professional installation</li>
                            </ul>
                        </div>

                        {/* 3D & 2D Light Boards */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>3D & 2D Light Boards</h2>
                            <p className={styles.serviceDescription}>
                                Eye-catching illuminated signage and light boards for businesses with 3D and 2D designs.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>3D letter boards</li>
                                <li>LED signage</li>
                                <li>Backlit displays</li>
                                <li>Acrylic light boxes</li>
                                <li>Custom designs</li>
                            </ul>
                        </div>

                        {/* Banners and Posters */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M7 7h10M7 12h10M7 17h6" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>Banners & Posters</h2>
                            <p className={styles.serviceDescription}>
                                High-quality printing services for promotional banners, posters, and advertising materials.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>Vinyl banners</li>
                                <li>Flex printing</li>
                                <li>Promotional posters</li>
                                <li>Event signage</li>
                                <li>Custom sizes</li>
                            </ul>
                        </div>

                        {/* Digital Marketing */}
                        <div className={`${styles.serviceCard} glass-strong`}>
                            <div className={styles.iconWrapper}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <path d="M8 21h8M12 17v4" />
                                </svg>
                            </div>
                            <h2 className={styles.serviceTitle}>Digital Marketing</h2>
                            <p className={styles.serviceDescription}>
                                Comprehensive digital marketing solutions to grow your business online and reach your target audience.
                            </p>
                            <ul className={styles.featuresList}>
                                <li>Social media marketing</li>
                                <li>Content creation</li>
                                <li>SEO optimization</li>
                                <li>Online advertising</li>
                                <li>Brand strategy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className={`${styles.process} section`}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className={styles.label}>How We Work</span>
                        <h2 className={styles.sectionTitle}>
                            Our <span className="text-gradient">Process</span>
                        </h2>
                        <p className={styles.slogan}>"We value your investments"</p>
                    </div>

                    <div className={styles.processSteps}>
                        {[
                            { number: '01', title: 'Consultation', description: 'We meet to understand your vision, needs, and budget' },
                            { number: '02', title: 'Design & Planning', description: 'We create detailed plans and material specifications' },
                            { number: '03', title: 'Execution', description: 'Our expert team brings your vision to life with precision' },
                            { number: '04', title: 'Quality Check', description: 'We ensure everything meets our high standards and your expectations' },
                        ].map((step, index) => (
                            <div key={index} className={styles.processStep}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
