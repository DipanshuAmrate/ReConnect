import {
  Users,
  Briefcase,
  Handshake,
  Calendar,
  MessageCircle,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "../cards/FeatureCard";

const features = [
  {
    id: 1,
    title: "Find Alumni",
    description:
      "Search alumni by company, batch, department, skills and location.",
    icon: <Search size={30} />,
  },
  {
    id: 2,
    title: "Mentorship",
    description:
      "Get career guidance from verified alumni with 3+ years of industry experience.",
    icon: <Users size={30} />,
  },
  {
    id: 3,
    title: "Jobs & Internships",
    description:
      "Discover opportunities shared directly by alumni working in top companies.",
    icon: <Briefcase size={30} />,
  },
  {
    id: 4,
    title: "Referral System",
    description:
      "Request referrals from verified alumni to boost your chances of getting hired.",
    icon: <Handshake size={30} />,
  },
  {
    id: 5,
    title: "Events",
    description:
      "Attend webinars, workshops, hackathons and alumni networking events.",
    icon: <Calendar size={30} />,
  },
  {
    id: 6,
    title: "Community",
    description:
      "Connect with students, alumni and mentors through discussions and chats.",
    icon: <MessageCircle size={30} />,
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-lime-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Why ReConnect?"
          title="Everything You Need To Grow Your Career"
          subtitle="One platform where students connect with alumni, mentors and recruiters for mentorship, networking, referrals and career opportunities."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;