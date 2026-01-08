import React from 'react';
import { Message } from '@/types';

interface MessageTimelineProps {
    messages: Message[];
}

export const MessageTimeline: React.FC<MessageTimelineProps> = ({ messages }) => {
    return (
        <div className="space-y-6">
            {messages.map((message, idx) => {
                const isAgent = message.role === 'agent';
                const isAuto = message.source === 'auto';

                return (
                    <div key={message.id} className="flex gap-4 relative">
                        {/* Timeline line */}
                        {idx !== messages.length - 1 && (
                            <div className="absolute left-[19px] top-10 bottom-[-24px] w-px bg-slate-100"></div>
                        )}

                        {/* Icon/Avatar circle */}
                        <div className={`z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 
              ${isAgent ? 'bg-indigo-50 border-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
                            <span className={`text-xs font-bold ${isAgent ? 'text-indigo-600' : 'text-slate-600'}`}>
                                {isAgent ? (isAuto ? 'AI' : 'HU') : 'DR'}
                            </span>
                        </div>

                        <div className="flex-1 pt-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-slate-900">
                                    {isAgent ? (isAuto ? 'Agente Virtual' : 'Atendente Humano') : 'Médico'}
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium">
                                    {new Date(message.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                {isAgent && (
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter
                    ${isAuto ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                        {isAuto ? 'Automático' : 'Manual'}
                                    </span>
                                )}
                            </div>
                            <div className={`p-3 rounded-2xl text-sm leading-relaxed inline-block max-w-[90%]
                ${isAgent ? 'bg-indigo-600 text-white rounded-tl-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm'}`}>
                                {message.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
