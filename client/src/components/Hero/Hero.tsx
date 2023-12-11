import CardProfile from "../CardProfile/CardProfile.tsx";
import {motion} from "framer-motion";

function Hero() {
    return (
        <div className="grid grid-cols-2 gap-2 py-4 my-8 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, type: "spring"}} >
                <h2 className="text-2xl uppercase font-semibold brightness-75">I Build</h2>
                <p className="text-6xl font-bold mb-8">Applications and share tips and tricks.</p>
                <p className="text-2xl text-zinc-400 brightness-125 mt-8"> Let's simplify the complex and make it more
                    enjoyable together!</p>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <img src="icons/hero.svg" alt="hero"/>
            </motion.div>

            <CardProfile/>
        </div>
    );
}

export default Hero;
