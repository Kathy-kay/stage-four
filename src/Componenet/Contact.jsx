import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
        "service_8ljvz8n",
        "template_379tjq5",
        {
          from_name: form.name,
          to_name: "Dev Clinton",
          from_email: form.email,
          to_email: "confidencec363@gmail.com",
          message: form.message,
        },
        "ex8hN7PDODmq5Ha5J"
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
    <section
      id="#contact"
      className="bg-about-300 mx-auto flex justify-start px-6 py-10  sm:px-28 items-center h-screen"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col w-full sm:w-1/2 "
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl text-white mb-10 font-medium">
          Contact
        </h2>
        <label className="flex flex-col mb-6">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name?"
            className=" py-4 px-6  text-white rounded-lg outline-none border-none font-medium "
          />
        </label>
        <label className="flex flex-col mb-6">
          <span className="text-white font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className=" py-4 px-6  text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col mb-6">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-tertiary py-4 px-6  text-white rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className=" bg-teals-400 py-3 px-8 rounded outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
