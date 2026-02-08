import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../Components/ImageWithFallBack';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

export default function Projects() {

  const projects: Project[] = [
    {
      id: 1,
      title: 'Customer Service Application',
      description: 'Developed a comprehensive customer service platform using React and .NET Core. Implemented responsive UI with seamless API integration, migrated database from MongoDB to PostgreSQL, and integrated Azure SSO and Keycloak for secure authentication. Dockerized for scalable deployment.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlJTIwcG9ydGFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDU2MDAzNXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', '.NET Core', 'PostgreSQL', 'Azure SSO', 'Docker'],
      year: '2025'
    },
    {
      id: 2,
      title: 'Financial Simulator App - VERICAST',
      description: 'Independently led architecture and development of a Simulator App for financial institutions. Built scalable backend systems using ASP.NET Core and MS SQL with Angular frontend. Engineered high-performance APIs and optimized legacy systems for improved efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGdyYXBocyUyMEtQSSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA1NTk5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['ASP.NET Core', 'MS SQL', 'Angular', 'REST APIs'],
      year: '2021-2025'
    },
    {
      id: 3,
      title: 'RECSPERTS - Class Management Platform',
      description: 'Designed and implemented a full-stack online/offline class management platform. Built REST APIs and React-based UIs using NodeJS and PostgreSQL. Integrated AWS Cognito for authentication and S3 for secure storage, ensuring scalability and security.',
      image: 'https://images.unsplash.com/photo-1758272421578-840698d05a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjbGFzcyUyMGVkdWNhdGlvbiUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MDU1OTcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NodeJS', 'React', 'PostgreSQL', 'AWS Cognito', 'AWS S3'],
      year: '2021-2025'
    },
    {
      id: 4,
      title: 'WAREHOWZ - Warehouse Management',
      description: 'Built a secure, role-based web application for warehouse space management. Developed using .NET Core and MongoDB with robust authentication systems. Implemented comprehensive access control and ensured data integrity across the platform.',
      image: 'https://images.unsplash.com/photo-1768796373634-db43bfd5f064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc3MDU1OTcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['.NET Core', 'MongoDB', 'Authentication', 'Role-Based Access'],
      year: '2021-2025'
    }
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 text-gray-400">Portfolio</div>
        <h2 className="text-5xl mb-4">Selected Work</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          A collection of projects I've worked on over the past 5 years, ranging from enterprise 
          solutions to consumer applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-900/50 transition-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/90 backdrop-blur-sm rounded-full text-sm">
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}