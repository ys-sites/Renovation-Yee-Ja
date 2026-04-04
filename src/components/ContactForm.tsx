import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      
      const subject = encodeURIComponent(`New Inquiry: ${formData.serviceType} from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.serviceType}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:boyboy5212000@hotmail.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-[#2D6A4F] font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
      
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl">
          There was an error sending your message. Please try calling us instead.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-1.5">Full Name *</label>
            <input
              type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all bg-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1.5">Email Address *</label>
            <input
              type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all bg-white"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-1.5">Phone Number *</label>
            <input
              type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all bg-white"
              placeholder="(438) 990-5160"
            />
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-sm font-bold text-gray-900 mb-1.5">Service Needed</label>
            <select
              id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all bg-white appearance-none"
            >
              <option value="">Select a service...</option>
              <option value="Kitchen Renovation">Kitchen Renovation</option>
              <option value="Bathroom Renovation">Bathroom Renovation</option>
              <option value="Basement Finishing">Basement Finishing</option>
              <option value="Flooring">Flooring</option>
              <option value="Painting">Painting</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-1.5">Project Details *</label>
          <textarea
            id="message" name="message" required rows={4} value={formData.message} onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all bg-white"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#2D6A4F] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#1B4332] transition-all mt-4 flex justify-center items-center gap-2 shadow-lg shadow-green-900/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Message"} <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
}
