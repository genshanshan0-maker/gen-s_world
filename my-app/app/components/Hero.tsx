"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const name = "RIMURU";
  const subtitle = "GAME CREATOR | YOUTUBER";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring" as const,
        stiffness: 100,
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.5, duration: 0.8 },
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-sky-100 dark:from-slate-900 dark:to-slate-800">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-300/20 rounded-full blur-3xl"
      />

      <div className="z-10 text-center">
        <div className="flex justify-center overflow-hidden mb-4">
          {name.split("").map((char, i) => (
            <motion.h1
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="text-8xl md:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 drop-shadow-sm"
            >
              {char}
            </motion.h1>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
          className="relative inline-block"
        >
          <div className="absolute inset-0 bg-sky-200/50 dark:bg-sky-900/30 blur-xl rounded-full" />
          <p className="relative text-xl md:text-3xl font-light tracking-[0.5em] text-cyan-900 dark:text-cyan-100 uppercase">
            {subtitle}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10"
      >
        <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-sky-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
