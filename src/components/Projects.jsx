import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Người trồng rau',
    description: 'Giải pháp mang nguồn rau sạch, an toàn đến mọi bữa ăn gia đình.',
    linkText: 'Xem thêm',
    linkUrl: '#',
  },
  {
    id: 2,
    title: 'Dự án Sắp ra mắt',
    description: 'Những ý tưởng mới đang được phát triển và hoàn thiện.',
    linkText: 'Tìm hiểu thêm',
    linkUrl: '#',
  },
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-content">
        <h2 className="section-title text-center">Dự án nổi bật.</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <a href={project.linkUrl} className="apple-link">
                {project.linkText} <span aria-hidden="true">&rsaquo;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
