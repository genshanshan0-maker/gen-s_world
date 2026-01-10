"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [slimePosition, setSlimePosition] = useState({ top: "50%", left: "50%" });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setGameOver(true);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setGameOver(false);
    moveSlime();
  };

  const moveSlime = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const randomTop = Math.random() * (container.height - 100); // 100 is slime size
      const randomLeft = Math.random() * (container.width - 100);
      setSlimePosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
    }
  };

  const handleSlimeClick = () => {
    if (!isPlaying) return;
    setScore((prev) => prev + 1);
    moveSlime();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-slate-900 dark:to-slate-800 -z-10" />

      {/* Header */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-20">
        <Link href="/" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">
          &larr; BACK TO HOME
        </Link>
        <div className="flex gap-8 text-2xl font-bold text-slate-800 dark:text-white">
          <div>SCORE: <span className="text-cyan-500">{score}</span></div>
          <div>TIME: <span className="text-red-500">{timeLeft}s</span></div>
        </div>
      </div>

      {/* Game Area */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl h-[60vh] bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-cyan-200 dark:border-cyan-900 overflow-hidden shadow-2xl"
      >
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              layoutId="slime"
              className="absolute w-24 h-24 cursor-pointer"
              style={{ top: slimePosition.top, left: slimePosition.left }}
              onClick={handleSlimeClick}
              whileTap={{ scale: 0.8 }}
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
              {/* Slime Drawing */}
              <div className="w-full h-full bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.6)] relative flex items-center justify-center">
                 <div className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full opacity-80" />
                 <div className="w-16 h-8 flex justify-between px-2 mt-2">
                    <div className="w-3 h-3 bg-slate-800 rounded-full" />
                    <div className="w-3 h-3 bg-slate-800 rounded-full" />
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Start / Game Over Overlay */}
        {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-10 text-white">
                <h1 className="text-6xl font-bold mb-4 drop-shadow-lg text-cyan-300">
                    {gameOver ? "GAME OVER" : "SLIME CATCHER"}
                </h1>
                {gameOver && <p className="text-2xl mb-8">Final Score: {score}</p>}
                <button 
                    onClick={startGame}
                    className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-full text-xl font-bold shadow-lg shadow-cyan-500/50 transition-all transform hover:scale-105"
                >
                    {gameOver ? "PLAY AGAIN" : "START GAME"}
                </button>
            </div>
        )}
      </div>
      
      <p className="mt-8 text-slate-500 dark:text-slate-400 text-sm">
        Click the slime as fast as you can!
      </p>
    </div>
  );
}
