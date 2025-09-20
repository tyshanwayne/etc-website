import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Empower Through Care</title>
        <meta
          name="description"
          content="Empower Through Care provides support, guidance, and opportunities to help people with disabilities live better lives."
        />
        <meta
          name="keywords"
          content="empower through care, disability support, care services, community support"
        />
      </Helmet>
      {/* HERO SECTION */}
      <section className="pt-8 bg-secondary-bg">
        <div className="grid items-center gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">
          {/* LEFT TEXT CONTENT */}
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl text-et-blue">
              Heartfelt Support for Every Ability —{" "}
              <span className="text-et-green">Empower Through Care</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              At Empower Through Care, we believe everyone deserves to live with
              dignity, choice, and connection. As a trusted NDIS provider, we
              offer personalised support that's built on compassion, respect,
              and inclusion. Whether it's daily living assistance, community
              participation, or specialist accommodation, we're here to empower
              your journey — your way. Together, we create safe spaces, build
              real relationships, and help you live a life full of purpose and
              possibility.
            </p>

            <Link
              to="/about"
              className="inline-block px-8 py-3 my-6 font-semibold text-white transition-colors duration-200 rounded-full bg-et-teal hover:bg-et-teal-dark"
            >
              LEARN MORE
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/hero-section.png"
              alt="Disability support"
              className="object-cover w-auto min-h-[400px] max-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES / OUR SUPPORT SERVICES SECTION */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl text-et-blue">
            Our Support Services
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-700">
            At Empower Through Care, we provide a wide range of disability
            support services tailored to meet the unique needs of each
            individual. From everyday assistance to empowering independence —
            we're here for you.
          </p>

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Transport */}
            <div
              id="transport"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_transport.jpg"
                alt="Transport Service"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Transport
              </h3>
              <p className="text-sm text-gray-600">
                Safe and reliable transport services to help you get to
                appointments, activities, and community events with ease.
              </p>
            </div>

            {/* Arts and Crafts */}
            <div
              id="arts-crafts"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_arts.jpg"
                alt="Arts and Crafts"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Arts & Crafts
              </h3>
              <p className="text-sm text-gray-600">
                Creative sessions designed to encourage self-expression,
                confidence, and joy through hands-on activities.
              </p>
            </div>

            {/* Skills Training */}
            <div
              id="skills-training"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_skills.jpg"
                alt="Skills Training"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Skills Training
              </h3>
              <p className="text-sm text-gray-600">
                Practical training to develop independence and everyday life
                skills for greater confidence and self-reliance.
              </p>
            </div>

            {/* Health & Wellbeing */}
            <div
              id="health-wellbeing"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_health.jpg"
                alt="Health & Wellbeing"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Health & Wellbeing
              </h3>
              <p className="text-sm text-gray-600">
                Programs and support focused on maintaining a healthy lifestyle
                — physically, mentally, and emotionally.
              </p>
            </div>

            {/* Outreach Support */}
            <div
              id="outreach-support"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_outreach.jpg"
                alt="Outreach Support"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Outreach Support
              </h3>
              <p className="text-sm text-gray-600">
                One-on-one and community outreach support to ensure you stay
                connected, engaged, and empowered.
              </p>
            </div>

            {/* Daily Living Supports */}
            <div
              id="daily-living-supports"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_dailyliving.jpg"
                alt="Daily Living Supports"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Daily Living Supports
              </h3>
              <p className="text-sm text-gray-600">
                Assistance with personal care, meals, and everyday tasks to make
                life easier and more manageable.
              </p>
            </div>

            {/* Community Access */}
            <div
              id="community-access"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_community.jpg"
                alt="Community Access"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Community Access
              </h3>
              <p className="text-sm text-gray-600">
                Helping you participate in community activities, events, and
                social gatherings with confidence and support.
              </p>
            </div>

            {/* Education Support */}
            <div
              id="education-support"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_education.jpg"
                alt="Education Support"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Education Support
              </h3>
              <p className="text-sm text-gray-600">
                Assistance with learning, tutoring, and skills development to
                support educational growth and opportunities.
              </p>
            </div>

            {/* Therapeutic Supports */}
            <div
              id="therapeutic-supports"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_therapy.jpg"
                alt="Therapeutic Supports"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Therapeutic Supports
              </h3>
              <p className="text-sm text-gray-600">
                Access to therapies and specialised support services designed to
                meet your individual needs.
              </p>
            </div>

            {/* Group Activities */}
            <div
              id="group-activities"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_group.jpg"
                alt="Group Activities"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Group Activities
              </h3>
              <p className="text-sm text-gray-600">
                Fun and interactive group sessions that build friendships,
                teamwork, and social skills in a safe environment.
              </p>
            </div>

            {/* Outdoor Adventures */}
            <div
              id="outdoor-adventures"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_outdoor.jpg"
                alt="Outdoor Adventures"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Outdoor Adventures
              </h3>
              <p className="text-sm text-gray-600">
                Exciting outdoor experiences designed to promote independence,
                confidence, and connection with nature.
              </p>
            </div>
            {/* Mentorship */}
            <div
              id="mentorship"
              className="p-6 text-center transition bg-white border border-gray-200 shadow rounded-xl hover:shadow-md"
            >
              <img
                src="service/service_mentor.jpg"
                alt="Mentorship Service"
                className="object-contain w-full h-auto mx-auto mb-4 rounded-xl"
              />
              <h3 className="mb-2 text-xl font-semibold text-et-blue">
                Mentorship
              </h3>
              <p className="text-sm text-gray-600">
                Personalised mentorship to guide, encourage, and support your
                personal growth, skills development, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
