import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Recipes } from "./pages/Recipes";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Farms } from "./pages/Farms";
import { Community } from "./pages/Community";
import { NotFound } from "./pages/NotFound";
import { initAnalytics, trackPageview } from "./lib/analytics";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/recettes" element={<Recipes />} />
        <Route path="/recettes/:slug" element={<RecipeDetail />} />
        <Route path="/fermes" element={<Farms />} />
        <Route path="/communaute" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
