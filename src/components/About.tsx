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
              I am a dedicated Full Stack Developer with a passion for building innovative web applications.
              My journey in software development has equipped me with a diverse skill set and a problem-solving mindset.
            </p>
            <p className="about-paragraph">
              I thrive on challenges and am constantly learning new technologies to stay at the forefront of the industry.
              My goal is to create impactful digital experiences that make a difference.
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
