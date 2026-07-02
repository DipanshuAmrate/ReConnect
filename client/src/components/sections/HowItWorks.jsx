import {
  UserPlus,
  Search,
  Users,
  TrendingUp,
} from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import StepCard from "../cards/StepCard";

const steps = [
  {
    id: 1,
    number: "01",
    icon: <UserPlus size={32} />,
    title: "Create Account",
    description:
      "Sign up as a student or alumni and complete your profile.",
  },
  {
    id: 2,
    number: "02",
    icon: <Search size={32} />,
    title: "Find Alumni",
    description:
      "Search alumni by company, skills, department or graduation year.",
  },
  {
    id: 3,
    number: "03",
    icon: <Users size={32} />,
    title: "Connect",
    description:
      "Send mentorship requests, ask questions and build your network.",
  },
  {
    id: 4,
    number: "04",
    icon: <TrendingUp size={32} />,
    title: "Grow Career",
    description:
      "Receive referrals, internships and career guidance from alumni.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="How It Works"
          title="Start Your Career Journey"
          subtitle="Connecting with alumni takes only a few simple steps."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;