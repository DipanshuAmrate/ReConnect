import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "../cards/TestimonialCard";

import avatar1 from "../../assets/avatars/avatar1.jpg";
import avatar2 from "../../assets/avatars/avatar2.jpg";
import avatar3 from "../../assets/avatars/avatar3.jpg";

const testimonials = [
  {
    id: 1,
    image: avatar1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Google",
    review:
      "Through ReConnect I found an amazing mentor who guided me during placement preparation.",
  },
  {
    id: 2,
    image: avatar2,
    name: "Priya Singh",
    role: "Frontend Developer",
    company: "Microsoft",
    review:
      "The alumni referral helped me secure my internship and eventually a full-time offer.",
  },
  {
    id: 3,
    image: avatar3,
    name: "Aditya Verma",
    role: "SDE",
    company: "Amazon",
    review:
      "Networking with alumni gave me confidence and helped me prepare for technical interviews.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-lime-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          badge="Success Stories"
          title="Hear From Our Alumni"
          subtitle="Real experiences from alumni and students who built meaningful connections through ReConnect."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;