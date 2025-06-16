"use client";

import { Clock, Globe, Play, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchCourse } from "@/lib/api";
import { useEffect, useState } from "react";
import { Course } from "@/types";
import MinimalLoaderComponent from "./ui/minimal-loader";
import { useCart } from "@/contexts/cart-context";

export default function CourseOverview() {
  const { courseId } = useParams<{ courseId: string }>();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<Course>();
  const { handleAddToCart } = useCart(); // Access `addToCart` from CartContext

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page on component mount
    const loadCourse = async () => {
      try {
        const response = await fetchCourse(courseId);
        if (response.data.success) {
          setCourse(response.data.data);
        } else {
          setCourse(undefined); // Set course to undefined if not found
          return;
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };
    loadCourse();
  }, [courseId]);
console.log(course);

  // const handleAddToCart = async (courseId: string) => {
  //   try {
  //     const response = await addToCart(courseId);
  //     if (!response) {
  //       toast.error("Failed to add course to cart. Please try again.");
  //       return;
  //     }
  //     toast.success(response.data.message, {
  //       action: {
  //         label: "Go to Cart",
  //         onClick: () => {
  //           navigate("/cart");
  //         },
  //         actionButtonStyle: {
  //           backgroundColor: "#2dd4bf",
  //           color: "#0c3835",
  //         },
  //       },
  //       duration: 5000,
  //     });
  //   } catch (error) {
  //     console.error("Error adding course to cart:", error);
  //     toast.error(
  //       error.response?.data?.message ||
  //         "Failed to add course to cart. Please try again."
  //     );
  //   }
  // };

  if (loading) {
    return (
      <>
        <div className="min-h-[80vh] bg-background  flex justify-center items-center mx-auto px-4">
          <MinimalLoaderComponent />
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Course Content */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
              <p className="text-xl text-muted-foreground">
                {course.description}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{course.averageRating}</span>
                <Link
                  to="#reviews"
                  className="text-muted-foreground hover:text-primary"
                >
                  {/* ({course.reviews.length} ratings) */}
                </Link>
              </div>
              {/* <div className="text-muted-foreground">
                {course.studentsEnrolled.length} learners
              </div> */}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Last updated {course.updatedAt.split("T")[0]}
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                English
              </div>
            </div>

            <Card className="aspect-video relative overflow-hidden">
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-cover bg-center "
                style={{ backgroundImage: `url(${course.thumbnail})` }}
              >
                <Button size="lg" variant="secondary" className="gap-2">
                  <Play className="h-6 w-6" />
                  Preview this course
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What you'll learn</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                {course.learningObjectives && course.learningObjectives.map((item, index) => {
                  // Check if item is a string (heading)
                  if (typeof item === 'string') {
                  return (
                    <li key={index} className="col-span-2 font-semibold text-lg mt-2">
                    {item}
                    </li>
                  );
                  }
                  // Check if item is an array (simple list of objectives)
                  else if (Array.isArray(item)) {
                  return item.map((objective, objIndex) => (
                    <li key={`${index}-${objIndex}`} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>{objective}</span>
                    </li>
                  ));
                  }
                  // Check if item is an object (categorized objectives)
                  else if (typeof item === 'object') {
                  return Object.entries(item).map(([category, objectives], catIndex) => (
                    <div key={`${index}-${catIndex}`}>
                    <li className="col-span-2 font-medium text-base mt-1">{category}:</li>
                    {Array.isArray(objectives) && objectives.map((objective, objIndex) => (
                      <li key={`${index}-${catIndex}-${objIndex}`} className="flex items-start gap-2 ml-4">
                      <Star className="h-4 w-4 text-primary" />
                      <span>{objective}</span>
                      </li>
                    ))}
                    </div>
                  ));
                  }
                  return null;
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Explore related topics</h2>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <Badge variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="personal" className="flex-1">
                      Personal
                    </TabsTrigger>
                    <TabsTrigger value="teams" className="flex-1">
                      Teams
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="text-sm">
                        This Premium course is included in plans
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        ₹{course.price}
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-red-600">
                      <Clock className="h-4 w-4" />
                      <span>3 hours</span>
                      left at this price!
                    </div> */}
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAddToCart(course._id)}
                        className="flex-1"
                      >
                        Add to cart
                      </Button>
                      <Button variant="outline" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </Button>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      30-Day Money-Back Guarantee
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Full Lifetime Access
                    </div>
                    {/* <div className="flex justify-between text-sm">
                      <Button variant="link" className="p-0">
                        Share
                      </Button>
                      <Button variant="link" className="p-0">
                        Gift this course
                      </Button>
                      <Button variant="link" className="p-0">
                        Apply Coupon
                      </Button>
                    </div> */}
                  </TabsContent>
                  <TabsContent value="teams" className="space-y-4">
                    <div className="text-center text-muted-foreground">
                      Contact sales for team pricing
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
