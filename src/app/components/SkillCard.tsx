import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
}

export function SkillCard({ icon: Icon, name }: SkillCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full">
          <Icon className="w-12 h-12 text-blue-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
    </div>
  );
}