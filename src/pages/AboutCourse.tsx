import React from 'react';
import { Code2, Brain, Rocket, ArrowRight, Users, Briefcase, Building2, Award, Github, Calendar, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AboutCourse = () => {
  const benefits = [
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

  const weeklyContent = [
    {
      week: "Week 1",
      title: "Building Strong Foundations & Kicking Off the Capstone",
      description: "Establish core ML concepts and begin your journey with team formation and project planning.",
      sessions: [
        {
          number: 1,
          title: "🚀 Orientation + ML in Practice",
          content: "Program overview, expectations, intro to ML pipelines, ML project lifecycle, team formation for capstone"
        },
        {
          number: 2,
          title: "📊 Data Wrangling & Feature Engineering",
          content: "Handling real-world messy data (missing values, encoding, outliers), feature importance, correlation heatmaps"
        },
        {
          number: 3,
          title: "🧠 Supervised Learning Deep Dive",
          content: "Ensemble models (Random Forest, XGBoost), model evaluation (cross-val, confusion matrix, ROC, AUC)"
        }
      ],
      milestone: "Teams submit dataset + define problem statement"
    },
    {
      week: "Week 2",
      title: "Advanced Modeling, Tracking, and Deployment",
      description: "Learn experiment tracking, deep learning fundamentals, and how to deploy your models as web applications.",
      sessions: [
        {
          number: 4,
          title: "🔍 Model Selection & Experiment Tracking",
          content: "Scikit-learn pipelines, MLflow/Weights & Biases, overfitting/underfitting, early stopping, logging experiments"
        },
        {
          number: 5,
          title: "🔬 Intro to Deep Learning with PyTorch",
          content: "Neural nets vs classical ML, forward/backward propagation, building & training a NN using PyTorch"
        },
        {
          number: 6,
          title: "🧪 Model Deployment & Streamlit",
          content: "Streamlit app building, model serving basics (Pickle, FastAPI), GitHub repo structure for ML projects"
        }
      ],
      milestone: "Working prototype deployed (Streamlit/Gradio) + GitHub pushed"
    },
    {
      week: "Week 3",
      title: "Domain Application + Profile & Career Growth",
      description: "Specialize in a domain, showcase your project, and learn how to present yourself as an AI engineer.",
      sessions: [
        {
          number: 7,
          title: "🖼️ Choose Your Track (CV/NLP/Recommender)",
          content: "CV: CNN + Transfer Learning (ResNet)\nNLP: Text classification with Transformers (DistilBERT)\nReco: Collaborative filtering & hybrid systems"
        },
        {
          number: 8,
          title: "🧑‍🏫 Final Capstone Demos",
          content: "Live demos by teams, project showcase, industry feedback, scoring based on creativity, tech depth, and presentation"
        },
        {
          number: 9,
          title: "🌐 LinkedIn + GitHub + Personal Branding",
          content: "How to create standout LinkedIn profiles, writing engaging GitHub READMEs, resume tips, cold emailing, personal branding as an AI engineer"
        }
      ],
      milestone: "Top projects featured on CodeIt website + LinkedIn and Certificates issued to attendees"
    }
  ];

  const capstoneIdeas = [
    "Fake News Classifier (NLP)",
    "Credit Card Fraud Detection (Tabular)",
    "AI Skin Disease Detection (CV)",
    "Netflix-style Movie Recommender (Recommender Systems)"
  ];

  const extras = [
    "Recorded sessions",
    "Project templates + GitHub boilerplates",
    "Guest AMA with an industry AI engineer",
    "Certificate + LinkedIn shoutout for top teams"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Intermediate Track – 3 Weeks of Intensive Learning
          </p>
          
          {/* Course Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center bg-gray-800/40 rounded-full px-4 py-2">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              <span>3 Weeks</span>
            </div>
            <div className="flex items-center bg-gray-800/40 rounded-full px-4 py-2">
              <Users className="w-5 h-5 mr-2 text-purple-400" />
              <span>Online/Hybrid</span>
            </div>
            <div className="flex items-center bg-gray-800/40 rounded-full px-4 py-2">
              <Rocket className="w-5 h-5 mr-2 text-pink-400" />
              <span>9 Sessions</span>
            </div>
            <div className="flex items-center bg-gray-800/40 rounded-full px-4 py-2">
              <Award className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Certificate</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {
            benefits.map((benefit, index) => (
              <Card key={index} className='bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 transition-all'>
                <CardHeader className="pb-2">
                  {benefit.icon}
                  <CardTitle className='mt-4 text-lg'>{benefit.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))
          }
        </motion.div>

        {/* Weekly Curriculum */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Program Curriculum</h2>

          <Tabs defaultValue="week1" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="week1">Week 1</TabsTrigger>
              <TabsTrigger value="week2">Week 2</TabsTrigger>
              <TabsTrigger value="week3">Week 3</TabsTrigger>
            </TabsList>
            
            {weeklyContent.map((week, index) => (
              <TabsContent key={index} value={`week${index+1}`} className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-2xl font-bold mb-2">{week.title}</h3>
                  <p className="text-gray-400 mb-6">{week.description}</p>
                  
                  <div className="space-y-4">
                    {week.sessions.map((session) => (
                      <div key={session.number} className="bg-gray-800/50 rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-2">Session {session.number}: {session.title}</h4>
                        <p className="text-gray-400 text-sm">{session.content}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                    <h4 className="font-semibold flex items-center">
                      <Rocket className="w-5 h-5 mr-2 text-blue-400" />
                      Weekly Milestone
                    </h4>
                    <p className="text-blue-300 text-sm mt-1">{week.milestone}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
        
        {/* Capstone Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Capstone Project Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capstoneIdeas.map((idea, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all">
                <h3 className="font-semibold text-lg mb-2">{idea}</h3>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Extra Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">What You'll Get</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extras.map((extra, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{extra}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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

export default AboutCourse;
