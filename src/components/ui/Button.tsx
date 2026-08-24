import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.3)]",
  secondary:
    "bg-transparent text-zinc-100 border border-white/10 hover:border-white/20 hover:bg-white/[0.04]",
  ghost: "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
