import React from "react";

const TechStackSection = () => {
  const techStack = [
    {
      title: "Frontend",
      items: [
        "Next.js",
        "Tailwind CSS",
        "Flowbite",
        "react-countup",
        "react-toastify",
        "JavaScript",
      ],
    },
    {
      title: "Backend (MongoDB)",
      items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    },
    {
      title: "Backend (GitAPI)",
      items: ["Node.js", "JavaScript", "GitHub API"],
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our application is built using cutting-edge technologies to ensure
            high performance, scalability, and a seamless user experience.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className="rounded-lg bg-white shadow-lg p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-4">{stack.title}</h3>
              <ul className="space-y-2">
                {stack.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="text-indigo-500">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
