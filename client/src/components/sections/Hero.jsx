import { motion } from "framer-motion";
import heroImage from "../../assets/images/Hero.svg";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-lime-100 flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-lime-100 text-lime-700 px-4 py-2 rounded-full text-sm font-medium">
            Connecting Students & Alumni
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight text-gray-900">
            Build Your Career
            <span className="text-lime-500"> Through Alumni</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            ReConnect bridges the gap between students and alumni through
            mentorship, referrals, networking and career opportunities.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              text="Get Started"
              variant="primary"
            />

            <Button
              text="Learn More"
              variant="secondary"
            />
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-lg"
          />

          <div className="absolute top-8 left-0 bg-white rounded-2xl shadow-lg px-5 py-3">
            ⭐ 5000+ Alumni
          </div>

          <div className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-lg px-5 py-3">
            💼 350+ Companies
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;