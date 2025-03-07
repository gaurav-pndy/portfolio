import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaRegPaperPlane } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gaurav Pandey",
          from_email: form.email,
          to_email: "gauravpandey2310@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={` flex xl:flex-row flex-col-reverse overflow-hidden `}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] xl:w-1/2 bg-black-100 p-6 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className=" mt-2 flex flex-col md:flex-row gap-2 justify-between text-sm text-sky-400 ">
          <a href="mailto:gauravpandey2310@gmail.com">
            <span className="flex gap-2">
              <Mail size="20" /> gauravpandey2310@gmail.com
            </span>
          </a>
          <a href="tel:8448076770">
            <span className="flex gap-2">
              <Phone size="20" /> (+91) 8448076770
            </span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col text-sm sm:text-base gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message for me?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-indigo-950  hover:bg-indigo-900 transition-all duration-300 py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary flex gap-3 justify-center items-center"
          >
            {loading ? "Sending..." : "Send"} <FaRegPaperPlane />
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] xl:w-1/2 "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
