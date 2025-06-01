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
export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchAllCourse();
        console.log(data);
        setCourses(data?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Interactive & Practical Learning */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="mb-6">
            <Code2 className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Interactive & Practical Learning
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Live Sessions with Industry Experts</li>
            <li>• Hands-On Demos & Projects</li>
            <li>• Real Portfolio Projects</li>
          </ul>
        </motion.div>

        {/* Personalized Mentorship */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="mb-6">
            <Users className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Personalized Mentorship
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li>• 1:1 Doubt Clearing Sessions</li>
            <li>• Mock Interviews</li>
            <li>• Post-Course Support</li>
          </ul>
        </motion.div>

        {/* Career Growth */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="mb-6">
            <Briefcase className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Career Growth
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Resume & LinkedIn Building</li>
            <li>• Internship Guidance</li>
            <li>• Company Referrals</li>
          </ul>
        </motion.div>

        {/* Microsoft Experience */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="mb-6">
            <Building2 className="w-8 h-8 text-pink-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Microsoft Experience
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li>• 3-Week Offline Bootcamp</li>
            <li>• Premium Environment</li>
            <li>• Meals & Swags Included</li>
          </ul>
        </motion.div>

        {/* Certification & Rewards */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="mb-6">
            <Award className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Certification & Rewards
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li>• Certificate of Completion</li>
            <li>• First-Cohort Bonus</li>
            <li>• Exclusive Rewards</li>
          </ul>
        </motion.div>

        {/* Price Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all"
        >
          <div className="mb-6">
            <Rocket className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Complete Package
          </h3>
          <div className="text-3xl font-bold text-white mb-4">
            Just ₹5000
          </div>
          <p className="text-gray-400">
            All features included in one affordable package
          </p>
        </motion.div>
      </div>
      </div>
    </LazyMotion>
    </>

  );
}
