import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import loginImage from "../../src/assets/login.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null.");
      setStatus("Failed to send message, please try again.");
      return;
    }

    emailjs
      .sendForm(
        "service_ztyzodw", // from EmailJS dashboard
        "template_gl02hm7", // your email template id
        form.current,
        "UL1Rn1ZGE1dqVNbto" // your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("Message sent successfully!");
          form.current?.reset(); // Reset the form after submission
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div
      className="py-20 border-b border-white bg-gradient-to-tr from-[#0f0f0f] via-[#1f1f1f] to-[#151515]"
      id="contact"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-12 lg:px-20 text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          <Typewriter
            words={["Get in Touch", "Contact me"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
          We'd love to hear from you! Reach out to us with any questions, ideas,
          or feedback.
        </p>
      </div>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 lg:px-20">
        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-md shadow-green-300 transition duration-300">
          <h3 className="text-3xl font-semibold text-white mb-8">
            Send a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full px-6 py-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="w-full px-6 py-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-6 py-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-6 py-4 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 h-36 text-lg"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl text-lg font-semibold transition"
            >
              <FaPaperPlane className="text-xl" />
              <span>Send Message</span>
            </button>
            {status && (
              <p
                className={`mt-4 font-semibold ${
                  status.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md shadow-green-300 hover:shadow-md transition duration-300">
          <img
            src={loginImage}
            alt="Contact Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
