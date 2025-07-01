"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function Showreel() {
    const [animation, setAnimation] = useState(false);
    const [bracketsDone, setBracketsDone] = useState(false);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            setAnimation(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className="flex justify-center items-center h-screen bg-black text-white text-[8rem] uppercase font-thin font-parastoo gap-8 overflow-hidden"
        >
            {animation && !bracketsDone ? (
                <>
                    <motion.span
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: -300, opacity: 0 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        onAnimationComplete={() => setBracketsDone(true)}
                    >
                        (
                    </motion.span>

                    <div className="h-[45rem] w-[30rem]" /> 

                    <motion.span
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: 300, opacity: 0 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    >
                        )
                    </motion.span>
                </>
            ) : bracketsDone ? (
                <>
                    <span>Show</span>
                    <video
                        src="/showreel.mp4"
                        muted
                        autoPlay
                        poster="/showreel.jpg"
                        className="h-[45rem] w-[30rem]"
                    />
                    <span>Reel</span>
                </>
            ) : null}
        </div>
    );
}

export default Showreel;
