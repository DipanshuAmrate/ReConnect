import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Who can use ReConnect?",
    answer:
      "Students, alumni, mentors and administrators of the institution can use ReConnect.",
  },
  {
    id: 2,
    question: "How do I become a mentor?",
    answer:
      "Verified alumni with at least 3 years of professional experience can apply for mentor status.",
  },
  {
    id: 3,
    question: "Can alumni post job opportunities?",
    answer:
      "Yes. Verified alumni can share internships, jobs and referral opportunities.",
  },
  {
    id: 4,
    question: "Is ReConnect free for students?",
    answer:
      "Yes. Students can register, connect with alumni and request mentorship free of cost.",
  },
];

function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to know about ReConnect.
          </p>

        </div>

        <div className="mt-14 space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.id}
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >

              <div className="flex justify-between items-center">

                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown />

              </div>

              <p className="text-gray-600 mt-4">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;