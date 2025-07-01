import { motion } from "motion/react";

function Navbar() {
    const text = "Say Hi or Bonjour";
  return (
    <>
        <div className="flex justify-between items-center sm:px-20 px-5 py-6 bg-black text-white sticky top-0 left-0 w-full z-50">
            <div className="text-4xl font-semibold">Papatango</div>
            <div className="font-medium uppercase hidden sm:block">
                {text.split("").map((char, index) => (
                    <motion.div
                        initial={{
                            y: 10,
                            rotate: 10,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                            ease: 'easeInOut'
                        }}
                        key={index}
                        className="inline"

                    >
                        {char}
                    </motion.div>
                ))}
            </div>
            <div className="font-medium">FR / EN</div>
        </div>
    </>
  )
}

export default Navbar