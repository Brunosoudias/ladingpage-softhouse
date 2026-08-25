import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:bg-[var(--btn-bg-hover)] shadow-[0_0_0_1px_var(--btn-ring),0_1px_2px_rgba(0,0,0,0.3)]",
  secondary:
    "bg-transparent text-[var(--fg-1)] border border-[var(--line-strong)] hover:border-[var(--line-hover)] hover:bg-[var(--panel-hover)]",
  ghost: "bg-transparent text-[var(--fg-4)] hover:text-[var(--fg-1)] hover:bg-[var(--panel-hover)]",
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
