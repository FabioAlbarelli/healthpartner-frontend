import React from 'react';

interface CardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    description?: string;
    trend?: {
        value: number;
        isUp: boolean;
    };
}

export const Card: React.FC<CardProps> = ({ title, value, icon, description, trend }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
                {icon && <div className="text-indigo-500">{icon}</div>}
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">{value}</span>
                {trend && (
                    <span className={`text-xs font-semibold ${trend.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {trend.isUp ? '↑' : '↓'} {trend.value}%
                    </span>
                )}
            </div>
            {description && <p className="mt-1 text-slate-400 text-xs">{description}</p>}
        </div>
    );
};

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' }> = ({ children, variant = 'neutral' }) => {
    const variants = {
        success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        warning: 'bg-amber-50 text-amber-700 border-amber-100',
        danger: 'bg-rose-50 text-rose-700 border-rose-100',
        info: 'bg-indigo-50 text-indigo-700 border-indigo-100',
        neutral: 'bg-slate-50 text-slate-700 border-slate-100',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]}`}>
            {children}
        </span>
    );
};
