"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Heart } from "lucide-react";

const policies = [
  {
    title: "INNOVATION",
    description: "常に新しい遊びを創造し、常識を覆すアイデアを形にする。",
    icon: Lightbulb,
  },
  {
    title: "SPEED",
    description: "思いついたら即実行。圧倒的なスピードで世界を驚かせる。",
    icon: Rocket,
  },
  {
    title: "PASSION",
    description: "ゲームへの愛は誰にも負けない。魂を込めた作品作り。",
    icon: Heart,
  },
];

export default function Policy() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white dark:bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-900 dark:text-cyan-100"
      >
        MY POLICY
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="p-8 bg-sky-50 dark:bg-slate-800 rounded-2xl shadow-lg border border-sky-100 dark:border-slate-700 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 mt-[-20px] mr-[-20px] w-32 h-32 bg-sky-200/50 dark:bg-sky-700/30 rounded-full blur-2xl transition-transform group-hover:scale-150" />
            
            <policy.icon className="w-12 h-12 mb-6 text-sky-500" />
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">{policy.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {policy.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
