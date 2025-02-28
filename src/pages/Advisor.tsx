import { useState } from "react";
import { motion } from "framer-motion";
import NavbarExtended from "../components/NavbarExtended";
import InvestmentCard from "../components/InvestmentCard";
import { 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  BarChart4, 
  RefreshCw, 
  Sparkles, 
  Search,
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Lightbulb
} from "lucide-react";

export default function Advisor() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const recommendations = [
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
      isAiRecommended: true
    },
    {
      title: "Global Market Index",
      description: "Diversified exposure to global markets",
      yield: "3-6%",
      trend: "neutral",
      riskLevel: "low",
      isAiRecommended: false
    },
    {
      title: "Emerging Markets Fund",
      description: "High potential in developing economies",
      yield: "9-15%",
      trend: "up",
      riskLevel: "high",
      isAiRecommended: false
    }
  ];
  
  const marketInsights = [
    {
      title: "Tech Sector Outlook",
      sentiment: "positive",
      change: "+2.3%",
      summary: "Tech sector continues to show strong growth potential in Q3"
    },
    {
      title: "Renewable Energy",
      sentiment: "positive",
      change: "+4.1%",
      summary: "Government incentives boosting renewable energy investments"
    },
    {
      title: "Real Estate",
      sentiment: "negative",
      change: "-1.8%",
      summary: "Rising interest rates impacting real estate market valuations"
    },
    {
      title: "Global Markets",
      sentiment: "neutral",
      change: "+0.5%",
      summary: "Mixed signals from international markets amid policy changes"
    }
  ];
  
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return <ArrowUpRight size={16} className="text-green-600" />;
      case "negative": return <ArrowDownRight size={16} className="text-red-600" />;
      default: return <Globe size={16} className="text-amber-600" />;
    }
  };
  
  const getSentimentClass = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "bg-green-100 text-green-600";
      case "negative": return "bg-red-100 text-red-600";
      default: return "bg-amber-100 text-amber-600";
    }
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
              <span className="chip mb-2 inline-block">AI Advisor</span>
              <h1 className="text-2xl font-bold font-display">Smart Investment Guidance</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                className={`button-outline flex items-center gap-2 ${isLoading ? 'opacity-80' : ''}`}
                disabled={isLoading}
              >
                <RefreshCw size={16} className={isLoading ? 'animate-spin-slow' : ''} />
                <span>{isLoading ? 'Analyzing market...' : 'Refresh insights'}</span>
              </button>
            </div>
          </motion.div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-xl text-white p-6 lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} />
                  <h2 className="text-lg font-semibold">AI-Powered Analysis</h2>
                </div>
                <p className="text-white/80 max-w-md">
                  Our AI has analyzed your spending patterns and market conditions to provide personalized investment recommendations.
                </p>
                <div className="pt-2">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
                    <span>Get personalized advice</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm"></div>
                <div className="relative p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield size={18} />
                      <span className="font-medium">Risk Profile</span>
                    </div>
                    <span className="chip-primary bg-white/20 text-white">Moderate</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Conservative</span>
                      <span>Aggressive</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-xs text-white/70">
                    Based on your age, income, and financial goals
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart4 size={20} className="text-primary" />
              <h2 className="text-lg font-semibold">Portfolio Overview</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Growth</span>
                <span className="text-green-600 font-medium">+12.4%</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Stocks</span>
                  <span>60%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Bonds</span>
                  <span>25%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Cash</span>
                  <span>15%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: "15%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.section>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Market Insights</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="search"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-secondary/50 rounded-lg border-0 focus:ring-2 focus:ring-primary/20 w-40 md:w-60"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketInsights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                  className="bg-card border border-border rounded-xl p-4 card-hover"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{insight.title}</h3>
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg ${getSentimentClass(insight.sentiment)}`}>
                      {getSentimentIcon(insight.sentiment)}
                      <span className="text-xs font-medium">{insight.change}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">{insight.summary}</p>
                  
                  <div className="mt-4 pt-2 border-t border-border flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Lightbulb size={14} className="text-amber-500" />
                      <span className="text-xs text-muted-foreground">AI Analysis</span>
                    </div>
                    
                    <button className="text-xs text-primary font-medium flex items-center gap-1">
                      <span>Read more</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          <section className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recommended For You</h2>
            </div>
            
            <div className="space-y-4">
              {recommendations.slice(0, 3).map((investment, idx) => (
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
              
              <button className="button-primary w-full flex items-center justify-center gap-1">
                <span>View All Recommendations</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
