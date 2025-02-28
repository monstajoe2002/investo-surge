
import { motion } from "framer-motion";
import { CreditCard, DollarSign, TrendingUp } from "lucide-react";

export default function CardBalance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full relative overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAAdjEwME0wIDEwMGgxMDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <p className="text-white/80 text-sm">Current Balance</p>
            <h3 className="text-white text-3xl font-semibold font-display tracking-tight">$12,540.33</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
            <CreditCard className="text-white" size={24} />
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
            <TrendingUp size={16} className="text-white" />
            <span className="text-white/90 text-sm">+5.2%</span>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-white/80 text-sm">•••• 4328</p>
            <DollarSign size={16} className="text-white/80" />
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-white/30"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
}
