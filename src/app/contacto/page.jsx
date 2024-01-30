"use client"
import React, {useState, useEffect} from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Teteo");
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState({
    to: "sebagonzalez_97@hotmail.com",
    subject: subject,
    html: `email: ${email}, name:${email}, mensaje: ${msg} `,
  });

  // useEffect to update formData when name, email, subject, or msg changes
  useEffect(() => {
    setFormData({
      to: email,
      subject: subject,
      html: `email: ${email}, name:${name}, mensaje: ${msg} `,
    });
  }, [name, email, subject, msg]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        console.log(response.ok);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div >
      <section className="text-gray-700 body-font relative md:pt-0 pt-[10vh] md:h-[70vh] md:items-center flex">
        <form onSubmit={handleSubmit} type="POST" className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pike">
              Contacto
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Responderemos a la brevedad cualquiera de sus dudas!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                   onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={msg}
                   onChange={(e) => setMsg(e.target.value)}
                    required
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-pike3 border-2 border-white hover:border-2 hover:border-pike2  py-2 px-8 focus:outline-none hover:bg-white hover:text-pike2 rounded-lg text-lg"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
