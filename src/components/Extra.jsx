import React from "react";

const Extra = () => {
  return (
    <div>
      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 bg-secondary-bg">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="w-full h-full">
            <img
              src="/wca-section.png"
              alt="Empower Through Care"
              className="object-cover w-full h-auto align-items-center"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="mb-4 text-4xl font-bold text-et-blue">
              Why Choose Empower Through Care?
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              At Empower Through Care, we put people first. Our commitment is to
              provide compassionate, individualized disability support that
              truly makes a difference. Here's what sets us apart:
            </p>

            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-xl text-et-green">✓</span>
                <span>
                  <strong>Personalized Care:</strong> Every person is unique. We
                  tailor our support services to your goals, preferences, and
                  needs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-et-green">✓</span>
                <span>
                  <strong>Experienced & Compassionate Team:</strong> Our
                  professionals are fully trained and deeply passionate about
                  what they do.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-et-green">✓</span>
                <span>
                  <strong>Transparent Communication:</strong> We believe in
                  open, honest, and respectful communication with you and your
                  loved ones.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-et-green">✓</span>
                <span>
                  <strong>Community-Focused:</strong> We support inclusion and
                  social engagement to help you feel truly connected.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-et-green">✓</span>
                <span>
                  <strong>Registered NDIS Provider:</strong> We meet the highest
                  standards and are proud to serve participants under the NDIS.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-et-blue">
            See What People Say About Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <p className="mb-4 italic text-gray-700">
                “For the first time in years, I feel like myself again. ETC gave
                me my independence back.”
              </p>
              <h4 className="font-semibold text-et-purple">Karina</h4>
              <span className="text-sm text-gray-500">Participant</span>
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <p className="mb-4 italic text-gray-700">
                "I get to support participants and know that the care we provide
                truly makes a difference."
              </p>
              <h4 className="font-semibold text-et-purple">Sarah</h4>
              <span className="text-sm text-gray-500">Support Worker</span>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
              <p className="mb-4 italic text-gray-700">
                The support feels like family. They really listen, they care,
                and they make a difference.”
              </p>
              <h4 className="font-semibold text-et-purple">Jessica</h4>
              <span className="text-sm text-gray-500">
                Mother of a Participant
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 text-center bg-secondary-bg">
        <div className="max-w-3xl px-6 mx-auto">
          <h2 className="text-3xl font-bold text-et-blue">
            Our Invitation to You
          </h2>
          <p className="mt-4 text-lg">
            At Empower Through Care, you’re not just receiving support — you’re
            joining a family. We’re here to walk beside you, to lift you up, and
            to create a brighter future together.
          </p>
          <a
            href="/findsupport"
            className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-white transition rounded-full bg-et-purple hover:bg-et-purple-dark hover:text-white"
          >
            Find Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default Extra;
