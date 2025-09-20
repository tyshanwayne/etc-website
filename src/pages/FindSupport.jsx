import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const services = [
  "transport",
  "arts-crafts",
  "skills-training",
  "health-wellbeing",
  "outreach-support",
  "daily-living-supports",
  "community-access",
  "education-support",
  "therapeutic-supports",
  "group-activities",
  "outdoor-adventures",
  "mentorship",
  "other",
];

const FindSupport = () => {
  const form = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form.current).entries());

    if (data.service === "other") {
      data.service = `Other - (${otherService})`;
    }

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
        <title>Find Support | Empower Through Care</title>
        <meta
          name="description"
          content="Discover the support services Empower Through Care offers to help individuals and families manage disabilities and live with dignity."
        />
        <meta
          name="keywords"
          content="find support, disability services, empower through care, family support"
        />
      </Helmet>

      <section className="pt-8 bg-secondary-bg">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-et-blue md:text-5xl">
              Find Support
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              Looking for support? Fill out the form below and our team will
              connect you with the right services.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="support-section.png"
              alt="Find Support at Empower Through Care"
              className="object-cover w-auto min-h-[300px] max-h-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl px-4 pt-16 pb-8 mx-auto">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="grid gap-4 p-6 bg-white rounded-lg shadow-md md:grid-cols-2"
        >
          {/* Hidden field for form title */}
          <input type="hidden" name="FormTitle" value="Find Support" />

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
          {/* Service Select */}
          <select
            name="service"
            required
            className="p-3 border rounded md:col-span-2"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="" disabled>
              Select Service Needed *
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </option>
            ))}
          </select>

          {/* Show input if "Other" selected */}
          {selectedService === "other" && (
            <input
              type="text"
              placeholder="Please specify *"
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              className="p-3 border rounded md:col-span-2"
              required
            />
          )}
          <textarea
            name="message"
            rows="4"
            placeholder="Additional Details (optional)"
            className="p-3 border rounded md:col-span-2"
          ></textarea>

          <div className="flex justify-center md:col-span-2">
            <button
              type="submit"
              className="px-6 py-3 mt-4 font-bold text-white transition rounded-full bg-et-teal hover:bg-et-teal-dark"
            >
              REQUEST SUPPORT
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="max-w-sm p-6 text-center bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold text-et-blue">
                Request Submitted!
              </h2>
              <p className="mb-4">Thank you. Our team will contact you soon.</p>
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

export default FindSupport;
