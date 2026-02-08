import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
             <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6 text-gray-400">
                    Software Developer
                </div>
                <h1 className="text-6xl mb-6 tracking-tight">
                Hi, I'm <span className="italic">Sisira</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                A passionate software developer with 5 years of experience crafting elegant solutions 
                to complex problems, primarily focusing on backend development in .NET, Nodejs, Python, and C#, 
                and supported by frontend skills in React and Vue.js. Specialized in building scalable web applications and user experiences 
                that make a difference.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    >
                            View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-gray-600 rounded-full hover:bg-white/10 transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            <div className="mt-20 animate-bounce">
                <ArrowDown className="w-6 h-6 mx-auto text-gray-400 cursor-pointer" />
            </div>
      </div>
        </section>
    )
}