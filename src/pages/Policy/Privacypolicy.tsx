import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="mb-12">
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </motion.button>
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400"
                        >
                            Last updated: April 5, 2024
                        </motion.p>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="prose prose-invert max-w-none"
                    >
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="text-gray-300 mb-6">
                                At CODEIT, we take your privacy seriously. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you use our e-learning platform and
                                related services.
                            </p>

                            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                            <p className="text-gray-300 mb-4">We collect several types of information from and about users of our Services:</p>
                            <ul className="list-disc pl-6 text-gray-300 mb-6">
                                <li>Personal information (name, email, profile details)</li>
                                <li>Account credentials</li>
                                <li>Learning progress and course participation data</li>
                                <li>User-generated content (comments, submissions)</li>
                                <li>Device and browser information</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 text-gray-300 mb-6">
                                <li>Provide and personalize our learning services</li>
                                <li>Track your progress and issue certificates</li>
                                <li>Send you technical notices and support messages</li>
                                <li>Communicate with you about courses, features, and educational offers</li>
                                <li>Improve our educational content and platform</li>
                                <li>Detect and prevent fraud and abuse</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                            <p className="text-gray-300 mb-6">
                                We do not sell or rent your personal information to third parties. We may share your
                                information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-gray-300 mb-6">
                                <li>With your consent</li>
                                <li>To comply with legal obligations</li>
                                <li>With instructors for course-related purposes</li>
                                <li>With service providers who assist in our operations</li>
                                <li>In connection with academic research (anonymized data only)</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                            <p className="text-gray-300 mb-6">
                                We implement appropriate technical and organizational measures to protect your personal
                                information against unauthorized access, alteration, disclosure, or destruction. However,
                                no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>

                            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                            <p className="text-gray-300 mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 text-gray-300 mb-6">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your account and data</li>
                                <li>Download your learning history and content</li>
                                <li>Control your communication preferences</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
                            <p className="text-gray-300 mb-6">
                                We use cookies and similar tracking technologies to track activity on our platform and
                                improve the learning experience. These tools help us remember your preferences, analyze usage patterns,
                                and personalize content. You can manage your cookie preferences through your browser settings.
                            </p>

                            <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-300 mb-6">
                                Our Services are not intended for use by children under the age of 13. We do not
                                knowingly collect personal information from children under 13 without verifiable parental consent.
                            </p>

                            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                            <p className="text-gray-300 mb-6">
                                We may update our Privacy Policy from time to time. We will notify you of any significant changes by
                                posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>

                            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                            <p className="text-gray-300">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:aviral.lancer@gmail.com" className="text-blue-400 hover:text-blue-300">
                                aviral.lancer@gmail.com
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
    );
};

export default PrivacyPolicy;