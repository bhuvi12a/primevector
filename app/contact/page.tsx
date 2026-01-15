'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Button from '@/components/Button';
import styles from './contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.label}>Get In Touch</span>
                        <h1 className={styles.title}>
                            Let's Create Something <span className="text-gradient">Amazing</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Ready to transform your space? Reach out for a free consultation
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`${styles.contact} section`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <h2 className={styles.formTitle}>Send us a message</h2>

                            {status === 'success' && (
                                <div className={styles.successMessage}>
                                    ✓ Thank you! We'll get back to you within 24 hours.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone" className={styles.label}>Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="+91 84288 85418"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="projectType" className={styles.label}>Project Type *</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className={styles.select}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Design</option>
                                        <option value="commercial">Commercial Design</option>
                                        <option value="renovation">Renovation</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="3d">3D Visualization</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={styles.textarea}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <div className={`${styles.infoCard} glass-strong`}>
                                <div className={styles.infoIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <h3 className={styles.infoTitle}>Visit Us</h3>
                                <p className={styles.infoText}>
                                    Bagalur Road<br />
                                    Hosur<br />
                                    Tamil Nadu, India
                                </p>
                            </div>

                            <div className={`${styles.infoCard} glass-strong`}>
                                <div className={styles.infoIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <h3 className={styles.infoTitle}>Email Us</h3>
                                <p className={styles.infoText}>
                                    <a href="mailto:primecraft.interiors2025@gmail.com">primecraft.interiors2025@gmail.com</a>
                                </p>
                            </div>

                            <div className={`${styles.infoCard} glass-strong`}>
                                <div className={styles.infoIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <h3 className={styles.infoTitle}>Call Us</h3>
                                <p className={styles.infoText}>
                                    <a href="tel:+918428885418">+91 84288 85418</a>
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.infoCard} glass-strong`}>
                            <div className={styles.infoIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className={styles.infoTitle}>Business Hours</h3>
                            <p className={styles.infoText}>
                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                Saturday: 10:00 AM - 4:00 PM<br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
