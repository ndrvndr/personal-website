"use client";
import SubscribeCard from "@/components/cards/SubscribeCard";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col items-center pb-12 pt-20 text-center"
    >
      <h2 className="primary text-2xl font-bold md:text-4xl">
        Subscribe to{" "}
        <div className="gradient__text inline-block md:mt-2">
          andreavindra.vercel.app
        </div>
      </h2>

      <SubscribeCard />
    </motion.section>
  );
}
