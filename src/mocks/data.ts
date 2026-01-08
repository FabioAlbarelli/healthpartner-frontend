import { Doctor, Message, DashboardStats } from '../types';

export const mockDoctors: Doctor[] = [
    {
        id: '1',
        name: 'Dra. Ana Silva',
        specialty: 'Cardiologia',
        status: 'Interested',
        channel: 'WhatsApp',
        lastInteraction: '2026-01-08T10:30:00Z',
    },
    {
        id: '2',
        name: 'Dr. Bruno Costa',
        specialty: 'Dermatologia',
        status: 'New',
        channel: 'Email',
        lastInteraction: '2026-01-07T15:20:00Z',
    },
    {
        id: '3',
        name: 'Dra. Carla Santos',
        specialty: 'Pediatria',
        status: 'Active',
        channel: 'WhatsApp',
        lastInteraction: '2026-01-08T14:15:00Z',
    },
    {
        id: '4',
        name: 'Dr. Diego Lima',
        specialty: 'Ortopedia',
        status: 'Rejected',
        channel: 'WhatsApp',
        lastInteraction: '2026-01-05T09:00:00Z',
    },
    {
        id: '5',
        name: 'Dra. Eliana Oliveira',
        specialty: 'Ginecologia',
        status: 'Interested',
        channel: 'WhatsApp',
        lastInteraction: '2026-01-08T16:45:00Z',
    },
];

export const mockMessages: Message[] = [
    {
        id: 'm1',
        doctorId: '3',
        content: 'Olá Dra. Carla, notamos seu interesse em nossa plataforma. Como podemos ajudar hoje?',
        timestamp: '2026-01-08T14:00:00Z',
        role: 'agent',
        source: 'auto',
    },
    {
        id: 'm2',
        doctorId: '3',
        content: 'Gostaria de saber mais sobre a integração com meu prontuário atual.',
        timestamp: '2026-01-08T14:10:00Z',
        role: 'doctor',
    },
    {
        id: 'm3',
        doctorId: '3',
        content: 'Entendo perfeitamente. Vou transferir para um de nossos especialistas em integração para te dar uma resposta técnica detalhada.',
        timestamp: '2026-01-08T14:12:00Z',
        role: 'agent',
        source: 'auto',
    },
    {
        id: 'm4',
        doctorId: '3',
        content: 'Olá Dra. Carla, sou o Fábio. Vi sua dúvida. Nós suportamos os principais padrões HL7 e FHIR. Qual sistema você utiliza hoje?',
        timestamp: '2026-01-08T14:15:00Z',
        role: 'agent',
        source: 'human',
    },
];

export const mockStats: DashboardStats = {
    totalDoctors: 124,
    newDoctors: 12,
    interestedDoctors: 45,
    rejectedDoctors: 8,
    activeConversations: 18,
};
