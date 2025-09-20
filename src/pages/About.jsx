import React from "react";
import { Users, CheckCircle, Heart, Star, Smile } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Empower Through Care</title>
        <meta
          name="description"
          content="Learn about Empower Through Care, our mission, and how we work to provide compassionate care and support for people with disabilities."
        />
        <meta
          name="keywords"
          content="about empower through care, mission, vision, disability care"
        />
      </Helmet>

      {/* HERO / OUR STORY SECTION */}
      <section className="pt-8 bg-secondary-bg">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl font-bold text-et-blue md:text-5xl">
              About Us
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              Empower Through Care was created with one simple belief — that
              every person deserves to feel valued, supported, and free to live
              life their way. We saw families and participants searching for
              more than just “services.” They wanted connection, trust, and care
              that feels genuine. That’s why ETC was born — to bring compassion,
              respect, and empowerment into everyday life.
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="about-section.png"
              alt="About Empower Through Care"
              className="object-cover w-auto min-h-[400px] max-h-[600px]"
            />
          </div>
        </div>
      </section>
      {/* WHY ETC WAS BORN */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl px-6 mx-auto space-y-8 text-center">
          <h2 className="text-4xl font-bold text-et-blue">
            Why Empower Through Care Was Born
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Empower Through Care was founded by the ETC family, a group of
            dedicated individuals with extensive experience in residential care,
            community volunteering, and supporting those facing disabilities and
            homelessness. For years, they witnessed firsthand the challenges
            that many individuals face in accessing the right support.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Driven by a shared belief that everyone deserves respect, dignity,
            and the chance to live life to its fullest potential, the ETC family
            came together with a clear mission: to provide more than just
            services. They envisioned a company that builds relationships,
            listens deeply, and offers tailored support to meet the unique needs
            of each person.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Empower Through Care was born out of this vision — to create a space
            where individuals are not just cared for, but truly empowered. It’s
            not about ticking boxes; it’s about building trust, fostering
            independence, and helping people realise their full potential.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            At Empower Through Care, we don’t just provide support — we lay the
            foundation for a brighter future. Whether it’s access to essential
            services, life skills training, or simply a safe space to be heard,
            we are here to support the journey every step of the way.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            The ETC family is here to make a lasting difference in the lives of
            individuals with disabilities, those facing homelessness, and
            everyone in between. Together, we support, uplift, and help people
            take the steps towards a better tomorrow.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-secondary-bg">
        <div className="grid items-center gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">
          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <img
              src="mission-section.jpg"
              alt="Empowering lives"
              className="shadow-md rounded-2xl max-h-[400px]"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-et-blue">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              To empower people with disabilities to build confidence,
              independence, and joy — while knowing they are supported every
              step of the way.
            </p>

            <h2 className="mt-8 mb-4 text-3xl font-bold text-et-blue">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              A community where every person feels at home, connected, and
              celebrated for who they are.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="mb-10 text-3xl font-bold text-et-blue">Our Values</h2>

          <div className="p-10 bg-white shadow-md rounded-2xl">
            <div className="grid gap-8 md:grid-cols-5">
              {/* Respect */}
              <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 mb-4 text-et-green" />
                <h3 className="text-xl font-semibold text-et-blue">Respect</h3>
                <p className="mt-2 text-gray-600">
                  Treating every person with dignity and understanding.
                </p>
              </div>

              {/* Trust */}
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-10 h-10 mb-4 text-et-green" />
                <h3 className="text-xl font-semibold text-et-blue">Trust</h3>
                <p className="mt-2 text-gray-600">
                  Building honest and reliable relationships.
                </p>
              </div>

              {/* Community */}
              <div className="flex flex-col items-center text-center">
                <Heart className="w-10 h-10 mb-4 text-et-green" />
                <h3 className="text-xl font-semibold text-et-blue">
                  Community
                </h3>
                <p className="mt-2 text-gray-600">
                  Creating a safe, supportive, and fun environment.
                </p>
              </div>

              {/* Growth */}
              <div className="flex flex-col items-center text-center">
                <Star className="w-10 h-10 mb-4 text-et-green" />
                <h3 className="text-xl font-semibold text-et-blue">Growth</h3>
                <p className="mt-2 text-gray-600">
                  Encouraging learning, skills, and independence.
                </p>
              </div>

              {/* Joy */}
              <div className="flex flex-col items-center text-center">
                <Smile className="w-10 h-10 mb-4 text-et-green" />
                <h3 className="text-xl font-semibold text-et-blue">Joy</h3>
                <p className="mt-2 text-gray-600">
                  Finding happiness in the little moments every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl px-6 mx-auto mb-12 text-center">
          <h2 className="mb-8 text-3xl font-bold text-et-blue">Our Team</h2>
          <p className="text-lg leading-relaxed">
            Our team is more than support workers — we’re mentors, companions,
            and cheerleaders. Each day we celebrate milestones big and small,
            from learning a new skill to making a new friend. Families know they
            can count on us to bring warmth, professionalism, and care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
