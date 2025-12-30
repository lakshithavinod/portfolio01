import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      icon: <GraduationCap size={24} />,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      year: '2020 - 2024',
      description: 'Focused on software engineering, algorithms, and web development.',
    },
    {
      icon: <Award size={24} />,
      degree: 'Advanced Level',
      institution: 'School Name',
      year: '2018 - 2020',
      description: 'Mathematics, Physics, and Information Technology stream.',
    },
    {
      icon: <BookOpen size={24} />,
      degree: 'Certifications & Online Courses',
      institution: 'Various Platforms',
      year: 'Ongoing',
      description: 'Continuous learning through online courses in web development, cloud computing, and more.',
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
