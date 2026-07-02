import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.svg";

import googleLogo from "../../assets/logos/google.svg";
import microsoftLogo from "../../assets/logos/microsoft.svg";
import amazonLogo from "../../assets/logos/amazon.svg";
import adobeLogo from "../../assets/logos/adobe.svg";
import infosysLogo from "../../assets/logos/infosys.svg";

import Button from "../common/Button";

function Hero() {
  const companies = [
    {
      name: "Google",
      logo: googleLogo,
    },
    {
      name: "Microsoft",
      logo: microsoftLogo,
    },
    {
      name: "Amazon",
      logo: amazonLogo,
    },
    {
      name: "Adobe",
      logo: adobeLogo,
    },
    {
      name: "Infosys",
      logo: infosysLogo,
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-lime-50 via-white to-lime-100 flex items-center pt-24">

      {/* Background Decoration */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block bg-lime-100 text-lime-700 px-5 py-2 rounded-full text-sm font-semibold">
            🚀 Connecting Students & Alumni
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mt-6 text-gray-900">
            Build Your Career
            <br />
            <span className="text-lime-500">
              Through Alumni
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-8 leading-8 max-w-xl">
            ReConnect bridges the gap between students and alumni by providing mentorship,
            referrals, networking opportunities, internships and career guidance through one
            modern platform.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

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
          className="relative flex justify-center items-center"
        >

          {/* Hero Image */}

          <img
            src={heroImage}
            alt="Students connecting with alumni"
            className="w-full max-w-xl lg:max-w-2xl relative z-10"
          />

          {/* Alumni Card */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute top-8 left-0 bg-white rounded-2xl shadow-xl px-6 py-4 z-20"
          >

            <h3 className="text-2xl font-bold text-lime-600">
              5000+
            </h3>

            <p className="text-gray-500">
              Alumni Network
            </p>

          </motion.div>

          {/* Companies Card */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl px-6 py-4 z-20"
          >

            <h3 className="text-2xl font-bold text-lime-600">
              350+
            </h3>

            <p className="text-gray-500">
              Top Companies
            </p>

          </motion.div>

          {/* Mentorship Card */}

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-1/2 -left-8 hidden lg:block bg-white rounded-2xl shadow-xl px-6 py-4 z-20"
          >

            <h3 className="text-2xl font-bold text-lime-600">
              900+
            </h3>

            <p className="text-gray-500">
              Mentorship Sessions
            </p>

          </motion.div>

        </motion.div>

      </div>

      {/* Trusted Companies */}

      <div className="max-w-7xl mx-auto px-6 mt-14 border-t border-gray-200 pt-8">

        <p className="text-center text-gray-500 uppercase tracking-[4px] text-sm mb-10">
          Trusted by alumni working at
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12">

          {companies.map((company) => (

            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;