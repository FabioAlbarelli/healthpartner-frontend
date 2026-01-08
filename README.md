# Health Partner Frontend

Este é o repositório **Front-End** do sistema **Health Partner CRM**. O sistema é uma ferramenta de uso interno projetada para motivar a equipe, demonstrar progresso e permitir uma visualização clara dos dados de prospecção e gestão de médicos.

## 🚀 Objetivos
- **Motivação**: Dashboard visualmente atraente que destaca o crescimento e a atividade do sistema.
- **Progresso**: Visualização clara do funil de médicos (Novos, Interessados, Ativos, Rejeitados).
- **Transparência**: Timeline de interações para acompanhar o fluxo entre agentes automáticos e humanos.

## 🛠️ Stack Utilizada
- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Gerenciamento de Estado**: React Hooks (Simples & Limpo)
- **Dados**: Mocks realistas (Sem backend/BD no momento)

## 📦 Estrutura do Projeto
- `src/app`: Rotas e páginas do sistema.
- `src/components`: Componentes de UI e seções do Dashboard.
- `src/mocks`: Dados simulados para visualização imediata.
- `src/types`: Definições de tipos TypeScript compartilhados.

## 🌐 Deploy no Vercel
O projeto está pronto para ser conectado diretamente ao Vercel:
1. Conecte o repositório GitHub ao Vercel.
2. O Vercel detectará automaticamente o Next.js.
3. Use a branch `master` para o deploy de produção.

## ⚠️ Limitações Conhecidas
- **Sem Backend**: Todas as interações são simuladas. Mudanças no estado do dashboard não persistem após o refresh.
- **Sem Autenticação**: O acesso é direto ao dashboard (uso interno).
- **Dados Estáticos**: Os dados são mockados no arquivo `src/mocks/data.ts`.

## 🗺️ Roadmap Futuro

### Frontend
- [ ] Implementar filtros na lista de médicos.
- [ ] Adicionar gráficos de tendência (Line/Bar charts).
- [ ] Criar visualização de detalhes do médico.
- [ ] Adicionar funcionalidade de envio manual de mensagens (mock).

### Backend (Futuro)
- [ ] Integração com API REST real.
- [ ] Autenticação de usuários internos.
- [ ] Webhooks para atualizações em tempo real via WhatsApp.
- [ ] Banco de dados para persistência de médicos e mensagens.

---
Desenvolvido por **Antigravity** para Health Partner.
