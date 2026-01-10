"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "20,000,000 BC", event: "誕生", detail: "遥か悠久の時を経て、この世に生を受ける。" },
  { year: "1990", event: "ゲームとの出会い", detail: "人類が作り出した「ファミコン」に衝撃を受ける。" },
  { year: "2020", event: "YouTube活動開始", detail: "ゲーム実況を通じて世界中のゲーマーと繋がり始める。" },
  { year: "2026", event: "現在", detail: "最強のゲームクリエイターを目指し、日々開発に没頭中。" },
];

export default function Biography() {
  return (
    <section className="py-20 px-4 md:px-20 bg-white dark:bg-slate-900 relative clip-path-slant">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
        >
            BIOGRAPHY
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1 md:left-1/2 top-0 bottom-0 w-1 bg-sky-200 dark:bg-slate-700 -translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`mb-12 flex flex-col md:flex-row items-start md:items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right" />
              
              {/* Dot */}
              <div className="absolute left-1 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-slate-900 -translate-x-1/2 z-10" />
              
              <div className={`w-full md:w-1/2 pl-8 md:pl-12 ${index % 2 === 0 ? "md:text-right md:pr-12 md:pl-0" : ""}`}>
                <div className="bg-sky-50/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-sky-100 dark:border-slate-700 backdrop-blur-sm">
                    <span className="text-cyan-500 font-bold block mb-2">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{item.event}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {item.detail}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
