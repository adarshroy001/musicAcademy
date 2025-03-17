import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[.02] ">
          <HeroSection/>
          <FeaturedCourses/>
          <WhyChooseUs/>
          <MusicSchoolTestimonials/>
          <UpcomingWebinars/>
    </main>
  );
}
