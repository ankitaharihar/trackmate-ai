import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import AIAnalysis from "../components/landing/AIAnalysis";
import DashboardPreview from "../components/landing/DashboardPreview";

export default function Landing() {
  return (
    <main className="bg-[#020817] text-white">
      <Navbar />
      <Hero />
      <AIAnalysis />
      <DashboardPreview />
    </main>
  );
}