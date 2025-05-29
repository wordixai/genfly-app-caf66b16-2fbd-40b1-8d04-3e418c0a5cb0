const testimonials = [
  {
    quote: "The best coffee I've ever had! The atmosphere is so cozy and the staff is incredibly friendly. It's my go-to spot for both work and meeting friends.",
    author: "Sarah Johnson",
    role: "Local Resident"
  },
  {
    quote: "Their pastries are to die for! I come here every weekend for their cinnamon rolls. The coffee is exceptional too - perfectly brewed every time.",
    author: "Michael Chen",
    role: "Food Blogger"
  },
  {
    quote: "As someone who works remotely, I appreciate the calm environment and reliable Wi-Fi. Plus, their seasonal drinks are always creative and delicious.",
    author: "Alex Rivera",
    role: "Software Developer"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-amber-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-amber-900/50 p-8 rounded-lg">
              <svg className="w-10 h-10 text-amber-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-amber-200">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;