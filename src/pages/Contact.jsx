import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form.current).entries());

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setShowSuccessModal(true);
        form.current.reset();
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error(error);
      setShowErrorModal(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | Empower Through Care</title>
        <meta
          name="description"
          content="Get in touch with Empower Through Care. Reach out for inquiries, support, or partnership opportunities."
        />
        <meta
          name="keywords"
          content="contact empower through care, support, inquiries, partnership"
        />
      </Helmet>

      <section className="max-w-6xl p-16 mb-8 rounded-lg md:mx-auto lg:mt-12 md:flex md:gap-16 bg-secondary-bg">
        {/* LEFT SIDE */}
        <div className="mb-10 md:w-1/2">
          <h1 className="mb-2 text-5xl font-bold text-et-blue">Contact Us</h1>
          <p className="mb-4 text-black">
            Give us a call or leave us a message today!
          </p>
          <div className="space-y-3">
            <p>
              <strong>Email:</strong>
              <br />
              <a
                href="mailto:admin@empowerthroughcare.com"
                className="text-et-blue hover:underline"
              >
                admin@empowerthroughcare.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:0383520064" className="text-et-blue hover:underline">
                0383520064
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid gap-4 p-6 bg-white rounded shadow-md md:w-1/2"
        >
          {/* Hidden title field */}
          <input type="hidden" name="FormTitle" value="Contact Us" />

          <input
            type="text"
            name="name"
            required
            placeholder="Name *"
            className="p-3 border rounded"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone *"
            className="p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email *"
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject *"
            className="p-3 border rounded"
          />
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Message *"
            className="p-3 border rounded"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 mt-4 font-bold text-white rounded shadow-md bg-et-teal hover:bg-et-teal-dark"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-sm p-6 text-center bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold text-et-blue">
                Message Sent!
              </h2>
              <p className="mb-4">
                Thanks for reaching out. We'll get back to you shortly.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-4 py-2 text-white transition rounded-full bg-et-teal hover:bg-et-teal-dark"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-sm p-6 text-center bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold text-et-blue">
                Submission Failed
              </h2>
              <p className="mb-4">
                Something went wrong. Please try again later.
              </p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="px-4 py-2 text-white transition rounded-full bg-et-teal hover:bg-et-teal-dark"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
