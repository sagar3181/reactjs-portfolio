import React, { useState } from 'react';
import NavBar from './NavBar';
import project1Thumbnail from '../assets/img5.png'; // Adjust the path based on your folder structure

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Made a ML project for house price prediction of ahmedabad city.',
    thumbnail: project1Thumbnail,
    liveLink: 'https://github.com/sagar3181/Ahmedabad-house-price-predictor',
    githubLink: 'https://github.com/sagar3181/Ahmedabad-house-price-predictor',
    details: 'Detailed information about Project 1.',
  },
  {
    id: 1,
    title: 'Project 2',
    description: 'This project primarily focusses on how I created a working clone website of Apple Inc. using Django. Also because HTML/CSS section of this project isnt a priority, it may be a little sloppy.',
    thumbnail: project1Thumbnail,
    liveLink: 'https://github.com/sagar3181/Django-Apple-Website-Clone',
    githubLink: 'https://github.com/sagar3181/Django-Apple-Website-Clone',
    details: 'Detailed information about Project 1.',
  },
  {
    id: 1,
    title: 'Project 3',
    description: 'This project shows how I used the Python GUI package to build a Sign-Up form/app.',
    thumbnail: project1Thumbnail,
    liveLink: 'https://github.com/sagar3181/Python-GUI-SIGN-UP',
    githubLink: 'https://github.com/sagar3181/Python-GUI-SIGN-UP',
    details: 'Detailed information about Project 1.',
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className='bg-gradient-to-b from-black to-gray-800 text-white min-h-screen'> 
      <NavBar />

      <div className="container mx-auto mt-10 mb-16 text-center px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="mb-4">
                <div className="relative mb-2">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded"
                    onClick={() => openProjectModal(project)}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-400"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 max-w-lg rounded-lg overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProject.details}</p>
            <div className="flex justify-between">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400"
              >
                GitHub
              </a>
            </div>
            <button onClick={closeProjectModal} className="mt-4 text-gray-500 hover:text-gray-400">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
