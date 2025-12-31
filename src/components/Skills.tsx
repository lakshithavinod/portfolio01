import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    { name: 'Computer Hardware', level: 90 },
    { name: 'Graphic Design', level: 80 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'Microsoft Office', level: 70 },
  ];

  const languages = [
    { name: 'Sinhala', level: 100, proficiency: 'Fluent' },
    { name: 'English', level: 70, proficiency: 'Intermediate' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-content">
          <div className="skills-category">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-item" style={{ animationDelay: `${(index + 8) * 0.1}s` }}>
                  <div className="language-header">
                    <span className="skill-name">{lang.name}</span>
                    <span className="language-proficiency">{lang.proficiency}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill language-fill"
                      style={{
                        width: isVisible ? `${lang.level}%` : '0%',
                        transitionDelay: `${(index + 8) * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
