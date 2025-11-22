import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Activity, TrendingUp } from 'lucide-react';
import { Header } from '../components/organisms/Header';
import { StatCard } from '../components/molecules/StatCard';
import { ThreatFeed } from '../components/organisms/ThreatFeed';
import { useAppStore } from '../store/useAppStore';
import { generateThreat } from '../lib/dataGenerator';

export const Dashboard: React.FC = () => {
  const { metrics, updateMetrics, addThreat, threats } = useAppStore();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate threat generation
  useEffect(() => {
    // Initial load
    setTimeout(() => setIsLoading(false), 1000);
    
    // Generate threats periodically
    const threatInterval = setInterval(() => {
      const newThreat = generateThreat();
      addThreat(newThreat);
      
      // Update metrics
      const activeThreats = threats.filter(t => t.status === 'Active').length + 1;
      const criticalCount = threats.filter(t => t.severity === 'Critical').length;
      
      updateMetrics({
        activeThreats,
        criticalVulnerabilities: criticalCount,
        mitigatedToday: Math.floor(Math.random() * 50) + 20,
        systemHealth: Math.max(70, 100 - activeThreats * 2),
      });
    }, 5000); // New threat every 5 seconds
    
    return () => clearInterval(threatInterval);
  }, [addThreat, updateMetrics, threats]);
  
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 border-4 border-nemesis-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-nemesis-text-secondary font-mono">Initializing Nemesis...</p>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <Header 
        title="Security Dashboard" 
        subtitle="Real-time threat monitoring and system analytics"
      />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Active Threats"
          value={metrics.activeThreats}
          icon={AlertTriangle}
          color="magenta"
          trend={-12}
          delay={0}
        />
        <StatCard
          title="Mitigated Today"
          value={metrics.mitigatedToday}
          icon={Shield}
          color="green"
          trend={8}
          delay={0.1}
        />
        <StatCard
          title="Critical Vulnerabilities"
          value={metrics.criticalVulnerabilities}
          icon={Activity}
          color="violet"
          trend={-5}
          delay={0.2}
        />
        <StatCard
          title="System Health"
          value={metrics.systemHealth}
          icon={TrendingUp}
          color="cyan"
          trend={3}
          delay={0.3}
        />
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Threat Feed - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ThreatFeed />
        </div>
        
        {/* Side Panel - Activity & Quick Actions */}
        <div className="space-y-6">
          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-display font-bold text-nemesis-text-primary mb-4">
              System Status
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-nemesis-text-secondary">CPU Usage</span>
                  <span className="text-sm font-mono text-nemesis-accent-cyan">45%</span>
                </div>
                <div className="h-2 bg-nemesis-bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-nemesis-accent-cyan to-nemesis-accent-violet"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-nemesis-text-secondary">Memory</span>
                  <span className="text-sm font-mono text-nemesis-accent-green">62%</span>
                </div>
                <div className="h-2 bg-nemesis-bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '62%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-nemesis-accent-green to-nemesis-accent-cyan"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-nemesis-text-secondary">Network</span>
                  <span className="text-sm font-mono text-nemesis-accent-violet">78%</span>
                </div>
                <div className="h-2 bg-nemesis-bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-nemesis-accent-violet to-nemesis-accent-magenta"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-display font-bold text-nemesis-text-primary mb-4">
              Quick Actions
            </h3>
            
            <div className="space-y-2">
              <button className="w-full btn-secondary justify-start">
                <Shield size={16} className="mr-2" />
                Run Full Scan
              </button>
              <button className="w-full btn-secondary justify-start">
                <Activity size={16} className="mr-2" />
                Update Signatures
              </button>
              <button className="w-full btn-secondary justify-start">
                <AlertTriangle size={16} className="mr-2" />
                Generate Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
