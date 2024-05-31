"use client";
import { postData } from "@/utils/api/fetchData";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const PortfolioForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null); // [1]
  const [done, setDone] = useState(false);
  const [contactUpdated, setContactUpdated] = useState(false); // [3]
  const [educationUpdated, setEducationUpdated] = useState(false);
  const [experienceUpdated, setExperienceUpdated] = useState(false);
  const [personalUpdated, setPersonalUpdated] = useState(false);
  const [projectsUpdated, setProjectsUpdated] = useState(false);
  const [skillsUpdated, setSkillsUpdated] = useState(false);
  const [loadingForUpdate, setLoadingForUpdate] = useState(false); // [5]

  const availableSkills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Next JS",
    "Nuxt JS",
    "Node JS",
    "Vue",
    "Angular",
    "Docker",
    "Photoshop",
    "Illustrator",
    "Svelte",
    "GCP",
    "Azure",
    "Fastify",
    "Haxe",
    "Ionic",
    "Markdown",
    "Microsoft Office",
    "Picsart",
    "Sketch",
    "Unity",
    "WolframAlpha",
    "Adobe XD",
    "After Effects",
    "Bootstrap",
    "Bulma",
    "CapacitorJs",
    "Coffeescript",
    "MemSQL",
    "C",
    "C++",
    "C#",
    "Python",
    "Java",
    "Julia",
    "Matlab",
    "Swift",
    "Ruby",
    "Kotlin",
    "Go",
    "PHP",
    "Flutter",
    "Dart",
    "Typescript",
    "Swift",
    "Git",
    "Figma",
    "Canva",
    "Ubuntu",
    "Bootstrap",
    "MongoDB",
    "Tailwind",
    "ViteJS",
    "VuetifyJS",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Firebase",
    "Blender",
    "Premiere Pro",
    "Adobe Audition",
    "Deno",
    "Django",
    "Gimp",
    "Graphql",
    "Lightroom",
    "MaterialUI",
    "Nginx",
    "Numpy",
    "OpenCV",
    "Pytorch",
    "Selenium",
    "Strapi",
    "Tensorflow",
    "Webex",
    "Wordpress",
  ];

  const [formData, setFormData] = useState({
    contractData: {
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      address: "123 Main St, Anytown USA",
      github: "https://github.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      stackOverflow: "https://stackoverflow.com/users/1234567/johndoe",
      devUsername: "johndoe",
    },
    educationData: [
      {
        title: "Bachelor of Science in Computer Science",
        duration: "2016 - 2020",
        institution: "XYZ University",
      },
      {
        title: "Master of Science in Artificial Intelligence",
        duration: "2020 - 2022",
        institution: "ABC University",
      },
    ],
    experienceData: [
      {
        title: "Software Engineer",
        company: "Acme Inc.",
        duration: "Jan 2023 - Present",
      },
      {
        title: "Intern",
        company: "TechCo",
        duration: "May 2022 - Aug 2022",
      },
    ],
    personalData: {
      name: "John Doe",
      profile: "https://johndoe.com/profile.jpg",
      designation: "Full-Stack Developer",
      description:
        "I am a passionate full-stack developer with expertise in React, Node.js, and MongoDB.",
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      address: "123 Main St, Anytown USA",
      github: "https://github.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
      linkedIn: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      stackOverflow: "https://stackoverflow.com/users/1234567/johndoe",
      leetcode: "https://leetcode.com/johndoe",
      devUsername: "johndoe",
      resume: "https://johndoe.com/resume.pdf",
    },
    projectData: [
      {
        name: "E-commerce Website",
        description:
          "A full-stack e-commerce website built with React, Node.js, and MongoDB.",
        tools: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        role: "Full-Stack Developer",
        code: "https://github.com/johndoe/ecommerce-website",
        demo: "https://ecommerce-website.vercel.app",
        image:
          "https://i0.wp.com/www.projectsmind.com/wp-content/uploads/2021/05/What-is-project.png?fit=1200%2C675&ssl=1",
      },
      {
        name: "Weather App",
        description:
          "A simple weather application built with React and OpenWeatherMap API.",
        tools: ["React", "OpenWeatherMap API", "Axios"],
        role: "Front-End Developer",
        code: "https://github.com/johndoe/weather-app",
        demo: "https://weather-app.vercel.app",
        image:
          "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
      },
    ],
    skillData: ["React"],
  });
  // function convertContactData(personalData) {
  //   return `export const contactsData = {
  //   email: '${personalData.email}',
  //   phone: '${personalData.phone}',
  //   address: '${personalData.address}',
  //   github: '${personalData.github}',
  //   facebook: '${personalData.facebook}',
  //   linkedIn: '${personalData.linkedIn}', // Note the change from 'linkedin' to 'linkedIn'
  //   twitter: '${personalData.twitter}',
  //   stackOverflow: '${personalData.stackOverflow}',
  //   devUsername: '${personalData.devUsername}'
  // }`;
  // }

  const handleDownload = async () => {
    const personalData = formData.personalData;
    setLoadingForUpdate(true);
    const updateContact = await fetch(
      `https://git-api-portfoliomaker.vercel.app/update-file-contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ personalData }),
      }
    );
    if (updateContact.status === 200) {
      setContactUpdated(true); // [4]
      toast.success("Contact data updated successfully");
    } else {
      setLoadingForUpdate(false);
      toast.error("Failed to update contact data");
    }
    const updateEducation = await fetch(
      `https://git-api-portfoliomaker.vercel.app/update-file-education`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ educationData: formData.educationData }),
      }
    );
    if (updateEducation.status === 200) {
      setEducationUpdated(true);
      toast.success("Education data updated successfully");
    }
    const updateExperience = await fetch(
      `https://git-api-portfoliomaker.vercel.app/update-file-experience`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ experienceData: formData.experienceData }),
      }
    );
    if (updateExperience.status === 200) {
      setExperienceUpdated(true);
      toast.success("Experience data updated successfully");
    }
    const updatePersonal = await fetch(
      `https://git-api-portfoliomaker.vercel.app/update-file-personal`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ personalData: formData.personalData }),
      }
    );
    if (updatePersonal.status === 200) {
      setPersonalUpdated(true);
      toast.success("Personal data updated successfully");
    }
    const updateProjects = await fetch(
      `https://git-api-portfoliomaker.vercel.app/update-file-projects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectData: formData.projectData }),
      }
    );
    if (updateProjects.status === 200) {
      setProjectsUpdated(true);
      toast.success("Projects data updated successfully");
    }
    const updateSkills = await fetch(
      `https://git-api-portfoliomaker.vercel.app/update-file-skills`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skillData: formData.skillData }),
      }
    );

    if (updateSkills.status === 200) {
      setSkillsUpdated(true);
      toast.success("Skills data updated successfully");
    }
    if (
      contactUpdated &&
      educationUpdated &&
      experienceUpdated &&
      personalUpdated &&
      projectsUpdated &&
      skillsUpdated
    ) {
      setLoadingForUpdate(false);
      window.open(
        "https://github.com/kolinabir/developer-portfolio-main/archive/refs/heads/main.zip"
      );
    } else {
      setLoadingForUpdate(false);
      toast.error("Failed to update data");
      console.log({
        contactUpdated,
        educationUpdated,
        experienceUpdated,
        personalUpdated,
        projectsUpdated,
        skillsUpdated,
      });
    }
  };

  const handleChange = (e, section, index, field) => {
    const value = e.target.value;
    setFormData((prevState) => {
      const updatedSection = Array.isArray(prevState[section])
        ? [...prevState[section]]
        : { ...prevState[section] };

      if (Array.isArray(prevState[section])) {
        updatedSection[index] = value; // Update value directly at the index
      } else {
        updatedSection[field] = value; // This part seems fine since it's not within an array
      }

      return { ...prevState, [section]: updatedSection };
    });
  };

  const handleAddItem = (section) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: [
        ...prevState[section],
        { title: "", duration: "", institution: "", company: "" },
      ],
    }));
  };

  const handleRemoveItem = (section, index) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }));
  };
  const copyLink = async (id) => {
    navigator.clipboard.writeText(
      `https://portfoliomakerv1.vercel.app/portfoliotemplate/${id}`
    );
    toast.success("Link copied to clipboard");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const post = await postData(
      "https://portfoliomaker-backend.vercel.app/portfolio",
      formData
    );

    if (post.success) {
      toast.success("Data submitted successfully");
      setId(post.data._id); // [2]
      setDone(true);
    } else {
      toast.error("Failed to submit data");
    }
    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md"
      >
        <h1 className="text-xl font-bold mb-6 text-center">
          Add your portfolio data below to generate a portfolio template.
        </h1>
        <h2 className="text-2xl font-bold mb-4">Contract Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={formData.contractData.email}
              onChange={(e) => handleChange(e, "contractData", null, "email")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium text-gray-700">
              Phone *
            </label>
            <input
              id="phone"
              type="text"
              value={formData.contractData.phone}
              onChange={(e) => handleChange(e, "contractData", null, "phone")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block font-medium text-gray-700"
            >
              Address *
            </label>
            <input
              id="address"
              type="text"
              value={formData.contractData.address}
              onChange={(e) => handleChange(e, "contractData", null, "address")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="github" className="block font-medium text-gray-700">
              GitHub *
            </label>
            <input
              id="github"
              type="text"
              value={formData.contractData.github}
              onChange={(e) => handleChange(e, "contractData", null, "github")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="facebook"
              className="block font-medium text-gray-700"
            >
              Facebook *
            </label>
            <input
              id="facebook"
              type="text"
              value={formData.contractData.facebook}
              onChange={(e) =>
                handleChange(e, "contractData", null, "facebook")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="linkedin"
              className="block font-medium text-gray-700"
            >
              LinkedIn
            </label>
            <input
              id="linkedin"
              type="text"
              value={formData.contractData.linkedin}
              onChange={(e) =>
                handleChange(e, "contractData", null, "linkedin")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="twitter"
              className="block font-medium text-gray-700"
            >
              Twitter
            </label>
            <input
              id="twitter"
              type="text"
              value={formData.contractData.twitter}
              onChange={(e) => handleChange(e, "contractData", null, "twitter")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="stackOverflow"
              className="block font-medium text-gray-700"
            >
              Stack Overflow
            </label>
            <input
              id="stackOverflow"
              type="text"
              value={formData.contractData.stackOverflow}
              onChange={(e) =>
                handleChange(e, "contractData", null, "stackOverflow")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="devUsername"
              className="block font-medium text-gray-700"
            >
              Dev Username
            </label>
            <input
              id="devUsername"
              type="text"
              value={formData.contractData.devUsername}
              onChange={(e) =>
                handleChange(e, "contractData", null, "devUsername")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Education Data</h2>
        {formData.educationData.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">Education {index + 1}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor={`title-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Title *
                </label>
                <input
                  id={`title-${index}`}
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(e, "educationData", index, "title")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`duration-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Duration *
                </label>
                <input
                  id={`duration-${index}`}
                  type="text"
                  value={item.duration}
                  onChange={(e) =>
                    handleChange(e, "educationData", index, "duration")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`institution-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Institution *
                </label>
                <input
                  id={`institution-${index}`}
                  type="text"
                  value={item.institution}
                  onChange={(e) =>
                    handleChange(e, "educationData", index, "institution")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveItem("educationData", index)}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Remove Education
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => handleAddItem("educationData")}
          className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
        >
          Add Education
        </button>
        <h2 className="text-2xl font-bold mb-4">Experience Data</h2>
        {formData.experienceData.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">Experience {index + 1}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor={`expTitle-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id={`expTitle-${index}`}
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(e, "experienceData", index, "title")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`company-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  id={`company-${index}`}
                  type="text"
                  value={item.company}
                  onChange={(e) =>
                    handleChange(e, "experienceData", index, "company")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`expDuration-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Duration
                </label>
                <input
                  id={`expDuration-${index}`}
                  type="text"
                  value={item.duration}
                  onChange={(e) =>
                    handleChange(e, "experienceData", index, "duration")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveItem("experienceData", index)}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Remove Experience
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("experienceData")}
          className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
        >
          Add Experience
        </button>

        <h2 className="text-2xl font-bold mb-4">Personal Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.personalData.name}
              onChange={(e) => handleChange(e, "personalData", null, "name")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="profile"
              className="block font-medium text-gray-700"
            >
              Profile *
            </label>
            <input
              id="profile"
              type="text"
              value={formData.personalData.profile}
              onChange={(e) => handleChange(e, "personalData", null, "profile")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block font-medium text-gray-700"
            >
              Designation *
            </label>
            <input
              id="designation"
              type="text"
              value={formData.personalData.designation}
              onChange={(e) =>
                handleChange(e, "personalData", null, "designation")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description *
            </label>
            <textarea
              id="description"
              value={formData.personalData.description}
              onChange={(e) =>
                handleChange(e, "personalData", null, "description")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="personalEmail"
              className="block font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              id="personalEmail"
              type="email"
              value={formData.personalData.email}
              onChange={(e) => handleChange(e, "personalData", null, "email")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="personalPhone"
              className="block font-medium text-gray-700"
            >
              Phone *
            </label>
            <input
              id="personalPhone"
              type="text"
              value={formData.personalData.phone}
              onChange={(e) => handleChange(e, "personalData", null, "phone")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="personalAddress"
              className="block font-medium text-gray-700"
            >
              Address *
            </label>
            <input
              id="personalAddress"
              type="text"
              value={formData.personalData.address}
              onChange={(e) => handleChange(e, "personalData", null, "address")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="personalGithub"
              className="block font-medium text-gray-700"
            >
              GitHub *
            </label>
            <input
              id="personalGithub"
              type="text"
              value={formData.personalData.github}
              onChange={(e) => handleChange(e, "personalData", null, "github")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="personalFacebook"
              className="block font-medium text-gray-700"
            >
              Facebook
            </label>
            <input
              id="personalFacebook"
              type="text"
              value={formData.personalData.facebook}
              onChange={(e) =>
                handleChange(e, "personalData", null, "facebook")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="personalLinkedIn"
              className="block font-medium text-gray-700"
            >
              LinkedIn
            </label>
            <input
              id="personalLinkedIn"
              type="text"
              value={formData.personalData.linkedIn}
              onChange={(e) =>
                handleChange(e, "personalData", null, "linkedIn")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="personalTwitter"
              className="block font-medium text-gray-700"
            >
              Twitter
            </label>
            <input
              id="personalTwitter"
              type="text"
              value={formData.personalData.twitter}
              onChange={(e) => handleChange(e, "personalData", null, "twitter")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="personalStackOverflow"
              className="block font-medium text-gray-700"
            >
              Stack Overflow
            </label>
            <input
              id="personalStackOverflow"
              type="text"
              value={formData.personalData.stackOverflow}
              onChange={(e) =>
                handleChange(e, "personalData", null, "stackOverflow")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="personalLeetcode"
              className="block font-medium text-gray-700"
            >
              LeetCode
            </label>
            <input
              id="personalLeetcode"
              type="text"
              value={formData.personalData.leetcode}
              onChange={(e) =>
                handleChange(e, "personalData", null, "leetcode")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="personalDevUsername"
              className="block font-medium text-gray-700"
            >
              Dev Username
            </label>
            <input
              id="personalDevUsername"
              type="text"
              value={formData.personalData.devUsername}
              onChange={(e) =>
                handleChange(e, "personalData", null, "devUsername")
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="resume" className="block font-medium text-gray-700">
              Resume *
            </label>
            <input
              id="resume"
              type="text"
              value={formData.personalData.resume}
              onChange={(e) => handleChange(e, "personalData", null, "resume")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Project Data</h2>
        {formData.projectData.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">Project {index + 1}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`projectName-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  id={`projectName-${index}`}
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "name")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`projectDescription-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Description *
                </label>
                <textarea
                  id={`projectDescription-${index}`}
                  value={item.description}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "description")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`projectTools-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Tools *
                </label>
                <input
                  id={`projectTools-${index}`}
                  type="text"
                  value={item.tools.join(", ")}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "tools")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`projectRole-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Role *Required *
                </label>
                <input
                  id={`projectRole-${index}`}
                  type="text"
                  value={item.role}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "role")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`projectCode-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Code *
                </label>
                <input
                  id={`projectCode-${index}`}
                  type="text"
                  value={item.code}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "code")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor={`projectDemo-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Demo
                </label>
                <input
                  id={`projectDemo-${index}`}
                  type="text"
                  value={item.demo}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "demo")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`projectImage-${index}`}
                  className="block font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  id={`projectImage-${index}`}
                  type="text"
                  value={item.image}
                  onChange={(e) =>
                    handleChange(e, "projectData", index, "image")
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveItem("projectData", index)}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Remove Project
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("projectData")}
          className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
        >
          Add Project
        </button>

        <h2 className="text-2xl font-bold mb-4">Skill Data</h2>
        {formData.skillData.map((skill, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`skill-${index}`}
              className="block font-medium text-gray-700"
            >
              Skill *
            </label>
            <select
              id={`skill-${index}`}
              value={skill}
              onChange={(e) => handleChange(e, "skillData", index, "")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500"
              required
            >
              <option value="">Select a skill</option>
              {availableSkills.map((availableSkill, i) => (
                <option key={i} value={availableSkill}>
                  {availableSkill}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => handleRemoveItem("skillData", index)}
              className="mt-2 text-sm text-red-500 hover:text-red-700"
            >
              Remove Skill
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => handleAddItem("skillData")}
          className="mb-6 text-sm text-indigo-500 hover:text-indigo-700"
        >
          Add Skill
        </button>
        <br />
        <div className="gap-20 flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
      <div>
        {
          // [3]
          done && (
            <div className="max-w-3xl mx-auto p-6 bg-white gap-20 shadow-md rounded-md my-3 flex justify-center">
              <div>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={`/portfoliotemplate/${id}`}
                    // open new tab
                    target="_blank"
                  >
                    {" "}
                    View Portfolio
                  </Link>
                </button>
              </div>
              <div>
                <button
                  onClick={() => copyLink(id)}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  {" "}
                  Copy Link
                </button>
              </div>
            </div>
          )
        }
      </div>
      <div className="flex justify-center my-5">
        {
          // [4]
          done && (
            <button
              onClick={handleDownload}
              className="bg-white text-black hover:bg-indigo-700  font-bold py-2 px-4 rounded"
            >
              {" "}
              {
                // [5]
                loadingForUpdate ? "Loading..." : "Download Full Code"
              }
            </button>
          )
        }
      </div>
      {/* copy link button */}
    </div>
  );
};

export default PortfolioForm;
