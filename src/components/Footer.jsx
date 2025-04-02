import { SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"


const Footer = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="mb-8 mt-20">

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; Copyright Vikrant-Mendhe. All Rights Reserved
        <br />
        Designed by vikrant

      </motion.p>
    </motion.div>
  )
}

export default Footer
