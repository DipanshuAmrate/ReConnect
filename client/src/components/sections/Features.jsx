import {
  Users,
  Briefcase,
  Handshake,
  Calendar,
  MessageCircle,
  Search,
} from "lucide-react";

import SectionTitle from "../common/SectionTitle";

const features = [
  {
    id: 1,
    title: "Find Alumni",
    description:
      "Search alumni by company, batch, department, skills and location.",
    icon: <Search size={35} />,
  },
  {
    id: 2,
    title: "Mentorship",
    description:
      "Request guidance from experienced alumni and build your career path.",
    icon: <Users size={35} />,
  },
  {
    id: 3,
    title: "Job & Internship",
    description:
      "Apply for jobs and internships shared directly by alumni.",
    icon: <Briefcase size={35} />,
  },
  {
    id: 4,
    title: "Referral System",
    description:
      "Request referrals from verified alumni working in top companies.",
    icon: <Handshake size={35} />,
  },
  {
    id: 5,
    title: "Events",
    description:
      "Join webinars, workshops and alumni meetups.",
    icon: <Calendar size={35} />,
  },
  {
    id: 6,
    title: "Community Chat",
    description:
      "Interact with alumni and students through the community platform.",
    icon: <MessageCircle size={35} />,
  },
];

function Features() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
            title="Why Choose ReConnect?"
            subtitle="Everything students need to connect with alumni, grow professionally and unlock career opportunities."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (

            <div
              key={feature.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-2xl bg-lime-100 flex items-center justify-center text-lime-600">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>  

    </section>
  );
}

export default Features;