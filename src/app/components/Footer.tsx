import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Développeur Full Stack passionné, créant des expériences web modernes et performantes.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left text-sm"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left text-sm"
              >
                Compétences
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left text-sm"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/zeeshane777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abeed-zeeshane-houssenaly-188178339/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:abeedzeeshane3@gmail.com"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-2">
            © {currentYear} Houssenaly Abeed Zeeshane. Créé avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> et React
          </p>
        </div>
      </div>
    </footer>
  );
}

