import React, { useState } from "react";
import Hero from "../components/Hero";
// import Category from "../components/Category";
import RecentProduct from "../components/RecentProduct";
import Skeletons, { HomeSkeleton } from "../utilitty/Skeleton";
import useLoadingTimer from "../utilitty/useLoadingTimer";
import Testimonials from "../components/Testimonials";
import Policy from "../components/Policy";
import BlogHighlights from "../components/BlogHighlights";
import CategoriesOverview from "../components/CategoriesOverview";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useLoadingTimer(setLoading, 1200);

  if (loading) return <Skeletons type="home" />;

  return (
    <div className="container my-20 py-4">
      <Hero />
      {/* <Category /> */}
      <CategoriesOverview/>
      <RecentProduct />
      <Testimonials />
      <Policy />
      <BlogHighlights />
    </div>
  );
};

export default Home;
