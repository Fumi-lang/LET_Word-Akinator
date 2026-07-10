"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof motion.button> & {
  variant?: "primary" | "secondary";
  jaLabel: string;
  enLabel: string;
};

const VARIANT_CLASSES: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-[#D97757] text-white shadow-lg shadow-[#D97757]/30",
  secondary:
    "bg-[#3D3929]/5 text-[#3D3929] border border-[#3D3929]/15 backdrop-blur-sm",
};

export function Button({
  jaLabel,
  enLabel,
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`flex w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-6 py-4 transition-opacity disabled:opacity-40 disabled:pointer-events-none ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      <span className="text-lg font-bold tracking-wide">{jaLabel}</span>
      <span className="text-xs font-medium opacity-80">{enLabel}</span>
    </motion.button>
  );
}
