"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const works = [
  { id: 1, title: "Epic RPG Project", category: "GAME DEV", color: "bg-blue-400" },
  { id: 2, title: "Speedrun Challenge", category: "YOUTUBE", color: "bg-red-400" },
  { id: 3, title: "Unity Shader Tech", category: "TECH DEMO", color: "bg-purple-400" },
  { id: 4, title: "Indie Game Festival", category: "EVENT", color: "bg-green-400" },
  { id: 5, title: "りむるのスライムキャッチャー", category: "ゲーム", color: "bg-green-400", link: "/game" },
];

export default function Gallery() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  return (
    <section className="py-20 px-4 md:px-20 bg-slate-50 dark:bg-slate-950">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 text-cyan-900 dark:text-cyan-100 text-center md:text-left md:ml-20"
      >
        GALLERY
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            layoutId={`card-${work.id}`}
            onClick={() => setSelectedWork(work)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-xl"
          >
            {/* Placeholder Background */}
            <div className={`absolute inset-0 ${work.color} opacity-80 transition-opacity group-hover:opacity-100`} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-2 border border-white/30">
                    {work.category}
                </span>
                <motion.h3 layoutId={`title-${work.id}`} className="text-3xl font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">
                    {work.title}
                </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-500 text-white rounded-full font-bold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
        >
            VIEW MORE ON YOUTUBE
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              layoutId={`card-${selectedWork.id}`}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
                <div className={`h-64 ${selectedWork.color} relative`}>
                    <button 
                        onClick={() => setSelectedWork(null)}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="absolute bottom-8 left-8">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white mb-2 border border-white/30">
                            {selectedWork.category}
                        </span>
                        <motion.h3 layoutId={`title-${selectedWork.id}`} className="text-4xl font-bold text-white">
                            {selectedWork.title}
                        </motion.h3>
                    </div>
                </div>
                <div className="p-8">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        This is a detailed description for {selectedWork.title}. 
                        Here you can describe the project in depth, talk about the technologies used, 
                        challenges faced, and the final outcome. Mimics a real portfolio detail view.
                    </p>
                    <div className="flex gap-4">
                        <button className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Demo
                        </button>
                        {selectedWork.link ? (
                            <Link href={selectedWork.link} className="flex-1 py-3 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30 text-center flex items-center justify-center">
                                Play Game
                            </Link>
                        ) : (
                            <button className="flex-1 py-3 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/30">
                                View Project
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
