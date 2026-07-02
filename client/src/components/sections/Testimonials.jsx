import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer, Microsoft",
    review:
      "ReConnect helped me mentor students from my college and guide them toward internships.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Student, OIST",
    review:
      "Through ReConnect I connected with alumni who reviewed my resume and referred me for interviews.",
  },
  {
    id: 3,
    name: "Ankit Patel",
    role: "SDE, Amazon",
    review:
      "The platform makes it easy to give back to students by sharing jobs and mentorship.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What Our Community Says
          </h2>

          <p className="text-gray-600 mt-4">
            Hear from students and alumni using ReConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((person) => (

            <div
              key={person.id}
              className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-xl transition"
            >

              <div className="flex text-yellow-400 mb-5">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="text-gray-600 leading-7">
                "{person.review}"
              </p>

              <div className="mt-6">

                <h3 className="font-semibold text-lg">
                  {person.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {person.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;