import React, { useState } from "react";

type ContactFormProps = Record<string, never>;

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Send to WhatsApp
      const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/60142616007?text=${whatsappMessage}`;

      window.open(whatsappUrl, "_blank");

      setStatus({ type: "success", text: "Thank you! Redirecting to WhatsApp..." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex py-50 lg:py-100">
      <div className="flex w-full containers">
        <div className="flex w-full gap-50 lg:!flex-nowrap flex-wrap">
          <div className="flex w-full gap-40 flex-col max-w-[500px]">
            <h2 className="text-header-black">Get in touch</h2>
            <div className="flex flex-col gap-20 w-full">
              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.text}
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-20 w-full">
                {/* Name */}
                <div className="flex w-full border-b border-b-para-black p-10 flex-col relative">
                  <label className="block text-para-black text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex w-full border-b border-b-para-black p-10 flex-col relative">
                  <label className="block text-para-black text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone */}
                <div className="flex w-full border-b border-b-para-black p-10 flex-col relative">
                  <label className="block text-para-black text-sm mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Subject */}
                <div className="flex w-full border-b border-b-para-black p-10 flex-col relative">
                  <label className="block text-para-black text-sm mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full bg-transparent outline-none text-para-input"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Book Consultation">Book Consultation</option>
                    <option value="Breast Surgery">Breast Surgery</option>
                    <option value="Body Contouring">Body Contouring</option>
                    <option value="Face Surgery">Face Surgery</option>
                    <option value="Aesthetic Treatments">Aesthetic Treatments</option>
                    <option value="Male Procedures">Male Procedures</option>
                    <option value="Regenerative Treatments">Regenerative Treatments</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col w-full">
                  <label className="block text-para-black text-sm mb-2">
                    Message *
                  </label>
                  <div className="flex w-full border border-para-black p-10 rounded-[5px] flex-col relative">
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn py-3 px-6 w-fit bg-primary text-white rounded-[5px] disabled:opacity-50 hover:bg-primary/90 transition-all duration-300 font-medium text-sm"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex w-full max-w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.23346887744!2d101.591525!3d3.079093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c5d86ea0fa5%3A0x97b4f2f0e6637479!2sSoma%20Plastic%20Surgery%20%7C%20Liposuction%20%7C%20Facelift%20%7C%20Breast%20Reduction!5e0!3m2!1sen!2smy!4v1753252333268!5m2!1sen!2smy"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[500px] lg:h-[594px] rounded-lg shadow-lg"
              title="Dr. Soma Clinical Aesthetics Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 