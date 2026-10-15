import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof Link> & {
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
  sm: "min-h-9 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-normal rounded-lg text-center font-medium transition-all duration-200 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
