import { motion } from "framer-motion";

function StepCard({ number, icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-xl transition-all"
    >
      {/* Step Number */}

      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-lime-500 text-white flex items-center justify-center font-bold">
        {number}
      </div>

      {/* Icon */}

      <div className="mt-6 w-16 h-16 mx-auto rounded-2xl bg-lime-100 flex items-center justify-center text-lime-600">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default StepCard;
