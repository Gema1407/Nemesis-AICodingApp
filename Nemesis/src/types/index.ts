// Threat types
export type ThreatType = 'DDoS' | 'Malware' | 'Phishing' | 'Ransomware' | 'Brute Force';
export type ThreatStatus = 'Active' | 'Mitigated' | 'Investigating';
export type SeverityLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export interface Threat {
  id: string;
  type: ThreatType;
  sourceCountry: string;
  sourceIP: string;
  targetCountry: string;
  targetIP: string;
  severity: SeverityLevel;
  status: ThreatStatus;
  timestamp: Date;
  description: string;
}

export interface GlobeArc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  threat: Threat;
}

export interface Vulnerability {
  id: string;
  name: string;
  category: string;
  severity: SeverityLevel;
  affected: string;
  discovered: Date;
  status: 'Open' | 'Patched' | 'In Progress';
}

export interface SystemMetrics {
  activeThreats: number;
  mitigatedToday: number;
  criticalVulnerabilities: number;
  systemHealth: number;
}

export interface User {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}
