import { Code2, Rocket, Users, Award } from 'lucide-react';

export default function About() {
  const skills = [
    '.Net', 'c#',
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MS SQL',
    'MongoDB',
    'AWS', 'Docker', 'Azure', 'TailwindCSS', 'REST APIs', 'Kafka', 'Git'
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards and modern patterns'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-gray-400">About Me</div>
        <h2 className="text-5xl mb-12">Crafting Digital Experiences</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With 5 years of professional experience in software development, I've had the opportunity 
              to work on diverse projects ranging from small startups to enterprise-level applications.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech has been driven by curiosity and a passion for solving complex problems. 
              I believe in writing code that not only works but is also elegant, maintainable, and scalable.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or mentoring aspiring developers.
            </p>
          </div>
          
          <div>
            <h3 className="mb-6">Key Strengths</h3>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="space-y-2">
                  <item.icon className="w-8 h-8 text-white mb-2" />
                  <h4>{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}