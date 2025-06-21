import { motion } from "framer-motion";
import HeroImage from "../../../public/ai-generated-illustration-of-the-character-of-a-muslim-student-free-photo.jpg"


export default function TransitionOptions() {
    return (
        <motion.img
            src={HeroImage.src}
            alt="Hero Image"
            style={ball as React.CSSProperties}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                
                
            }}
        />
    );
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 400,
    height: 400,
    borderRadius: "50%", // 👈 makes the image a perfect circle
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    objectFit: "cover", // 👈 ensures image fills the round shape properly
};


