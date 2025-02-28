
import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingBag, CreditCard } from "lucide-react";

interface TransactionItemProps {
  type: "incoming" | "outgoing";
  amount: string;
  title: string;
  date: string;
  category: "shopping" | "food" | "other";
  index: number;
}

export default function TransactionItem({ 
  type, 
  amount, 
  title, 
  date, 
  category,
  index
}: TransactionItemProps) {
  const isIncoming = type === "incoming";
  
  const getIcon = () => {
    if (category === "shopping") return <ShoppingBag size={18} />;
    if (category === "food") return <Coffee size={18} />;
    return <CreditCard size={18} />;
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/80 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${isIncoming ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {isIncoming ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
        </div>
        
        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-secondary text-muted-foreground">
          {getIcon()}
        </div>
        
        <p className={`font-medium ${isIncoming ? 'text-green-600' : 'text-red-600'}`}>
          {isIncoming ? '+' : '-'}{amount}
        </p>
      </div>
    </motion.div>
  );
}
