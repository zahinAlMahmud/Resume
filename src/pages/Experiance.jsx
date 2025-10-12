import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'React.js Developer - Intern',
      company: 'Metaheed',
      duration: 'May 2025 – Present',
      responsibilities: [
        'Developed and maintained React.js applications using functional components and hooks.',
        'Built dynamic and responsive UI using React, Bootstrap, and Tailwind CSS.',
        'Integrated RESTful APIs and managed state with Redux and Context API.',
        'Collaborated with designers to create interactive and user-friendly interfaces.',
        'Optimized component performance and implemented reusable code structures.',
      ],
    },
    {
      role: 'Vue.js Developer Intern',
      company: 'Impulse HR Solution',
      duration: 'August 2024 – December 2025',
      responsibilities: [
        'Built and maintained responsive web applications using Vue.js.',
        'Implemented component-based architecture and reusable Vue components.',
        'Worked with Vue Router and Vuex for state management and routing.',
        'Integrated RESTful APIs and third-party services into Vue applications.',
        'Optimized performance and ensured cross-browser compatibility.',
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Experience</h1>

      <div className="d-flex flex-column gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 rounded shadow"
            style={{ backgroundColor: '#f7f7f7' }}
          >
            <h3 className="fw-bold mb-1">{exp.role}</h3>
            {exp.company && <p className="mb-1 fst-italic">{exp.company}</p>}
            {exp.duration && <p className="mb-2 text-muted">{exp.duration}</p>}
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
