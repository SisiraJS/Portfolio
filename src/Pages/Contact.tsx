import { Mail, Linkedin, Github, Download } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sisiraozhoor@gmail.com',
      href: 'mailto:sisiraozhoor@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/sisira-js',
      href: 'https://www.linkedin.com/in/sisira-js'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/SisiraJS',
      href: 'https://github.com/SisiraJS'
    },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sisira-Jayanthi-Sasikumar_Resume_.pdf';  // Path to your resume file
    link.download = 'Sisira_Resume.pdf';  // Filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-4 text-gray-400">Get In Touch</div>
        <h2 className="text-5xl mb-6">Let's Work Together</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-900 border border-gray-800 rounded-lg hover:shadow-md hover:shadow-gray-900/50 transition-shadow group"
            >
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                <link.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">{link.label}</div>
                <div className="font-medium">{link.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            onClick={downloadResume} 
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}