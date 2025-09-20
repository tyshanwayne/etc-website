import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const Join = () => {
  const form = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form.current).entries());
    data.FormTitle = "Join Form";

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
        <title>Join Our Team | Empower Through Care</title>
        <meta
          name="description"
          content="Become a carer at Empower Through Care. Apply now and be part of a team that makes a difference in the lives of people with disabilities."
        />
        <meta
          name="keywords"
          content="join empower through care, become a carer, disability jobs, caregiving"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-8 bg-secondary-bg">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl font-bold text-et-blue md:text-5xl">
              Become a Carer
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              Join the Empower Through Care team and make a difference in the
              lives of people with disabilities.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="careers-section.png"
              alt="Become a Carer with Empower Through Care"
              className="object-cover h-auto max-w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="max-w-4xl px-4 pt-16 pb-8 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-et-blue">
          Do you have the passion and skills to help us?
        </h2>
        <p className="mb-8 text-center text-gray-700">
          Fill out the form below to apply for a carer position. Please ensure
          all required fields are filled out accurately. We look forward to
          reviewing your application!
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid gap-4 p-6 bg-white rounded-lg shadow-md md:grid-cols-2"
        >
          <input type="hidden" name="FormTitle" value="Become a Carer" />
          <input
            type="text"
            name="firstName"
            required
            placeholder="First Name *"
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="lastName"
            required
            placeholder="Last Name *"
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
            type="tel"
            name="phone"
            required
            placeholder="Phone Number *"
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="position"
            required
            placeholder="Position of Interest *"
            className="p-3 border rounded md:col-span-2"
          />
          <input
            type="url"
            name="cvLink"
            required
            placeholder="Link to your CV *"
            className="p-3 border rounded md:col-span-2"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message (optional)"
            className="p-3 border rounded md:col-span-2"
          ></textarea>

          {/* Hidden captcha and redirect */}
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="hidden"
            name="_next"
            value="https://yourwebsite.com/thank-you"
          />

          <div className="flex justify-center md:col-span-2">
            <button
              type="submit"
              className="px-6 py-3 mt-4 font-bold text-white transition rounded-full bg-et-teal hover:bg-et-teal-dark"
            >
              SUBMIT APPLICATION
            </button>
          </div>
        </form>

        {/* SUCCESS MODAL */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-sm p-6 text-center bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold text-et-blue">
                Application Submitted!
              </h2>
              <p className="mb-4">
                Thank you for applying. We’ll be in touch soon.
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

        {/* ERROR MODAL */}
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

export default Join;
