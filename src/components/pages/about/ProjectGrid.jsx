import React from 'react';
import ourwork2 from "../../images/ourwork2.png";
import ourwork3 from "../../images/ourwork3.png";
import ourwork4 from "../../images/ourwork4.png";
import ourwork5 from "../../images/ourwork5.png";

const ProjectCard = ({ image, title, link }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="absolute inset-0 bg-[#00274D99] bg-opacity-50 flex flex-col justify-between items-center text-white p-4">
      <h3 className="text-lg mt-2 text-center" style={{ fontSize: "24px" }}>{title}</h3>
      <a href={link} className="mb-2 px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded-full">
        View Project
      </a>
    </div>
  </div>
);

const ProjectGrid = () => {
  const projects = [
    { title: 'Project Rangamaati', image: ourwork2, link: '/cases/rangamaati' },
    { title: 'Project BetterBuild', image: ourwork3, link: '/cases/betterbuild' },
    { title: 'Project Grocair', image: ourwork4, link: '/cases/grocair' },
    { title: 'Project Eiffel', image: ourwork5, link: '/cases/effel' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} image={project.image} link={project.link} />
      ))}
    </div>
  );
};

export default ProjectGrid;
