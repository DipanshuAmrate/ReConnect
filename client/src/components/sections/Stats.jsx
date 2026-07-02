import { Users, GraduationCap, Briefcase, Handshake } from "lucide-react";
import AnimatedCounter from "../common/AnimatedCounter";
const stats = [
  {
    id: 1,
    icon: <Users size={32} />,
    number: 5000,
    title: "Alumni",
  },
  {
    id: 2,
    icon: <GraduationCap size={32} />,
    number: 5000,
    title: "Students",
  },
  {
    id: 3,
    icon: <Briefcase size={32} />,
    number: 350,
    title: "Companies",
  },
  {
    id: 4,
    icon: <Handshake size={32} />,
    number: 900,
    title: "Mentorship Sessions",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center text-lime-500 mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
  <AnimatedCounter end={item.number} />+
</h2>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;