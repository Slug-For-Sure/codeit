"use client";

import { useState, useEffect } from "react";
import { addToCart, fetchAllCourse } from "@/lib/api";
import { toast } from "sonner";
import { CourseCarousel } from "@/components/course-carousel";
import { HeroCarousel } from "@/components/hero-carousel";
import { Course } from "@/types";
import { useNavigate } from "react-router-dom";
import { LazyMotion,domAnimation } from "motion/react";
import { motion } from "motion/react";
import { Code2, Users, Briefcase, Building2, Award, Rocket } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchAllCourse();
        setCourses(data?.data?.data);
        setLoading(false);
      } catch (error) {
          setLoading(false);
        toast.error("Failed to fetch courses. Please try again.");
      }
    };
    loadCourses();
  }, []);

  const handleAddToCart = async (courseId: string) => {
    try {
      const response = await addToCart(courseId);
      if (!response) {
        toast.error("Failed to add course to cart. Please try again.");
        return;
      }
      toast.success(response.data.message, 
        {
          action: {
            label: 'Go to Cart',
            onClick: () => {
              navigate('/cart');
            },
            actionButtonStyle: {
              backgroundColor: '#2dd4bf',
              color:'#0c3835',
            },
          },
          duration: 5000,
        }
        );
    } catch (error) {
      console.error("Error adding course to cart:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to add course to cart. Please try again."
      );
    }
  };

  const handleAddToWishlist = (courseId: string) => {
    console.log("Adding to wishlist:", courseId);
    toast.success("Course added to wishlist");
    // Add your wishlist logic here
  };

  // Function to get random courses
  const getRandomCourses = (count: number) => {
    const shuffled = [...courses].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Function to get top-rated courses
  const getTopRatedCourses = (count: number) => {
    return [...courses]
      .sort((a, b) => b.averageRating - a.averageRating)
      .slice(0, count);
  };
  

  return (
    <>
    <LazyMotion features={domAnimation}>

      <div className="space-y-12 p-6">
        <HeroCarousel loading={loading} items={getTopRatedCourses(5)} />
        {/* <CourseCarousel
          title="Recommended for you"
          courses={getRandomCourses(10).map((course) => ({
            ...course,
            onAddToCart: () => handleAddToCart(course._id),
            onAddToWishlist: () => handleAddToWishlist(course._id),
          }))}
          loading={loading}
        />
        <CourseCarousel
          title="Top Rated Courses"
          courses={getTopRatedCourses(10).map((course) => ({
            ...course,
            onAddToCart: () => handleAddToCart(course._id),
            onAddToWishlist: () => handleAddToWishlist(course._id),
          }))}
          loading={loading}
        /> */}
        {/* <CourseCarousel
          title="All Courses"
          courses={courses.map((course) => ({
            ...course,
            onAddToCart: () => handleAddToCart(course._id),
            onAddToWishlist: () => handleAddToWishlist(course._id),
          }))}
          loading={loading}
        /> */}

      <section className="space-y-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Why Choose CODEIT?</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Experience a revolutionary learning approach designed by industry experts for real-world success</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Interactive & Practical Learning */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/80 hover:border-gray-700 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-xl">
                <Code2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Interactive Learning</h3>
              <ul className="text-gray-300 space-y-2.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">•</span> Live Sessions with Industry Experts</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">•</span> Hands-On Demos & Projects</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 font-bold">•</span> Real Portfolio Development</li>
              </ul>
            </div>
          </motion.div>

          {/* Personalized Mentorship */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/80 hover:border-gray-700 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="mb-6 inline-flex p-3 bg-purple-500/10 rounded-xl">
                <Users className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Mentorship</h3>
              <ul className="text-gray-300 space-y-2.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-purple-400 font-bold">•</span> 1:1 Doubt Clearing Sessions</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 font-bold">•</span> Mock Interviews & Feedback</li>
                <li className="flex items-start gap-2"><span className="text-purple-400 font-bold">•</span> Post-Course Support & Guidance</li>
              </ul>
            </div>
          </motion.div>

          {/* Career Growth */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/80 hover:border-gray-700 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="mb-6 inline-flex p-3 bg-yellow-500/10 rounded-xl">
                <Briefcase className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Career Growth</h3>
              <ul className="text-gray-300 space-y-2.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">•</span> Resume & LinkedIn Optimization</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">•</span> Internship & Job Placement Support</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">•</span> Network & Company Referrals</li>
              </ul>
            </div>
          </motion.div>

          {/* Microsoft Experience */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/80 hover:border-gray-700 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="mb-6 inline-flex p-3 bg-pink-500/10 rounded-xl">
                <Building2 className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Microsoft Experience</h3>
              <ul className="text-gray-300 space-y-2.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-pink-400 font-bold">•</span> 3-Week Immersive Bootcamp</li>
                <li className="flex items-start gap-2"><span className="text-pink-400 font-bold">•</span> World-Class Learning Environment</li>
                <li className="flex items-start gap-2"><span className="text-pink-400 font-bold">•</span> Meals & Premium Swag Included</li>
              </ul>
            </div>
          </motion.div>

          {/* Certification & Rewards */}
          <motion.div 
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-800/80 hover:border-gray-700 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative">
              <div className="mb-6 inline-flex p-3 bg-green-500/10 rounded-xl">
                <Award className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certification & Rewards</h3>
              <ul className="text-gray-300 space-y-2.5 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-400 font-bold">•</span> Industry-Recognized Certificate</li>
                <li className="flex items-start gap-2"><span className="text-green-400 font-bold">•</span> First-Cohort Special Bonuses</li>
                <li className="flex items-start gap-2"><span className="text-green-400 font-bold">•</span> Exclusive Community Access</li>
              </ul>
            </div>
            
          
            
          </motion.div>

          {/* Price Card */}
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse"></div>
            <div className="relative">
              <div className="mb-6 inline-flex p-3 bg-blue-500/20 rounded-xl">
                <Rocket className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Complete Package</h3>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                ₹3,000 <span className="text-sm text-gray-400 font-normal line-through">₹10,000</span>
              </div>
              <p className="text-gray-300 text-sm">
                All premium features in one affordable package
              </p>
              <button onClick={isAuthenticated ? () => navigate("/course/overview",{
                state:{
                  courseId: courses[0]?._id,
                }
              }) : () => navigate("/login")} className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all">
                Enroll Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* About CODEIT Section */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-gray-800/80"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">CODEIT</span></h2>
                <p className="text-gray-300 mb-4">
                  CODEIT was founded in 2023 with a mission to transform tech education by creating a hands-on learning experience that bridges the gap between academic knowledge and industry requirements.
                </p>
                <p className="text-gray-300 mb-4">
                  Our team consists of industry veterans from Microsoft, Google, and Amazon who bring their real-world experience directly to our students. We believe in learning by doing, which is why all our courses are project-based with direct mentorship.
                </p>
                <p className="text-gray-300">
                  With over 500+ successful alumni now working at top tech companies, our commitment to excellence and student success is proven. Join our community and be part of the next generation of tech leaders.
                </p>
              </div>
              <div className="lg:w-1/2 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-5 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                    <div className="text-gray-400 text-sm">Alumni</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg p-5 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">15+</div>
                    <div className="text-gray-400 text-sm">Expert Instructors</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg p-5 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">95%</div>
                    <div className="text-gray-400 text-sm">Placement Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg p-5 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">30+</div>
                    <div className="text-gray-400 text-sm">Industry Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </LazyMotion>
    </>

  );
}
