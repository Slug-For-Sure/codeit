import React from 'react';
import { Mail, MapPin, Twitter, Instagram, Linkedin, ArrowRight, ExternalLink, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:aviral.lancer@gmail.com ';
    };
    const socialLinks = [
        {
            name: 'Twitter',
            icon: <Twitter className="w-6 h-6" />,
            url: 'https://x.com/360parminder',
            color: 'hover:bg-blue-900/30 hover:border-blue-400'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-6 h-6" />,
            url: 'https://www.instagram.com/360_parminder/',
            color: 'hover:bg-pink-900/30 hover:border-pink-400'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-6 h-6" />,
            url: 'https://www.linkedin.com/in/parminder-singh-storm/',
            color: 'hover:bg-blue-800/30 hover:border-blue-500'
        }
    ];

    return (
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-400">
                            Get in touch for collaborations or inquiries
                        </p>
                    </motion.div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
                        >
                            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                            
                            {/* Email */}
                            <div className="flex items-start mb-8">
                                <div className="bg-gray-800/50 p-3 rounded-lg mr-4 border border-gray-700">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-gray-300 font-medium mb-2">Email</h3>
                                    <motion.button 
                                        onClick={handleEmailClick}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="text-blue-400 hover:text-blue-300 transition-colors text-left"
                                    >
                                        aviral.lancer@gmail.com 
                                    </motion.button>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start mb-8">
                                <div className="bg-gray-800/50 p-3 rounded-lg mr-4 border border-gray-700">
                                    <MapPin className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-gray-300 font-medium mb-2">Location</h3>
                                    <p className="text-gray-400">
                                        Alwar, Rajasthan<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            {/* Payment Support */}
                            <div className="flex items-start">
                                <div className="bg-gray-800/50 p-3 rounded-lg mr-4 border border-gray-700">
                                    <CreditCard className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-gray-300 font-medium mb-2">Payment Support</h3>
                                    <a 
                                        href="https://merchant.razorpay.com/policy/Pb5NdiUQ3s3IUU/contact_us" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                                    >
                                        Contact Razorpay Support <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
                        >
                            <h2 className="text-2xl font-bold text-white mb-8">Connect With Us</h2>
                            <div className="space-y-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 transition-all ${social.color}`}
                                    >
                                        <div className="mr-4">
                                            {social.icon}
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-gray-200 font-medium">{social.name}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
                    >
                        <h2 className="text-2xl font-bold text-white mb-8">Our Location</h2>
                        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-gray-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.999999999999!2d76.6!3d27.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e4c3c0c0c0c0%3A0x0!2zMjfCsDM0JzAwLjAiTiA3NsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-center mt-16"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Let's collaborate! Whether you have a question or want to discuss potential opportunities, I'd love to hear from you.
                        </p>
                        <motion.a
                            href="mailto:360.parminder@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Send me an email
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
     
    );
};

export default Contact;