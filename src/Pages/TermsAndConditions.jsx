import React from 'react';
import { FaShieldAlt, FaUtensils, FaCreditCard, FaTruck, FaUserShield, FaExclamationTriangle } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 pt-15">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-accent max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using our food delivery service.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-secondary">
                        <FaShieldAlt className="text-2xl" />
                        <span className="text-sm font-medium">Last updated: {new Date().toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaUtensils className="text-secondary" />
                            Introduction
                        </h2>
                        <p className="text-accent leading-relaxed">
                            Welcome to Delivery Hub! These Terms and Conditions govern your use of our food delivery platform. 
                            By accessing or using our service, you agree to be bound by these terms. If you disagree with 
                            any part of these terms, please do not use our service.
                        </p>
                    </section>

                    {/* Service Description */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Service Description</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                Delivery Hub is a food delivery platform that connects customers with local restaurants and food vendors. 
                                Our service allows you to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Browse and order food from participating restaurants</li>
                                <li>Schedule delivery times</li>
                                <li>Track your orders in real-time</li>
                                <li>Make secure payments through our platform</li>
                                <li>Access customer support and order history</li>
                            </ul>
                        </div>
                    </section>

                    {/* User Accounts */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaUserShield className="text-secondary" />
                            User Accounts
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>To use our service, you must:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Be at least 18 years old or have parental consent</li>
                                <li>Provide accurate and complete information</li>
                                <li>Maintain the security of your account credentials</li>
                                <li>Notify us immediately of any unauthorized use</li>
                                <li>Accept responsibility for all activities under your account</li>
                            </ul>
                        </div>
                    </section>

                    {/* Ordering & Payment */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaCreditCard className="text-secondary" />
                            Ordering & Payment
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>When placing orders through Delivery Hub:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>All prices are displayed in local currency and include applicable taxes</li>
                                <li>Payment is processed securely through our payment partners</li>
                                <li>Orders are confirmed upon successful payment</li>
                                <li>Delivery fees may apply based on distance and restaurant location</li>
                                <li>Refunds are processed according to our refund policy</li>
                            </ul>
                        </div>
                    </section>

                    {/* Delivery Terms */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaTruck className="text-secondary" />
                            Delivery Terms
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>Delivery service is subject to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Restaurant operating hours and availability</li>
                                <li>Weather conditions and traffic situations</li>
                                <li>Delivery area restrictions</li>
                                <li>Minimum order requirements</li>
                                <li>Delivery time estimates (not guaranteed)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Food Safety & Quality */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Food Safety & Quality</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                While we strive to ensure food quality and safety:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Food preparation is the responsibility of participating restaurants</li>
                                <li>We recommend checking food upon delivery</li>
                                <li>Report any quality issues within 30 minutes of delivery</li>
                                <li>We are not liable for food-borne illnesses or allergies</li>
                                <li>Always check ingredient lists for dietary restrictions</li>
                            </ul>
                        </div>
                    </section>

                    {/* Prohibited Activities */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaExclamationTriangle className="text-secondary" />
                            Prohibited Activities
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>Users are prohibited from:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Using the service for illegal purposes</li>
                                <li>Harassing delivery personnel or restaurant staff</li>
                                <li>Attempting to defraud the platform</li>
                                <li>Sharing account credentials with others</li>
                                <li>Placing orders with false information</li>
                            </ul>
                        </div>
                    </section>

                    {/* Privacy & Data */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Privacy & Data Protection</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                Your privacy is important to us. We collect and process personal data in accordance with our 
                                Privacy Policy. By using our service, you consent to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Collection of order and delivery information</li>
                                <li>Processing of payment data through secure channels</li>
                                <li>Use of location data for delivery purposes</li>
                                <li>Communication regarding your orders and account</li>
                                <li>Analytics to improve our service quality</li>
                            </ul>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                Delivery Hub's liability is limited to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Direct damages up to the amount paid for the specific order</li>
                                <li>Service-related issues within our reasonable control</li>
                                <li>Technical problems with our platform</li>
                                <li>We are not liable for indirect, incidental, or consequential damages</li>
                                <li>Restaurant food quality issues are the restaurant's responsibility</li>
                            </ul>
                        </div>
                    </section>

                    {/* Changes to Terms */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Changes to Terms</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                                upon posting. Continued use of our service constitutes acceptance of modified terms. 
                                We will notify users of significant changes via email or platform notifications.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
                        <div className="space-y-4 text-accent">
                            <p>For questions about these terms, please contact us:</p>
                            <div className="bg-primary/5 rounded-lg p-4">
                                <p className="font-medium">Delivery Hub Support Team</p>
                                <p>Email: support@Delivery Hub.com</p>
                                <p>Phone: +1 (555) 123-4567</p>
                                <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                            </div>
                        </div>
                    </section>

                    {/* Acceptance */}
                    <section className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-6 border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Acceptance of Terms</h2>
                        <div className="text-center text-accent">
                            <p className="mb-4">
                                By using Delivery Hub's services, you acknowledge that you have read, understood, and agree to be 
                                bound by these Terms and Conditions.
                            </p>
                            <div className="bg-base-100 rounded-lg p-4 inline-block">
                                <p className="font-semibold text-primary">
                                    🍽️ Thank you for choosing Delivery Hub! 🍽️
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;