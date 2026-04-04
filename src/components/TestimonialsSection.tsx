import { Star, Quote } from "lucide-react";
import { Section, Card } from "./Animated";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Tremblay",
    location: "Pierrefonds, QC",
    text: "Renovation Yee Ja completely transformed our outdated kitchen. The attention to detail and craftsmanship exceeded our expectations. Highly recommend their team!",
    rating: 5,
  },
  {
    name: "Marc-Antoine Dubois",
    location: "Montréal, QC",
    text: "Professional, punctual, and hardworking. They finished our basement renovation on time and within budget. The new space looks fantastic.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    location: "Dollard-des-Ormeaux, QC",
    text: "We hired them for exterior painting and deck construction. The crew was respectful of our property and the final result is beautiful. Great local business.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <Section className="bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Don't just take our word for it. Read about our clients' experiences.
        </p>
      </div>
      
      <div className="relative w-full py-4">
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div key={i} className="w-[350px] md:w-[400px] shrink-0">
              <Card className="h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute bottom-6 right-6 text-[#2D6A4F]/10 font-serif text-8xl leading-none select-none pointer-events-none">
                  <Quote size={80} className="text-[#2D6A4F]/10" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div className="relative z-10">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
