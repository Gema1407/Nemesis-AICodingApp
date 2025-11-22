import type { Threat, ThreatType, SeverityLevel, ThreatStatus } from '../types';
import { generateId } from './utils';

const threatTypes: ThreatType[] = ['DDoS', 'Malware', 'Phishing', 'Ransomware', 'Brute Force'];
const severities: SeverityLevel[] = ['Critical', 'High', 'Medium', 'Low'];
const statuses: ThreatStatus[] = ['Active', 'Investigating'];

const countries = [
  { name: 'United States', lat: 37.0902, lng: -95.7129 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
];

const descriptions = {
  'DDoS': 'Distributed denial-of-service attack detected. Multiple sources flooding target with traffic.',
  'Malware': 'Malicious software detected. Attempting to compromise system integrity.',
  'Phishing': 'Phishing attempt identified. Suspicious email campaign targeting credentials.',
  'Ransomware': 'Ransomware encryption detected. Immediate isolation recommended.',
  'Brute Force': 'Brute force authentication attempt. Multiple failed login attempts detected.',
};

const generateIP = (): string => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
};

export const generateThreat = (): Threat => {
  const type = threatTypes[Math.floor(Math.random() * threatTypes.length)];
  const severity = severities[Math.floor(Math.random() * severities.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  
  const sourceCountry = countries[Math.floor(Math.random() * countries.length)];
  const targetCountry = countries[Math.floor(Math.random() * countries.length)];
  
  return {
    id: generateId(),
    type,
    sourceCountry: sourceCountry.name,
    sourceIP: generateIP(),
    targetCountry: targetCountry.name,
    targetIP: generateIP(),
    severity,
    status,
    timestamp: new Date(),
    description: descriptions[type],
  };
};

export const generateGlobeArc = (threat: Threat) => {
  const sourceCountry = countries.find(c => c.name === threat.sourceCountry);
  const targetCountry = countries.find(c => c.name === threat.targetCountry);
  
  if (!sourceCountry || !targetCountry) return null;
  
  const colorMap = {
    Critical: '#FF0080',
    High: '#FFB800',
    Medium: '#8B5CF6',
    Low: '#00FF88',
  };
  
  return {
    startLat: sourceCountry.lat,
    startLng: sourceCountry.lng,
    endLat: targetCountry.lat,
    endLng: targetCountry.lng,
    color: colorMap[threat.severity],
    threat,
  };
};
