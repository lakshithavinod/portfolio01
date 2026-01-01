import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build a message from the form fields and open WhatsApp Web (or app)
    // Use international format (country code +94) without plus sign for wa.me
    const phone = '94762075906';
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Also open the user's email client with the same content
    const mailTo = 'lakshithavinod25@gmail.com';
    const mailSubject = formData.subject || 'New message from contact form';
    const mailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailUrl = `mailto:${mailTo}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    // Open mail client and WhatsApp in new tabs/windows so user can confirm/send
    window.open(mailUrl, '_blank');
    window.open(url, '_blank');

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'lakshithavinod25@gmail.com',
      link: 'mailto:lakshithavinod25@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '0762075906',
      link: 'tel:0762075906',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Sri Lanka',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://m.facebook.com/profile.php?id=61560126956619', label: 'Facebook' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/lakshitha-vinod-3b598138a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
    { icon: <Github size={20} />, url: '#', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-wrapper">
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3 className="contact-info-title">{info.title}</h3>
                  <p className="contact-info-value">{info.value}</p>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <h3 className="contact-social-title">Connect With Me</h3>
              <div className="contact-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link-large"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@gmail.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>LAKSHITHA VINOD</p>
      </footer>
    </section>
  );
};

export default Contact;
