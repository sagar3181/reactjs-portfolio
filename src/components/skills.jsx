import React from 'react';
import NavBar from './NavBar';  // Make sure the path is correct

const SkillsPage = () => {
  const skillsData = [
    { name: 'C', proficiency: 90 },
    { name: 'Java', proficiency: 65 },
    { name: 'Python', proficiency: 95 },
    { name: 'Machine Learning', proficiency: 80 },
    { name: 'HTML/CSS/JS', proficiency: 75 },
    { name: 'Databases (SQL/NoSQL)', proficiency: 85 },
    // Add more skills as needed
  ];

  return (
    <div className='bg-gradient-to-b from-black to-gray-800 text-white'> 
      <NavBar />

      <div className="container mx-auto mt-10 text-center">
        <section>
          <h2 className="text-3xl font-semibold mb-8">Skills and Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                        {`${skill.proficiency}%`}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-2 mb-4 overflow-hidden bg-teal-200 rounded">
                    <div style={{ width: `${skill.proficiency}%` }} className="flex flex-col justify-center bg-teal-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
