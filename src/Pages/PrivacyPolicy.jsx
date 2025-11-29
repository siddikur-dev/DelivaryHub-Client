import React from 'react';
import { FaShieldAlt, FaEye, FaDatabase, FaLock, FaShare, FaTrash, FaUserCheck, FaBell, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 pt-15">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-accent max-w-2xl mx-auto">
                        Learn how we collect, use, and protect your personal information when you use our food delivery service.
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
                            <FaEye className="text-secondary" />
                            Introduction
                        </h2>
                        <p className="text-accent leading-relaxed">
                            At Delivery Hub, we are committed to protecting your privacy and ensuring the security of your personal information. 
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                            food delivery platform. By using our service, you consent to the data practices described in this policy.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaDatabase className="text-secondary" />
                            Information We Collect
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>We collect several types of information to provide and improve our service:</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-2">Personal Information</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Name, email address, and phone number</li>
                                        <li>Delivery address and location preferences</li>
                                        <li>Payment information (processed securely through partners)</li>
                                        <li>Profile information and preferences</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-2">Usage Information</h3>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Order history and food preferences</li>
                                        <li>Restaurant ratings and reviews</li>
                                        <li>App usage patterns and interactions</li>
                                        <li>Device information and IP address</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                        <div className="space-y-4 text-accent">
                            <p>We use the collected information for the following purposes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Process and fulfill your food orders</li>
                                <li>Provide real-time delivery tracking</li>
                                <li>Send order confirmations and updates</li>
                                <li>Personalize your experience and recommendations</li>
                                <li>Improve our service and develop new features</li>
                                <li>Communicate with you about promotions and updates</li>
                                <li>Ensure platform security and prevent fraud</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>
                    </section>

                    {/* Location Services */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaMapMarkerAlt className="text-secondary" />
                            Location Services
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                To provide accurate delivery services, we may collect and use location information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Your delivery address for order fulfillment</li>
                                <li>Real-time location for delivery tracking</li>
                                <li>Nearby restaurant recommendations</li>
                                <li>Delivery time estimates based on distance</li>
                                <li>Service area verification</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                You can control location permissions through your device settings and can disable location sharing at any time.
                            </p>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaShare className="text-secondary" />
                            Information Sharing
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>We may share your information in the following circumstances:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Restaurants:</strong> Order details for food preparation</li>
                                <li><strong>Delivery Partners:</strong> Delivery information and contact details</li>
                                <li><strong>Payment Processors:</strong> Payment information for transaction processing</li>
                                <li><strong>Service Providers:</strong> Analytics, customer support, and technical services</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                            </p>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaLock className="text-secondary" />
                            Data Security
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>We implement comprehensive security measures to protect your information:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Secure payment processing through certified partners</li>
                                <li>Regular security audits and vulnerability assessments</li>
                                <li>Access controls and employee training</li>
                                <li>Secure data centers with physical security measures</li>
                                <li>Incident response and breach notification procedures</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaTrash className="text-secondary" />
                            Data Retention
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>We retain your information for as long as necessary to:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide our services and maintain your account</li>
                                <li>Comply with legal and regulatory requirements</li>
                                <li>Resolve disputes and enforce agreements</li>
                                <li>Improve our services and develop new features</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                You can request deletion of your account and associated data at any time through your account settings.
                            </p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaUserCheck className="text-secondary" />
                            Your Rights
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>You have the following rights regarding your personal information:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Access:</strong> Request a copy of your personal data</li>
                                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                                <li><strong>Restriction:</strong> Limit how we use your information</li>
                                <li><strong>Objection:</strong> Object to certain processing activities</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                To exercise these rights, contact us through the information provided below.
                            </p>
                        </div>
                    </section>

                    {/* Cookies and Tracking */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking</h2>
                        <div className="space-y-4 text-accent">
                            <p>We use cookies and similar technologies to enhance your experience:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                                <li><strong>Performance Cookies:</strong> Help us understand how you use our service</li>
                                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                                <li><strong>Analytics Cookies:</strong> Provide insights into service usage</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                You can manage cookie preferences through your browser settings or our cookie consent manager.
                            </p>
                        </div>
                    </section>

                    {/* Analytics and Improvements */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaChartLine className="text-secondary" />
                            Analytics and Service Improvements
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>We use analytics to improve our service:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Analyze order patterns and popular food items</li>
                                <li>Optimize delivery routes and restaurant partnerships</li>
                                <li>Improve app performance and user experience</li>
                                <li>Develop new features based on user behavior</li>
                                <li>Monitor service quality and customer satisfaction</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                Analytics data is aggregated and anonymized to protect your privacy.
                            </p>
                        </div>
                    </section>

                    {/* Marketing Communications */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                            <FaBell className="text-secondary" />
                            Marketing Communications
                        </h2>
                        <div className="space-y-4 text-accent">
                            <p>We may send you marketing communications about:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>New restaurant partnerships and menu items</li>
                                <li>Special promotions and discounts</li>
                                <li>Service updates and new features</li>
                                <li>Customer surveys and feedback requests</li>
                            </ul>
                            <p className="text-sm text-secondary mt-3">
                                You can opt out of marketing communications at any time through your account settings or by clicking 
                                the unsubscribe link in our emails.
                            </p>
                        </div>
                    </section>

                    {/* Children's Privacy */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Children's Privacy</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                Our service is not intended for children under 13 years of age. We do not knowingly collect 
                                personal information from children under 13. If you are a parent or guardian and believe your 
                                child has provided us with personal information, please contact us immediately.
                            </p>
                        </div>
                    </section>

                    {/* International Transfers */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">International Data Transfers</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                Your information may be transferred to and processed in countries other than your own. 
                                We ensure that such transfers comply with applicable data protection laws and implement 
                                appropriate safeguards to protect your information.
                            </p>
                        </div>
                    </section>

                    {/* Changes to Privacy Policy */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Privacy Policy</h2>
                        <div className="space-y-4 text-accent">
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                                by posting the new policy on this page and updating the "Last updated" date. We encourage you to 
                                review this policy periodically to stay informed about how we protect your information.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                        <div className="space-y-4 text-accent">
                            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                            <div className="bg-primary/5 rounded-lg p-4">
                                <p className="font-medium">Delivery Hub Privacy Team</p>
                                <p>Email: privacy@Delivery Hub.com</p>
                                <p>Phone: +1 (555) 123-4567</p>
                                <p>Address: 123 Food Street, Cuisine City, FC 12345</p>
                                <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                            </div>
                        </div>
                    </section>

                    {/* Acceptance */}
                    <section className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-6 border border-secondary/20">
                        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Your Privacy Matters</h2>
                        <div className="text-center text-accent">
                            <p className="mb-4">
                                We are committed to protecting your privacy and being transparent about how we handle your information. 
                                Thank you for trusting Delivery Hub with your personal data.
                            </p>
                            <div className="bg-base-100 rounded-lg p-4 inline-block">
                                <p className="font-semibold text-primary">
                                    🔒 Your privacy is our priority! 🔒
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;