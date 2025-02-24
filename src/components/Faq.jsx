

const Faq = () => {
    const faqs = [
      {
        question: "How do I book a tutor?",
        answer: "Search for tutors, select one, and use the booking feature to schedule a session.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards and PayPal for secure transactions.",
      },
      {
        question: "Can I cancel a session?",
        answer: "Yes, sessions can be canceled or rescheduled up to 24 hours before the start time.",
      },
    ];
  
    return (
      <section className="py-10 w-11/12 mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold text-blue-600">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Faq ;
  