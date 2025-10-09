import React, { useState, useEffect } from 'react';

function Contact() {
  const contacts = [
    {
      text: 'This is my Facebook',
      url: 'https://facebook.com',
      bg: 'bg-primary text-white',
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    },
    {
      text: 'This is LinkedIn',
      url: 'https://linkedin.com',
      bg: 'bg-info text-white',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    },
    {
      text: 'This is my GitHub',
      url: 'https://github.com',
      bg: 'bg-dark text-white',
      img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contacts.length);
    }, 2500); // change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      {/* Heading */}
      <h1 className="text-center mb-4">Contact Me</h1>

      {/* Animated Contact Section */}
      <div
        className={`d-flex justify-content-center align-items-center vh-50 ${contacts[index].bg}`}
        style={{ transition: 'background 0.5s ease',height:'200px' }}
      >
        <div className="d-flex align-items-center gap-3">
          <img
            src={contacts[index].img}
            alt={contacts[index].text}
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
          <a
            href={contacts[index].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none fw-bold"
            style={{ fontSize: '1.5rem' }}
          >
            {contacts[index].text}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
