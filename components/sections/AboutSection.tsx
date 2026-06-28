"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BotanicalSVG } from "@/components/ui/TattooArt";
import { slideLeft, slideRight, viewport } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="bg-void2 px-10 md:px-[60px] py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center max-w-[1400px] mx-auto">
        {/* Visual */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <div className="relative h-[480px] md:h-[580px] overflow-hidden bg-void3 flex items-center justify-center">
            <BotanicalSVG className="w-[80%] h-[80%] opacity-60" />
            {/* Ember gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,58,42,0.3)_0%,transparent_50%),linear-gradient(to_bottom,rgba(201,169,110,0.1),transparent)]" />
          </div>
          {/* Offset frame */}
          <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] border border-gold/25 pointer-events-none z-0" />
          {/* Stat chip */}
          <div className="absolute bottom-8 right-[-20px] md:right-[-28px] bg-gold text-void px-7 py-5 z-10">
            <span className="font-display text-[44px] font-light leading-none block">850+</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-normal block mt-1">
              Pieces Completed
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}>
          <Eyebrow>The Artist</Eyebrow>
          <h2 className="font-display text-display font-light text-bone mb-7">
            Elara Nova —<br />
            <em className="italic text-gold">a decade of deliberate marks</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.85] text-ash mb-4 font-light">
            Trained in classical illustration before ever picking up a machine, I approach every piece as a translation
            problem: how do we render the ineffable — a memory, a grief, a becoming — in permanent lines on living skin?
          </p>
          <p className="font-sans text-[15px] leading-[1.85] text-ash font-light">
            My studio in Nairobi is appointment-only. I take on a limited number of clients each month, not because I'm
            precious about it, but because this kind of work demands full presence and no shortcuts.
          </p>
          <div className="w-12 h-px bg-ember my-9" />
          <p className="font-display text-[32px] font-light italic text-gold/70">Elara Nova</p>
        </motion.div>
      </div>
    </section>
  );
}
