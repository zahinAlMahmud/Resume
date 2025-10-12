import React from 'react';
import Image from '../assets/image/zahin.jpg';

function Home() {
  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 rounded"
      style={{
        background: 'linear-gradient(135deg, #e0e0e0, #f5f5f5, #333)',
        color: 'white',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section: Name, Role, Skills */}
      <div className="text-center text-md-start flex-1 mb-3 mb-md-0">
        <h2
          className="fw-bold mb-2"
          style={{ fontSize: 'clamp(20px, 4vw, 32px)' }}
        >
          Zahin Al Mahmud
        </h2>
        <h5
          className="mb-3"
          style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
        >
          Frontend & Backend Developer
        </h5>

        {/* Skills badges */}
        <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-md-start">
          <span className="badge bg-dark">React.js</span>
          <span className="badge bg-secondary">Node.js</span>
          <span className="badge bg-info text-dark">Vue.js</span>
          <span className="badge bg-success">API Integration</span>
        </div>
      </div>

      {/* Right Section: Profile Image */}
      <div className="d-flex justify-content-center flex-shrink-0 mt-3 mt-md-0">
        <img
          src={Image}
          alt="Profile"
          className="img-fluid"
          style={{
            width: 'clamp(120px, 25vw, 150px)',
            height: 'clamp(120px, 25vw, 150px)',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </div>
  );
}

export default Home;
