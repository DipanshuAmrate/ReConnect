import { Quote } from "lucide-react";
import { motion } from "framer-motion";

function TestimonialCard({
  image,
  name,
  role,
  company,
  review,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
    >
      <Quote
        className="text-lime-500"
        size={36}
      />

      <p className="mt-6 text-gray-600 leading-7 italic">
        "{review}"
      </p>

      <div className="flex items-center mt-8">

        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="ml-4">

          <h4 className="font-bold text-gray-900">
            {name}
          </h4>

          <p className="text-gray-500 text-sm">
            {role}
          </p>

          <p className="text-lime-600 font-medium text-sm">
            {company}
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default TestimonialCard;