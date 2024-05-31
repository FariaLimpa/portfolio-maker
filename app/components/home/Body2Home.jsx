import React from "react";

const Body2Home = () => {
  return (
    <div className="bg-gray-100 py-12 my-40 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Open Source Project
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore the Codebase
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This project is open-sourced, and you can explore the source code to
            learn how it's built.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {/* Frontend Section */}
          <CodebaseSection
            icon={
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            }
            title="Frontend"
            description="Explore the React-based frontend codebase for this project, built using NextJS, Tailwind CSS, and other modern libraries like Flowbite, react-countup, react-icons, and react-toastify."
            link="https://github.com/FariaLimpa/portfolio-maker"
          />

          {/* Backend (MongoDB) Section */}
          <CodebaseSection
            icon={
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
            title="Backend (MongoDB)"
            description="Explore the backend codebase that utilizes MongoDB for data storage, built with Node.js, Express.js, and Mongoose."
            link="https://github.com/FariaLimpa/portfolio-maker/tree/main/backend"
          />

          {/* Backend (GitAPI) Section */}
          <CodebaseSection
            icon={
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
            title="Backend (GitAPI)"
            description="Explore the backend codebase that integrates with the GitHub API, built with Node.js and TypeScript."
            link="https://github.com/kolinabir/GitAPI-Connect-for-Portfolio-Maker"
          />
        </div>
      </div>
    </div>
  );
};

const CodebaseSection = ({ icon, title, description, link }) => {
  return (
    <div className="relative">
      <dt className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          {icon}
        </div>
        <p className="ml-3 text-lg leading-6 font-medium text-gray-900">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-500">{description}</dd>
      <a
        href={link}
        className="mt-4 text-indigo-600 hover:text-indigo-800 block"
      >
        View {title} Code
      </a>
    </div>
  );
};

export default Body2Home;
