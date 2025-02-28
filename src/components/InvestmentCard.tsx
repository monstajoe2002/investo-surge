
import { motion } from "framer-motion";
import { Sparkles, AlertCircle, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";

interface InvestmentCardProps {
  title: string;
  description: string;
  yield: string;
  trend: "up" | "down" | "neutral";
  riskLevel: "low" | "medium" | "high";
  isAiRecommended?: boolean;
  index: number;
}

export default function InvestmentCard({
  title,
  description,
  yield: yieldValue,
  trend,
  riskLevel,
  isAiRecommended = false,
  index
}: InvestmentCardProps) {
  const getRiskColor = () => {
    switch (riskLevel) {
      case "low": return "bg-green-100 text-green-600";
      case "medium": return "bg-amber-100 text-amber-600";
      case "high": return "bg-red-100 text-red-600";
      default: return "bg-green-100 text-green-600";
    }
  };
  
  const getTrendIcon = () => {
    switch (trend) {
      case "up": return <TrendingUp size={14} className="text-green-600" />;
      case "down": return <TrendingDown size={14} className="text-red-600" />;
      default: return null;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className="rounded-xl border border-border bg-card p-4 hover:shadow-md transition-all duration-300 relative card-hover"
    >
      {isAiRecommended && (
        <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-lg font-medium flex items-center gap-1">
          <Sparkles size={12} />
          <span>AI Pick</span>
        </div>
      )}
      
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <div className={`text-xs font-medium ${getRiskColor()} px-2 py-0.5 rounded-lg`}>
            {riskLevel} risk
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="pt-2 flex justify-between items-center border-t border-border">
          <div className="flex items-center gap-1">
            <span className="font-medium text-sm">{yieldValue} yield</span>
            {getTrendIcon()}
          </div>
          
          <button className="button-icon">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
