import React from "react";
import { Helmet } from "react-helmet-async";

const News = () => {
  const blogHighlights = [
    {
      img: "blog-events/participant-park.jpg",
      title: "Building Confidence Through Daily Wins",
      desc: "Inspiring stories from participants who are learning new skills and discovering independence.",
    },
    {
      img: "blog-events/community-coffee.jpg",
      title: "Community Connections",
      desc: "Updates on how our outreach and social programs are creating lasting friendships.",
    },
    {
      img: "blog-events/wellness-nature.jpg",
      title: "Health & Wellbeing Tips",
      desc: "Practical advice on staying active, managing stress, and promoting mental health.",
    },
    {
      img: "blog-events/journal-writing.jpg",
      title: "Voices of Empowerment",
      desc: "Real stories and reflections from participants and carers about their journeys.",
    },
  ];

  const upcomingEvents = [
    {
      img: "blog-events/coffee-mugs.jpg",
      title: "Coffee & Connection Morning",
      desc: "A relaxed monthly catch-up for participants, carers, and families.",
    },
    {
      img: "blog-events/skills-workshop.jpg",
      title: "Skills for Independence Workshops",
      desc: "Hands-on sessions to build life and social skills.",
    },
    {
      img: "blog-events/park-outing.jpg",
      title: "Community Days Out",
      desc: "Group outings to explore local attractions, parks, and events.",
    },
    {
      img: "blog-events/celebration.jpg",
      title: "Awareness & Celebration Days",
      desc: "Celebrating important dates such as International Day of People with Disability.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Blog & Events | Empower Through Care</title>
        <meta
          name="description"
          content="Stay updated with Empower Through Care news, blogs, and upcoming events. Learn more about disability support and community activities."
        />
        <meta
          name="keywords"
          content="blog empower through care, events, disability news, community activities"
        />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          {/* Blog Highlights */}
          <h2 className="inline-block pb-2 mb-8 text-3xl font-bold border-b-2 text-et-blue border-et-teal">
            Blog Highlights
          </h2>
          <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
            {blogHighlights.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-et-blue">
                    {blog.title}
                  </h3>
                  <p className="flex-1 text-gray-600">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <h2 className="inline-block pb-2 mb-8 text-3xl font-bold border-b-2 text-et-blue border-et-teal">
            Upcoming Events
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="object-cover w-full h-48"
                />
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-et-blue">
                    {event.title}
                  </h3>
                  <p className="flex-1 text-gray-600">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
