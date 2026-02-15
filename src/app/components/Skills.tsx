import { Atom, Code2, Database, Server, Globe, Palette, GitBranch, Wind, Coffee } from 'lucide-react';
import { SkillCard } from './SkillCard';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { icon: Code2, name: 'JavaScript' },
  { icon: Server, name: 'Node.js' },
  { icon: Globe, name: 'Next.js' },
  { icon: Atom, name: 'React' },
  { icon: Wind, name: 'Tailwind CSS' },
  { icon: Globe, name: 'HTML' },
  { icon: Palette, name: 'CSS' },
  { icon: Coffee, name: 'Java' },
  { icon: Code2, name: 'TypeScript' },
  { icon: Code2, name: 'Angular' },
  { icon: Globe, name: 'WordPress' },
  { icon: Server, name: 'PHP' },
  { icon: Database, name: 'MongoDB' },
  { icon: GitBranch, name: 'Git/GitHub' }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Competences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
