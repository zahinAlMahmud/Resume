import React from 'react';

function Contact() {
  const contacts = [
    {
      text: 'Facebook',
      url: 'https://facebook.com',
      bg: '#1877F2',
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    },
    {
      text: 'LinkedIn',
      url: 'https://linkedin.com',
      bg: '#0A66C2',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    },
    {
      text: 'GitHub',
      url: 'https://github.com',
      bg: '#333',
      img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      text: 'Email',
      url: 'mailto:your.email@example.com', // replace with your email
      bg: '#EA4335',
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
    },
    {
      text: 'WhatsApp',
      url: 'https://wa.me/1234567890', // replace with your WhatsApp number
      bg: '#25D366',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center g-4">
        {contacts.map((contact, index) => (
          <div
            className="col-6 col-md-4 d-flex justify-content-center"
            key={index}
          >
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex flex-column align-items-center justify-content-center text-white p-4 rounded shadow"
              style={{
                width: '180px',
                height: '180px',
                backgroundColor: contact.bg,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <img
                src={contact.img}
                alt={contact.text}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain',
                  marginBottom: '15px',
                }}
              />
              <span className="fw-bold text-center">{contact.text}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
