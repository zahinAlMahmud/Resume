import React, { useState, useEffect } from 'react';
import ProfileImage from '../assets/image/myimage.jpg';

function About() {
  const phrases = [
    "Developer",
    "Frontend Developer",
    "Backend Developer",
    "API Integration",
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayBetweenPhrases = 1000;

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === 0) setFade(true);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      } else {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setFade(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div
      className="d-flex flex-column flex-lg-row align-items-center justify-content-center p-3 p-lg-5 rounded"
      style={{
        minHeight: '400px',
        color: '#fff',
        gap: '30px',
        background: 'linear-gradient(135deg, #4E56C0, #7393B3)',
      }}
    >
      {/* Left Side - Text Section */}
      <div className="text-section text-center text-lg-start flex-1">
        <h2
          className="fw-bold mb-4"
          style={{
            fontSize: 'clamp(22px, 5vw, 32px)',
            textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.5s ease-in',
          }}
        >
          {text} <span style={{ borderRight: '2px solid #fff' }}></span>
        </h2>
        <p
          style={{
            color: '#fff',
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            lineHeight: '1.6',
          }}
        >
          Hello! 👋 I’m <strong>Zahin AlMahmud</strong>, a passionate Full Stack Developer
          who loves turning ideas into interactive, user-friendly web experiences. I build
          clean, responsive interfaces using <strong>React.js</strong>, <strong>Bootstrap</strong>,
          and <strong>Tailwind CSS</strong>, and I develop robust backend solutions with 
          <strong>Node.js</strong> and <strong>API integration</strong>. I enjoy creating 
          end-to-end web applications that are efficient, scalable, and maintainable.
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="image-section d-flex justify-content-center mt-4 mt-lg-0">
        <img
          src={ProfileImage}
          alt="Zahin Al Mahmud"
          style={{
            width: 'clamp(150px, 35vw, 300px)',
            height: 'auto',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #fff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.5s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>
    </div>
  );
}

export default About;
