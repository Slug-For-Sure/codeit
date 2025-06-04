import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { LoginForm } from "@/components/auth/LoginForm";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import { InstructorDashboardLayout } from "./components/layout/InstructorDashboardLayout";
import InstructorDashboard from "./pages/InstructorDashboard";
import RootLayout from "./components/layout/RootLayout";
import MyLearning from "./pages/MyLearning";
import CourseOverview from "./components/course-overview";
import CartContents from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import CourseContent from "./pages/CourseContent";
import CourseManagement from "./pages/CourseManagement";
import CreateCourse from "./pages/CreateCourse";
import { CourseContentView } from "./components/tracks";
import TrackContent from "./pages/TrackContent";
import { SignupForm } from "./components/auth/SignupForm";
import { NotFound } from "./pages/NotFound";
import NProgress from "nprogress";
import { useEffect } from "react";
import "nprogress/nprogress.css";
import GridPattern from "./components/grid-pattern";
import About from "./pages/AboutCourse";
import PrivacyPolicy from "./pages/Policy/Privacypolicy";
import CancellationsRefunds from "./pages/Policy/CancellationsRefunds";
import TermsOfService from "./pages/Policy/TermsOfServic";
import Contact from "./pages/Policy/Contact";
function App() {
  const { theme } = useTheme();

  return (
    <>
      <RouteChangeHandler />
      <Routes>
        <Route path="/instructor" element={<InstructorDashboardLayout />}>
          <Route index element={<InstructorDashboard />} />
          <Route path="courses" element={<CourseManagement />} />
          <Route path="course/:courseId" element={<CourseManagement />} />
          <Route path="create-course" element={<CreateCourse />} />
        </Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="/course/player" element={<CourseContentView />} />
          <Route index element={<Dashboard />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<SignupForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-learning" element={<MyLearning />} />
          <Route path="my-learning/:category" element={<MyLearning />} />
          <Route
            path="course/overview/:courseId"
            element={<CourseOverview />}
          />
          <Route path="courses/:category" element={<CategoryPage />} />
          <Route path="cart" element={<CartContents />} />
          <Route
            path="my-learning/course/:courseId"
            element={<CourseContent />}
          />
          <Route
            path="my-learning/course/track/:trackId"
            element={<TrackContent />}
          />
          <Route path="about-course" element={<About />} />
           <Route path="privacy-policy" element={<PrivacyPolicy />} />
           <Route path="cancellations-refunds" element={<CancellationsRefunds />} />
           <Route path="terms-of-service" element={<TermsOfService />} />
           <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        <Route
          path="grid"
          element={
            <div className="dark:bg-[#010807] bg-[rgba(187,225,219,0.44)] h-[200vh] pt-12">
              <GridPattern />
            </div>
          }
          />
        </Route>
       
      </Routes>
      <Toaster
        closeButton
        position="bottom-right"
        richColors
        theme={theme as "light" | "dark"}
      />
    </>
  );
}

const RouteChangeHandler = () => {
  const location = useLocation();
  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    },100);
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);

  return null;
};

export default App;
