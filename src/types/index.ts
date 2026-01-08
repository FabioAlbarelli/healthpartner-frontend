export type DoctorStatus = 'New' | 'Interested' | 'Rejected' | 'Active';

export type CommunicationChannel = 'WhatsApp' | 'Email';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  status: DoctorStatus;
  channel: CommunicationChannel;
  lastInteraction: string;
}

export type MessageRole = 'agent' | 'human' | 'doctor';
export type MessageSource = 'auto' | 'human';

export interface Message {
  id: string;
  doctorId: string;
  content: string;
  timestamp: string;
  role: MessageRole;
  source?: MessageSource;
}

export type SystemState = 'active_agents' | 'idle' | 'waiting_response';

export interface DashboardStats {
  totalDoctors: number;
  newDoctors: number;
  interestedDoctors: number;
  rejectedDoctors: number;
  activeConversations: number;
}
