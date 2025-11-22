import { useState } from 'react';
import { Sidebar } from './components/organisms/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Threats } from './pages/Threats';
import { Scanner } from './pages/Scanner';
import { Settings } from './pages/Settings';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'threats':
        return <Threats />;
      case 'scanner':
        return <Scanner />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div className="flex h-screen bg-nemesis-bg-primary overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-nemesis-accent-cyan/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-nemesis-accent-violet/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex w-full">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            {renderPage()}
            {/* <div className="text-white p-10"><h1>App Debug (No Pages)</h1></div> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
