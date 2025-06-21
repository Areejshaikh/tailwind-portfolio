"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Dummy images – replace with your own
import Project1 from "../../../public/capture.jpg";
import Project2 from "../../../public/image2.jpg";
import Project3 from "../../../public/e-commerce.jpg";

const projects = [
  {
    id: 1,
    title: "Mother's Day Website",
    description: "A heartfelt responsive website built using Next.js and Tailwind CSS to celebrate Mother's Day.",
    image: Project1,
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills, blogs, and projects — fully mobile responsive.",
    image: Project2,
    tech: ["Next.js", "Framer Motion"],
  },
  {
    id: 3,
    title: "E-commerce UI",
    description: "A clean and minimal e-commerce frontend layout using grid and flex utilities in Tailwind.",
    image: Project3,
    tech: ["Tailwind", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
        <p className="text-gray-500 mt-2">Here are some of the projects I've worked on recently.</p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap mt-4 gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

