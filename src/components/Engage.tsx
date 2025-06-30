import { motion, useInView } from "motion/react";
import type { Variants } from "motion/react";
import { useRef } from "react";

function Engage() {
    const content = "Culture / Innovation / Design / Branding / Strategy / ";
    const para = `Nous activons le pouvoir des marques en affirmant leur difference, leur raison d'betre et leur energie creative essentielles to leur succes. Visionnaires, strateges et designers, nous fac'onnons le futur et imaginons des solutions plus simples, plus agiles, qui ont du sens. Les marques ne se limitent pas to des noms, elles incarnent des idees fortes. Notre approche repose sur une expertise approfondie en digital, design et marketing strategique.`;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "linear",
            },
        },
    };

    return (
        <div className="flex flex-col gap-6 py-40 justify-center items-center max-w-screen bg-white overflow-hidden border-b border-gray-300">
            <div className="text-4xl font-parastoo">( 02 )</div>
            <div className="text-2xl font-semibold font-roboto uppercase">
                CONCEVOIR pour engager
            </div>
            <div className="w-full overflow-hidden whitespace-nowrap">
                <motion.div
                    className="flex text-[12rem] font-parastoo tracking-tight"
                    animate={{ x: ["0%", "-233%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                >
                    <div className="flex min-w-full">
                        <span className="mr-[5rem]">{content}</span>
                        <span className="mr-[5rem]">{content}</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-6xl text-center text-5xl font-semibold leading-16 font-roboto pt-10 flex flex-wrap justify-center"
            >
                {para.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        variants={wordVariants}
                        className="inline mx-[4px]"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}

export default Engage;
