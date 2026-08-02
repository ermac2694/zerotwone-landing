export type ViewTab = 'overview' | 'providers' | 'builder' | 'graph' | 'assets' | 'enterprise' | 'philosophy';

export interface AIProvider {
  id: string;
  name: string;
  category: 'LLM' | 'Multimodal' | 'Audio' | 'Video' | 'Image' | 'Local';
  models: string[];
  latency: string;
  status: 'operational' | 'degraded';
  icon: string;
  description: string;
}

export interface WorkflowStage {
  id: string;
  name: string;
  provider: string;
  model: string;
  type: 'prompt' | 'vision' | 'audio' | 'video' | 'approval' | 'code';
  status: 'completed' | 'running' | 'queued' | 'failed' | 'idle';
  durationMs: number;
  credits: number;
  input: string;
  output: string;
  requiresHumanApproval?: boolean;
}

export interface ExecutionLog {
  timestamp: string;
  stageId: string;
  level: 'info' | 'warn' | 'error' | 'success';
  message: string;
}

export interface AssetItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'audio' | 'document' | 'script' | 'metadata';
  size: string;
  version: string;
  createdAt: string;
  provider: string;
  previewUrl?: string;
}

export interface EnterpriseFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface WaitlistSubmission {
  email: string;
  company?: string;
  useCase?: string;
  queuePosition: number;
  accessKey: string;
  timestamp: string;
}
