import React from 'react';

function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["C/C++", "JavaScript", "Python", "Java"]
    },
    {
      name: "Frontend Development",
      skills: ["HTML & CSS", "React"]
    },
    {
      name: "Backend Development",
      skills: ["Node.js", "Express.js"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      name: "Machine Learning",
      skills: ["TensorFlow", "Keras", "Pandas", "NumPy"]
    },
    {
      name: "Developer Tools",
      skills: ["VS Code", "Git/GitHub", "Jupyter Notebooks"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
