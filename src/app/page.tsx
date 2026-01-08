import { mockDoctors, mockMessages, mockStats } from '@/mocks/data';
import { Card } from '@/components/ui';
import { DoctorTable } from '@/components/dashboard/DoctorTable';
import { MessageTimeline } from '@/components/dashboard/MessageTimeline';
import { SystemStatusIndicator } from '@/components/dashboard/SystemStatusIndicator';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Health Partner Dashboard</h1>
          <p className="text-slate-500 text-sm">Bem-vindo de volta! Aqui está o progresso de hoje.</p>
        </div>
        <SystemStatusIndicator state="active_agents" />
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <Card
          title="Total de Médicos"
          value={mockStats.totalDoctors}
          description="Base total cadastrada"
          trend={{ value: 12, isUp: true }}
        />
        <Card
          title="Novos"
          value={mockStats.newDoctors}
          description="Aguardando contato"
          trend={{ value: 5, isUp: true }}
        />
        <Card
          title="Interessados"
          value={mockStats.interestedDoctors}
          description="Em negociação"
          trend={{ value: 2, isUp: true }}
        />
        <Card
          title="Rejeitados"
          value={mockStats.rejectedDoctors}
          description="Fora do perfil"
          trend={{ value: 1, isUp: false }}
        />
        <Card
          title="Conversas Ativas"
          value={mockStats.activeConversations}
          description="Interações em tempo real"
          trend={{ value: 8, isUp: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctors Table Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Últimos Médicos</h2>
              <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider">Ver Todos</button>
            </div>
            <DoctorTable doctors={mockDoctors} />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-bold text-slate-900 mb-6">Atividade Recente</h2>
            <MessageTimeline messages={mockMessages} />
          </div>
        </div>
      </div>
    </div>
  );
}
