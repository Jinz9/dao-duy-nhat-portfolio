import React from 'react';

const skillsData = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 60 },
  { name: 'JavaScript', percentage: 50 },
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-content">
        <h2 className="section-title text-center">Kỹ năng cốt lõi.</h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item" tabIndex={0}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percentage}%</span>
              </div>
              <div className="progress-bg" aria-label={`${skill.name} skill progress bar`}>
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
