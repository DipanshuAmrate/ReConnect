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
  className="relative flex justify-center items-center"
>

  {/* Hero Image */}

  <img
    src={heroImage}
    alt="Hero"
    className="w-full max-w-lg relative z-10"
  />

  {/* Card 1 */}

  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="absolute top-6 left-0 bg-white rounded-2xl shadow-xl p-4 z-20"
  >
    <h3 className="font-bold text-lime-600">
      5000+
    </h3>

    <p className="text-sm text-gray-500">
      Alumni Network
    </p>
  </motion.div>

  {/* Card 2 */}

  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="absolute bottom-8 right-0 bg-white rounded-2xl shadow-xl p-4 z-20"
  >
    <h3 className="font-bold text-lime-600">
      350+
    </h3>

    <p className="text-sm text-gray-500">
      Top Companies
    </p>
  </motion.div>

  {/* Card 3 */}

  <motion.div
    animate={{ x: [0, 8, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="absolute top-1/2 -left-10 bg-white rounded-2xl shadow-xl p-4 hidden lg:block z-20"
  >
    <h3 className="font-bold text-lime-600">
      900+
    </h3>

    <p className="text-sm text-gray-500">
      Mentorship Sessions
    </p>
  </motion.div>

</motion.div>

      </div>

      {/* Trusted Companies */}

<div className="max-w-7xl mx-auto px-6 mt-20">

  <p className="text-center text-gray-500 font-medium mb-8">
    Trusted by alumni working at
  </p>

  <div className="flex flex-wrap justify-center items-center gap-10">

    {companies.map((logo, index) => (

      <img
        key={index}
        src={logo}
        alt="Company Logo"
        className="h-10 opacity-60 hover:opacity-100 transition duration-300"
      />

    ))}

  </div>

      </div>

      {/* Trusted Companies */}

      <div className="mt-24 border-t border-gray-200 pt-10">

        <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">
          Trusted by alumni working at
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12">

          {companies.map((company) => (

            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-10 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;