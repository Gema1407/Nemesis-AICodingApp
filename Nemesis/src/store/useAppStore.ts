import { create } from 'zustand';
import type { Threat, SystemMetrics, User } from '../types';

interface AppState {
  // User
  user: User | null;
  setUser: (user: User) => void;
  
  // Threats
  threats: Threat[];
  addThreat: (threat: Threat) => void;
  updateThreatStatus: (id: string, status: Threat['status']) => void;
  
  // System metrics
  metrics: SystemMetrics;
  updateMetrics: (metrics: Partial<SystemMetrics>) => void;
  
  // UI state
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  
  // Connection status
  isConnected: boolean;
  setConnectionStatus: (status: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial user (demo)
  user: {
    name: 'Admin User',
    email: 'admin@nemesis.cyber',
    role: 'Security Administrator',
  },
  setUser: (user) => set({ user }),
  
  // Threats
  threats: [],
  addThreat: (threat) => set((state) => ({
    threats: [threat, ...state.threats].slice(0, 50), // Keep last 50
  })),
  updateThreatStatus: (id, status) => set((state) => ({
    threats: state.threats.map((t) => 
      t.id === id ? { ...t, status } : t
    ),
  })),
  
  // Metrics
  metrics: {
    activeThreats: 0,
    mitigatedToday: 0,
    criticalVulnerabilities: 0,
    systemHealth: 100,
  },
  updateMetrics: (metrics) => set((state) => ({
    metrics: { ...state.metrics, ...metrics },
  })),
  
  // UI
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  // Connection
  isConnected: true,
  setConnectionStatus: (status) => set({ isConnected: status }),
}));
