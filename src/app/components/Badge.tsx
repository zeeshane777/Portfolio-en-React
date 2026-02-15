interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'violet' | 'green' | 'orange';
}

export function Badge({ children, variant = 'blue' }: BadgeProps) {
  const variants = {
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    violet: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    green: 'bg-green-500/20 text-green-300 border-green-500/30',
    orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
}
