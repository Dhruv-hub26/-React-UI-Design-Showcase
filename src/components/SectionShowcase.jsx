import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Prime customers",
    text: "Customers who have access to bank credit and are satisfied with current service.",
    tag: "Satisfied",
    tagColor: "bg-blue-600 hover:bg-blue-700",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    id: 2,
    title: "Prime customers",
    text: "Customers who have access to bank credit but are not satisfied with current service.",
    tag: "Underserved",
    tagColor: "bg-purple-600 hover:bg-purple-700",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 3,
    title: "Sub-prime customers",
    text: "Customers with limited or no access to bank credit — near-prime and sub-prime.",
    tag: "Underbanked",
    tagColor: "bg-emerald-600 hover:bg-emerald-700",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
];

export default function SectionShowcase() {
  return (
    <section className="max-w-7xl mx-auto bg-[#0f1115] text-gray-200 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 transition-colors duration-500">
      {/* Left Text Section */}
      <div className="md:w-1/3 space-y-4">
        <span className="text-xs font-semibold bg-gray-800 text-gray-100 px-3 py-1 rounded-full tracking-wider shadow-sm">
          TARGET AUDIENCE
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
          Prospective{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-t from-blue-500 via-purple-500 to-emerald-400">
            customer
          </span>{" "}
          segmentation
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Depending on satisfaction and access to banking products, potential
          target audience can be divided into three groups.
        </p>
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-block cursor-pointer mt-4"
        >
          <ArrowRight className="w-7 h-7 text-emerald-400 hover:text-emerald-500 transition-all duration-300" />
        </motion.div>
      </div>

      {/* Right Card Section */}
      <div className="flex-1 flex flex-wrap justify-center gap-6">
        {data.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-lg bg-gray-900 text-white hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-6">
              <h3 className="font-semibold mb-2 text-lg">{card.title}</h3>
              <p className="text-sm opacity-85 leading-snug mb-4">{card.text}</p>
              <motion.button
                whileHover={{ x: 4 }}
                className={`${card.tagColor} text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-300 shadow-lg`}
              >
                {card.tag} <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
