import React, { useState, useEffect } from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'Bootstrap', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 80 },
    { name: 'React JS', percentage: 85 },
    { name: 'Vue JS', percentage: 75 },
    { name: 'Node JS', percentage: 70 },
    { name: 'API Integration', percentage: 80 },
  ];

  const [filledPercentages, setFilledPercentages] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFilledPercentages((prev) =>
        prev.map((value, index) => {
          if (value < skills[index].percentage) {
            return value + 1; // increment by 1% each tick
          }
          return value;
        })
      );
    }, 20); // every 20ms

    // stop interval when all bars reach their target
    const stopCheck = setInterval(() => {
      if (filledPercentages.every((val, i) => val >= skills[i].percentage)) {
        clearInterval(interval);
        clearInterval(stopCheck);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(stopCheck);
    };
  }, [filledPercentages, skills]);

  return (
    <div className="container my-5">
      <div className="row g-3">
        {skills.map((skill, index) => (
          <div className="col-12 col-sm-6" key={index}>
            <div className="d-flex justify-content-between mb-1">
              <span style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>{skill.name}</span>
              <span style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                {filledPercentages[index]}%
              </span>
            </div>
            <div
              className="progress"
              style={{
                height: '20px',
                borderRadius: '10px',
                backgroundColor: '#e0e0e0',
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${filledPercentages[index]}%`,
                  backgroundColor: '#4E56C0',
                  borderRadius: '10px',
                  transition: 'width 0.2s ease-in-out',
                }}
                aria-valuenow={filledPercentages[index]}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
