"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Youtube, Github } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-4 md:px-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/40 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
        >
            CONTACT
        </motion.h2>

        <p className="text-slate-400 mb-12">
            お仕事の依頼やコラボレーションの相談は、<br className="md:hidden" />下記フォームまたはSNSからお願いします。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-left">
            <motion.form 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
            >
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors h-32" placeholder="Hello..." />
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:scale-[1.02]">
                    SEND MESSAGE
                </button>
            </motion.form>

            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center md:items-start space-y-8"
            >
                <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-slate-800 rounded-full group-hover:bg-cyan-500 transition-colors">
                        <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-xl">contact@rimuru.world</span>
                </div>
                
                <div className="border-t border-slate-800 w-full my-8" />
                
                <div className="flex space-x-6">
                    <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-[#ff0000] transition-colors hover:text-white">
                        <Youtube className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-[#1DA1F2] transition-colors hover:text-white">
                        <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-white hover:text-black transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                </div>
            </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Rimuru Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
