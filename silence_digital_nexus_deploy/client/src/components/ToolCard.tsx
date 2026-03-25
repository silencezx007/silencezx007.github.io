import { Tool } from '@/config/tools.config';
import { useMode } from '@/contexts/ModeContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const { mode } = useMode();

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`
        group relative h-full p-6 rounded-xl overflow-hidden cursor-pointer
        ${mode === 'zen' 
          ? 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200' 
          : 'bg-card border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
        }
        backdrop-blur-md transition-all duration-300
      `}
    >
      {/* Cyberpunk Glitch Effect Layer */}
      {mode === 'cyberpunk' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-cyan-500/5 to-magenta-500/5" />
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className={`
            p-3 rounded-lg 
            ${mode === 'zen' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-primary/10 text-primary border border-primary/20'
            }
          `}>
            <tool.icon className="w-6 h-6" />
          </div>
          
          {tool.externalUrl ? (
             <ExternalLink className={`
              w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1
              ${mode === 'zen' ? 'text-muted-foreground' : 'text-primary'}
            `} />
          ) : (
            <ArrowUpRight className={`
              w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1
              ${mode === 'zen' ? 'text-muted-foreground' : 'text-primary'}
            `} />
          )}
        </div>

        <h3 className={`
          text-lg font-bold mb-2 tracking-tight
          ${mode === 'cyberpunk' && 'group-hover:text-primary transition-colors'}
        `}>
          {tool.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tool.description}
        </p>

        {/* Experimental Tag */}
        {tool.isExperimental && (
          <div className="mt-auto pt-4">
            <span className={`
              text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded-full
              ${mode === 'zen' 
                ? 'bg-amber-100 text-amber-700' 
                : 'bg-primary/10 text-primary border border-primary/20'
              }
            `}>
              Experimental
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );

  if (tool.externalUrl) {
    return (
      <a href={tool.externalUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return (
    <Link href={tool.path}>
      {CardContent}
    </Link>
  );
}
