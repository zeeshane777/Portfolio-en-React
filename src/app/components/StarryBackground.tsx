import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Générer 150 étoiles aléatoires
    const generatedStars: Star[] = [];
    for (let i = 0; i < 150; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Étoiles scintillantes */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Étoiles filantes occasionnelles */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
        }}
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [0, window.innerHeight / 2],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeOut"
        }}
      />

      <motion.div
        className="absolute w-1 h-1 bg-blue-300 rounded-full"
        style={{
          boxShadow: '0 0 10px 2px rgba(147, 197, 253, 0.5)',
        }}
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [window.innerHeight / 3, window.innerHeight],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 12,
          delay: 5,
          ease: "easeOut"
        }}
      />

      {/* Gradient overlay pour meilleur contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/60" />
    </div>
  );
}
