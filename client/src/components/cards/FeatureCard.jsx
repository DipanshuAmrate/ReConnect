import { ArrowRight } from "lucide-react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-400 to-lime-500 text-white flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      <button className="mt-6 flex items-center gap-2 text-lime-600 font-semibold group-hover:gap-4 transition-all">
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default FeatureCard;