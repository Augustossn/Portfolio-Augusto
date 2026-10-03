import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const impact = [
  { label: "Automação", value: 80, suffix: "%", detail: "menos tempo operacional" },
  { label: "Entrega", value: 30, suffix: "+", detail: "endpoints e funcionalidades" },
  { label: "Eficiência", value: 50, suffix: "%", detail: "menos tempo em rotinas" },
];

const chartData = [
  { stage: "Descoberta", score: 20 },
  { stage: "Arquitetura", score: 38 },
  { stage: "Entrega", score: 66 },
  { stage: "Qualidade", score: 82 },
  { stage: "Evolução", score: 94 },
];

export default function ImpactSection() {
  return (
    <section aria-label="Impacto profissional" className="border-y border-white/10 bg-[#0d1220] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="eyebrow">Impacto mensurável</p>
            <h2 className="section-title mt-4 text-white">Construir é só o começo. O resultado precisa aparecer.</h2>
            <p className="section-copy text-slate-300">Experiências em automação, sistemas corporativos e dados com foco em reduzir esforço manual, melhorar fluxo e entregar software sustentável.</p>
            <div className="mt-9 grid grid-cols-3 gap-3">
              {impact.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="impact-stat">
                  <p className="text-3xl font-bold tracking-[-0.06em] text-white md:text-4xl">{item.value}{item.suffix}</p>
                  <p className="mt-2 text-xs font-semibold text-cyan-200">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-cyan-200">Engineering loop</p><p className="mt-1 text-sm font-semibold text-white">Do problema à evolução contínua</p></div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-[10px] text-cyan-100">quality-first</span>
            </div>
            <div className="h-48 md:h-56">
              <ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><defs><linearGradient id="impact-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity={0.42}/><stop offset="100%" stopColor="#22d3ee" stopOpacity={0}/></linearGradient></defs><CartesianGrid vertical={false} stroke="rgba(148,163,184,.15)"/><XAxis dataKey="stage" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 10 }}/><YAxis hide domain={[0, 100]}/><Tooltip contentStyle={{ background: "#0d1220", border: "1px solid rgba(148,163,184,.25)", borderRadius: 10 }} labelStyle={{ color: "#e2e8f0" }} itemStyle={{ color: "#67e8f9" }}/><Area type="monotone" dataKey="score" stroke="#67e8f9" strokeWidth={2.5} fill="url(#impact-gradient)" /></AreaChart></ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
