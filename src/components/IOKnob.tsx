import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IOKnobProps {
  defaultOn?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

// Minimal, dependency-free knob inspired by the provided Framer component
// Uses the project design system tokens (primary, muted, border)
const IOKnob: React.FC<IOKnobProps> = ({ defaultOn = false, onChange, className }) => {
  const [on, setOn] = React.useState(defaultOn);

  const toggle = () => {
    setOn((prev) => {
      const next = !prev;
      onChange?.(next);
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "تشغيل" : "إيقاف"}
      className={cn(
        "relative h-10 w-[79px] rounded-full border",
        on ? "bg-primary border-primary/50" : "bg-muted border-border/40",
        "transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40",
        className
      )}
    >
      {/* track decoration */}
      <div className="absolute inset-0 rounded-full shadow-inner" />
      {/* knob */}
      <motion.div
        initial={false}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
        className={cn(
          "absolute top-1 left-1 h-8 w-8 rounded-full",
          "bg-background border border-border/60",
          "shadow-[0_1px_2px_hsl(0_0%_0%_/_0.25),_0_2px_6px_hsl(0_0%_0%_/_0.2)]"
        )}
        animate={{ x: on ? 41 : 0 }}
      />
    </button>
  );
};

export default IOKnob;
