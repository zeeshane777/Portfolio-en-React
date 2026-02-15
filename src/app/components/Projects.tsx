import { ProjectCard } from './ProjectCard';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const projects = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/1200px-X_logo_2023_%28white%29.png',
    title: 'Clone X',
    description: 'Clone de la plateforme X avec interface moderne et fonctionnalites sociales.',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/zeeshane777/Projet-Clone-X-'
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'LaFoire',
    description: 'Projet web LaFoire avec interface orientee presentation et navigation de contenus.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/zeeshane777/LaFoire'
  },
  {
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Site pour Thiam VTC',
    description: 'Site vitrine pour service VTC avec presentation, contact et mise en avant des prestations.',
    tags: ['WordPress', 'PHP', 'CSS'],
    githubUrl: 'https://github.com/zeeshane777/site-pour-Thiam-VTC'
  },
  {
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Combat Boxe JS',
    description: 'Simulation de combat entre deux combattants.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/zeeshane777/combatBoxe-JS'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Suivi des candidatures',
    description: 'Application de suivi des candidatures avec gestion des statuts et organisation des opportunites.',
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/zeeshane777/Suivi-des-candidatures'
  },
  {
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Simple ToDo List React',
    description: 'Application ToDo List en React pour gerer les taches du quotidien.',
    tags: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/zeeshane777/simple-ToDoList-en-React'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-gray-400 text-lg">
            Une selection de mes realisations recentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}