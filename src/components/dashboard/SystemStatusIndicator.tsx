import React from 'react';
import { SystemState } from '@/types';

interface SystemStatusIndicatorProps {
    state: SystemState;
}

export const SystemStatusIndicator: React.FC<SystemStatusIndicatorProps> = ({ state }) => {
    const configs = {
        active_agents: {
            label: 'Agentes Ativos',
            color: 'bg-emerald-500',
            pulse: true,
        },
        idle: {
            label: 'Sistema Ocioso',
            color: 'bg-slate-400',
            pulse: false,
        },
        waiting_response: {
            label: 'Aguardando Resposta',
            color: 'bg-amber-500',
            pulse: true,
        },
    };

    const config = configs[state];

    return (
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
            <div className="relative flex h-2.5 w-2.5">
                {config.pulse && (
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.color} opacity-75`}></span>
                )}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${config.color}`}></span>
            </div>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                {config.label}
            </span>
        </div>
    );
};
