import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solver',
      description: 'Creative solutions to complex challenges',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Fast Learner',
      description: 'Always exploring new technologies',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Collaborative and communicative',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate developer who loves turning ideas into reality through code.
              With a strong foundation in web development and a keen eye for design,
              I create digital experiences that are not only functional but also beautiful.
            </p>
            <p className="about-paragraph">
              My journey in technology is driven by curiosity and a desire to make an impact.
              I believe in continuous learning, clean code, and the power of collaboration
              to build something truly remarkable.
            </p>
            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or brainstorming the next big idea.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
