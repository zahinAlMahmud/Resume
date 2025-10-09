import React, { useState, useEffect } from 'react';

function Education() {
  const educationList = [
    {
      text: 'Bachelor of Science in Computer Science',
      school: 'XYZ University',
      bg: 'bg-primary text-white',
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/School_icon.svg',
    },
    {
      text: 'High School Diploma',
      school: 'ABC High School',
      bg: 'bg-success text-white',
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/School_icon.svg',
    },
    {
      text: 'Online Web Development Course',
      school: 'FreeCodeCamp',
      bg: 'bg-info text-white',
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/School_icon.svg',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % educationList.length);
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      {/* Heading */}
      <h1 className="text-center mb-4">Education</h1>

      {/* Animated Education Section */}
      <div
        className={`d-flex justify-content-center align-items-center vh-50 ${educationList[index].bg}`}
        style={{ transition: 'background 0.5s ease', height: '200px' }}
      >
        <div className="d-flex align-items-center gap-3">
          <img
            src={educationList[index].img}
            alt={educationList[index].school}
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
          <div>
            <h5 className="fw-bold mb-1">{educationList[index].text}</h5>
            <p className="mb-0">{educationList[index].school}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
