import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/DashboardPreview.tsx";

export default function Landing() {
  return (
    <main className="bg-[#020817] text-white">
      <Navbar />

      <Hero />

      <HowItWorks />

      <DashboardPreview />
    </main>
  );
}