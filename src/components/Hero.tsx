import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-950/60 to-black" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          tuviha
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 text-green-100">
          Все мои соцсети в одном месте — листай вниз
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="https://t.me/tuviha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Telegram @tuviha
          </a>
          <a
            href="https://www.tiktok.com/@gavaninamefe"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 text-green-400 px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            TikTok gavaninamefe
          </a>
        </div>
      </div>
    </div>
  );
}