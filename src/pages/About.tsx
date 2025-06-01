import React from 'react';
import { Code2, Brain, Rocket, ArrowRight, Users, Briefcase, Building2, Award, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Advanced ML & AI Training",
      description: "3-week intensive program with 9 sessions covering ML pipelines, deep learning, and practical deployment."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Hands-on Capstone Project",
      description: "Build and deploy a real ML product with GitHub integration, from data wrangling to model deployment."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: "Career Development",
      description: "LinkedIn profile optimization, GitHub portfolio building, and industry networking opportunities."
    },
    {
      icon: <Github className="w-8 h-8 text-pink-400" />,
      title: "Project Showcase",
      description: "Top projects featured on CodeIt website and LinkedIn, with guest AMA sessions with industry experts."
    },
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: "Comprehensive Resources",
      description: "Recorded sessions, project templates, GitHub boilerplates, and certificates for successful completion."
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
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">
            CodeIt AI/ML Summer Training
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Intermediate Track – 3 Weeks of Intensive Learning
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to advance your AI/ML skills?
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
