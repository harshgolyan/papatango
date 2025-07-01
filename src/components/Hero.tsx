import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["-50rem", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["-20vh", "100vh"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "130vh"]);

  return (
    <div
      ref={containerRef}
      className="flex sm:justify-center justify-start items-center h-screen w-full bg-black text-white relative"
    >
      <div className="uppercase sm:text-9xl text-4xl text-center max-w-5xl">
        <div className="font-parastoo font-extralight">Emotion culture</div>
        <div className="font-rubik font-bold">& stratégie créative</div>
      </div>

      <motion.div className="absolute -top-20 left-1/2 h-full w-full mx-auto -translate-x-1/2 z-0">
        <motion.img
          src="/hero.jpg"
          className="absolute -top-20 left-1/2 -translate-x-1/2 object-cover"
          style={{ width, height, y }}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
