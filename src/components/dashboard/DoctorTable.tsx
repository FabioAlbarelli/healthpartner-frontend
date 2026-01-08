import React from 'react';
import { Doctor } from '@/types';
import { Badge } from '../ui';

interface DoctorTableProps {
    doctors: Doctor[];
}

export const DoctorTable: React.FC<DoctorTableProps> = ({ doctors }) => {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Active': return 'success';
            case 'Interested': return 'info';
            case 'New': return 'warning';
            case 'Rejected': return 'danger';
            default: return 'neutral';
        }
    };

    const formatTime = (isoString: string) => {
        return new Date(isoString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-100">
                        <th className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Médico</th>
                        <th className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Especialidade</th>
                        <th className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Canal</th>
                        <th className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Última Interação</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                            <td className="py-4 px-4">
                                <div className="font-medium text-slate-900">{doctor.name}</div>
                            </td>
                            <td className="py-4 px-4 text-slate-600 text-sm">
                                {doctor.specialty}
                            </td>
                            <td className="py-4 px-4">
                                <Badge variant={getStatusVariant(doctor.status)}>{doctor.status}</Badge>
                            </td>
                            <td className="py-4 px-4 text-slate-600 text-sm">
                                {doctor.channel}
                            </td>
                            <td className="py-4 px-4 text-slate-400 text-sm">
                                {formatTime(doctor.lastInteraction)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
