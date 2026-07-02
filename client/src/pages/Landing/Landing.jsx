import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import Stats from "../../components/sections/Stats";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import Testimonials from "../../components/sections/Testimonials";
import FAQ from "../../components/sections/FAQ";
import Footer from "../../components/sections/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />

      <div className="pt-28 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Welcome to ReConnect
        </h1>

        <p className="text-gray-500 mt-5 text-lg">
          Connecting Students with Experienced Alumni
        </p>
      </div>
    </>
  );
}

export default Landing;