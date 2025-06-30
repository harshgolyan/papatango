import { Snowflake } from "lucide-react";
import { motion } from "motion/react";

function Loader() {
    return (
        <motion.div 
            initial={{
                y: 0
            }}
            animate={{
                y: "-100%"
            }}
            transition={{
                duration: 0.5,
                delay: 1,
                ease: "easeInOut"
            }}
        className="flex justify-center items-center h-screen bg-black absolute w-full top-0 left-0 z-90">
            <motion.div
                initial={{
                    rotate: 0,
                    scale: 1
                }}
                animate={{
                    rotate: 360,
                    scale: 1.2
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeInOut"
                }}
            >
                <Snowflake size={44} color="white" />
            </motion.div>
        </motion.div>
    );
}

export default Loader;
