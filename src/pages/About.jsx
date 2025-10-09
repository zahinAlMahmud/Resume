import React, { useState, useEffect } from 'react';

function About() {
  const phrases = [
    { text: 'I am Developer', bg: 'bg-primary text-white' },
    { text: 'Frontend Developer', bg: 'bg-success text-white' },
    { text: 'Backend Developer', bg: 'bg-danger text-white' },
    { text: 'Problem Solver', bg: 'bg-warning text-dark' },
    { text: 'Critical Thinker', bg: 'bg-info text-white' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
  className={`d-flex justify-content-center align-items-center vh-50 ${phrases[index].bg} transition-bg`}
  style={{
    height: '200px',
    transition: 'background 0.5s ease',
  }}
>
  <h2 className="fw-bold">{phrases[index].text}</h2>
</div>
  )
}

export default About;
