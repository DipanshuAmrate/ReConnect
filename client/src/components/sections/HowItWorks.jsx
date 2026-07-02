import {
  Search,
  UserPlus,
  MessagesSquare,
  Trophy,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search size={40} />,
    title: "Find Alumni",
    description:
      "Search verified alumni by company, batch, skills, or department.",
  },
  {
    id: 2,
    icon: <UserPlus size={40} />,
    title: "Connect",
    description:
      "Send connection or mentorship requests to alumni.",
  },
  {
    id: 3,
    icon: <MessagesSquare size={40} />,
    title: "Interact",
    description:
      "Chat, schedule meetings and receive career guidance.",
  },
  {
    id: 4,
    icon: <Trophy size={40} />,
    title: "Grow Career",
    description:
      "Get referrals, internships and placement opportunities.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            How ReConnect Works
          </h2>

          <p className="text-gray-600 mt-4">
            Connect with alumni in four simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {steps.map((step) => (

            <div
              key={step.id}
              className="relative text-center"
            >

              <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto text-lime-600">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;