import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero_living_room_1768460746028.png"
            alt="Luxury interior design showcase"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroText}>
            <div className={styles.heroLogo}>
              <Image
                src="/images/logo.png"
                alt="PrimeCraft Interiors Logo"
                width={250}
                height={250}
                priority
                className={styles.heroLogoImage}
              />
            </div>
            <h1 className={`${styles.heroTitle} animate-fadeIn`}>
              Transform Your Space Into
              <span className="text-gradient"> Extraordinary </span>
              Experiences
            </h1>
            <p className={`${styles.heroSubtitle} animate-fadeIn`}>
              END TO END INTERIORS WORK - We value your investments
            </p>
            <div className={`${styles.heroButtons} animate-fadeIn`}>
              <Button variant="primary" size="lg" href="/portfolio">
                View Portfolio
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.mouseScroll}></div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`${styles.featuredProjects} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Portfolio</span>
            <h2 className={styles.sectionTitle}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Explore our latest interior design masterpieces
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <div className={`${styles.projectCard} card`}>
              <div className={styles.projectImageWrapper}>
                <Image
                  src="/images/portfolio_bedroom_modern_1768460762455.png"
                  alt="Modern Bedroom Design"
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.projectCategory}>Residential</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Serene Sanctuary</h3>
                <p className={styles.projectDescription}>
                  Modern minimalist bedroom featuring ambient lighting and luxury finishes
                </p>
              </div>
            </div>

            <div className={`${styles.projectCard} card`}>
              <div className={styles.projectImageWrapper}>
                <Image
                  src="/images/portfolio_kitchen_luxury_1768460782323.png"
                  alt="Luxury Kitchen Design"
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.projectCategory}>Residential</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Culinary Excellence</h3>
                <p className={styles.projectDescription}>
                  Sophisticated kitchen with marble countertops and gold accents
                </p>
              </div>
            </div>

            <div className={`${styles.projectCard} card`}>
              <div className={styles.projectImageWrapper}>
                <Image
                  src="/images/portfolio_office_contemporary_1768460800246.png"
                  alt="Contemporary Office Design"
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.projectCategory}>Commercial</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Executive Suite</h3>
                <p className={styles.projectDescription}>
                  Contemporary office space with dramatic lighting and premium finishes
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sectionCta}>
            <Button variant="primary" size="lg" href="/portfolio">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`${styles.services} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Do</span>
            <h2 className={styles.sectionTitle}>
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive interior design solutions tailored to your needs
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} glass`}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Residential Design</h3>
              <p className={styles.serviceDescription}>
                Create your dream home with personalized interior design solutions that reflect your style and lifestyle.
              </p>
            </div>

            <div className={`${styles.serviceCard} glass`}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Commercial Design</h3>
              <p className={styles.serviceDescription}>
                Transform your workspace into an inspiring environment that enhances productivity and brand identity.
              </p>
            </div>

            <div className={`${styles.serviceCard} glass`}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Renovation</h3>
              <p className={styles.serviceDescription}>
                Breathe new life into existing spaces with thoughtful renovations that maximize potential and value.
              </p>
            </div>

            <div className={`${styles.serviceCard} glass`}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>3D Visualization</h3>
              <p className={styles.serviceDescription}>
                See your vision come to life with photorealistic 3D renderings before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.testimonials} section-sm`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Client Reviews</span>
            <h2 className={styles.sectionTitle}>
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={`${styles.testimonialCard} glass-strong`}>
              <div className={styles.testimonialStars}>
                {'★'.repeat(5)}
              </div>
              <p className={styles.testimonialText}>
                "PrimeCraft Interiors transformed our home into a masterpiece. Their attention to detail and creative vision exceeded all expectations. Truly exceptional work!"
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Sarah Johnson</strong>
                <span>Manhattan Penthouse</span>
              </div>
            </div>

            <div className={`${styles.testimonialCard} glass-strong`}>
              <div className={styles.testimonialStars}>
                {'★'.repeat(5)}
              </div>
              <p className={styles.testimonialText}>
                "Working with PrimeCraft Interiors was an absolute pleasure. They listened to our needs and delivered a stunning office space that our team loves."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Michael Chen</strong>
                <span>Tech Startup CEO</span>
              </div>
            </div>

            <div className={`${styles.testimonialCard} glass-strong`}>
              <div className={styles.testimonialStars}>
                {'★'.repeat(5)}
              </div>
              <p className={styles.testimonialText}>
                "From concept to completion, PrimeCraft Interiors demonstrated professionalism and creativity. Our restaurant looks incredible and customers are impressed!"
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Emma Rodriguez</strong>
                <span>Restaurant Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.cta} section`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Space?
            </h2>
            <p className={styles.ctaSubtitle}>
              Let's create something extraordinary together. Get in touch for a free consultation.
            </p>
            <div className={styles.ctaButtons}>
              <Button variant="primary" size="lg" href="/contact">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" href="/about">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
