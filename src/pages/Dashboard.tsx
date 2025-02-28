
import { motion } from "framer-motion";
import NavbarExtended from "../components/NavbarExtended";
import CardBalance from "../components/CardBalance";
import TransactionItem from "../components/TransactionItem";
import InvestmentCard from "../components/InvestmentCard";
import { 
  Search, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Bell, 
  ShoppingBag, 
  CreditCard,
  Coffee,
  Filter,
  ChevronRight
} from "lucide-react";

export default function Dashboard() {
  const transactions = [
    { 
      type: "outgoing", 
      amount: "$145.00", 
      title: "Amazon Purchase", 
      date: "Today, 10:30 AM", 
      category: "shopping" 
    },
    { 
      type: "incoming", 
      amount: "$1,250.00", 
      title: "Salary Deposit", 
      date: "Yesterday, 12:05 PM", 
      category: "other" 
    },
    { 
      type: "outgoing", 
      amount: "$34.50", 
      title: "Starbucks Coffee", 
      date: "Aug 21, 4:15 PM", 
      category: "food" 
    },
    { 
      type: "outgoing", 
      amount: "$90.00", 
      title: "Phone Bill", 
      date: "Aug 20, 3:20 PM", 
      category: "other" 
    }
  ];
  
  const investmentSuggestions = [
    {
      title: "Tech Growth Fund",
      description: "High growth potential with tech sector focus",
      yield: "8-12%",
      trend: "up",
      riskLevel: "medium",
      isAiRecommended: true
    },
    {
      title: "Sustainable Energy ETF",
      description: "Environmentally conscious investment opportunity",
      yield: "5-7%",
      trend: "up",
      riskLevel: "low",
      isAiRecommended: false
    },
    {
      title: "Global Market Index",
      description: "Diversified exposure to global markets",
      yield: "3-6%",
      trend: "neutral",
      riskLevel: "low",
      isAiRecommended: false
    }
  ];
  
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <NavbarExtended />
      
      <main className="pt-20 pb-28 page-container">
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4"
          >
            <div>
              <span className="chip mb-2 inline-block">Dashboard</span>
              <h1 className="text-2xl font-bold font-display">Welcome back, Alex</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="search"
                  placeholder="Search transactions..."
                  className="pl-10 pr-4 py-2 bg-secondary/50 rounded-lg border-0 focus:ring-2 focus:ring-primary/20 hidden md:block w-60"
                />
              </div>
              
              <button className="button-icon relative">
                <Bell size={18} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </motion.div>
          
          {/* Balance Card */}
          <CardBalance />
        </section>
        
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass-card rounded-xl p-4 card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-muted-foreground text-sm">Monthly Spending</p>
                  <h3 className="text-xl font-semibold font-display">$2,438.45</h3>
                </div>
                <motion.div 
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="p-2 bg-red-100 rounded-lg text-red-600"
                >
                  <ShoppingBag size={20} />
                </motion.div>
              </div>
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">75% of monthly budget</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card rounded-xl p-4 card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-muted-foreground text-sm">Investments</p>
                  <h3 className="text-xl font-semibold font-display">$8,125.00</h3>
                </div>
                <motion.div 
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="p-2 bg-green-100 rounded-lg text-green-600"
                >
                  <TrendingUp size={20} />
                </motion.div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-green-600 text-sm font-medium">+5.6%</span>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card rounded-xl p-4 card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-muted-foreground text-sm">Rewards Points</p>
                  <h3 className="text-xl font-semibold font-display">3,852</h3>
                </div>
                <motion.div 
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="p-2 bg-amber-100 rounded-lg text-amber-600"
                >
                  <Zap size={20} />
                </motion.div>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-xs text-muted-foreground">148 points until next reward</span>
              </div>
            </motion.div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <button className="button-ghost text-sm flex items-center gap-1">
                <Filter size={14} />
                <span>Filter</span>
              </button>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="space-y-1">
                {transactions.map((transaction, idx) => (
                  <TransactionItem 
                    key={idx}
                    index={idx}
                    type={transaction.type as "incoming" | "outgoing"}
                    amount={transaction.amount}
                    title={transaction.title}
                    date={transaction.date}
                    category={transaction.category as "shopping" | "food" | "other"}
                  />
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-border">
                <button className="w-full text-primary text-sm font-medium flex items-center justify-center gap-1 hover:underline">
                  <span>View all transactions</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>
          
          <section className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Investment Picks</h2>
              <div className="flex items-center gap-1 text-sm text-primary">
                <Sparkles size={14} />
                <span>AI-powered</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {investmentSuggestions.map((investment, idx) => (
                <InvestmentCard
                  key={idx}
                  index={idx}
                  title={investment.title}
                  description={investment.description}
                  yield={investment.yield}
                  trend={investment.trend as "up" | "down" | "neutral"}
                  riskLevel={investment.riskLevel as "low" | "medium" | "high"}
                  isAiRecommended={investment.isAiRecommended}
                />
              ))}
              
              <button className="button-outline w-full flex items-center justify-center gap-1">
                <span>View All Investments</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
