export type OperatingState = 'RUNNING' | 'IDLE' | 'MAINTENANCE' | 'OFFLINE' | 'DEGRADED';
export type ConditionStatus = 'NORMAL' | 'REVIEW' | 'INVESTIGATE' | 'CRITICAL';
export type GatewayStatus = 'CONNECTED' | 'SYNCING' | 'STORE_AND_FORWARD' | 'DEGRADED';

export interface SensorNode {
  id: string;
  name: string;
  type: 'Vibration' | 'Temperature' | 'Pressure' | 'Flow' | 'Motor Current' | 'RPM';
  unit: string;
  currentValue: number;
  nominalRange: [number, number];
  sampleRate: string;
  quality: number;
  status: 'NORMAL' | 'DEVIATION' | 'ATTENTION';
  lastUpdated: string;
}

export interface Asset {
  id: string;
  name: string;
  code: string;
  type: string;
  plant: string;
  line: string;
  state: OperatingState;
  condition: ConditionStatus;
  quality: number;
  sensors: SensorNode[];
  runtimeHours: number;
  lastEvent: string;
  lastEventDescription: string;
  maintenanceHistory: MaintenanceEvent[];
}

export interface MaintenanceEvent {
  id: string;
  date: string;
  title: string;
  type: 'INSPECTION' | 'MAINTENANCE' | 'TREND' | 'CONDITION_SIGNAL' | 'ENGINEERING_REVIEW';
  technician?: string;
  notes: string;
  status: 'COMPLETED' | 'PENDING_REVIEW' | 'FLAGGED';
}

export interface TelemetryPoint {
  timestamp: string;
  vibration: number;
  temperature: number;
  pressure: number;
  flow: number;
  motorCurrent: number;
  isDeviation?: boolean;
  deviationNote?: string;
}

export interface EdgeGateway {
  id: string;
  name: string;
  location: string;
  status: GatewayStatus;
  bufferedPackets: number;
  latencyMs: number;
  throughput: string;
  lastSync: string;
  firmware: string;
}

export interface AnomalyInvestigation {
  id: string;
  assetId: string;
  assetName: string;
  signal: string;
  severity: 'REVIEW' | 'INVESTIGATE' | 'ELEVATED';
  detectedAt: string;
  summary: string;
  evidence: string[];
  recommendedAction: string;
  correlatedSignals: {
    name: string;
    correlation: string;
    trend: 'rising' | 'stable' | 'fluctuating';
  }[];
}
