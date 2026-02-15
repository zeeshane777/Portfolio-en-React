import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Houssenaly Abeed Zeeshane
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-3xl text-blue-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Étudiant Développeur Full Stack
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Passionné par le développement web, je crée des applications modernes et performantes. 
          Toujours à la recherche de nouveaux défis pour améliorer mes compétences et contribuer à des projets innovants.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button onClick={() => scrollToSection('projects')}>
            Voir mes projets
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Me contacter
          </Button>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/zeeshane777" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/abeed-zeeshane-houssenaly-188178339/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:abeedzeeshane3@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

