import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ number, image, title, label, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl overflow-hidden shadow-md bg-gray-800 text-white"
    >
      <div className="absolute top-3 left-3 bg-white text-gray-900 font-semibold rounded-full w-8 h-8 flex items-center justify-center">
        {number}
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-sm leading-snug mb-4">{title}</p>
        <button
          className={`flex items-center gap-2 ${color} px-3 py-1 rounded-full text-sm font-semibold`}
        >
          {label} <ArrowRight size={15} />
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
