import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Icon Asset SVGs (from Figma) ────────────────────────────────────────────
const iconDefault = "http://localhost:3845/assets/b80cf150e2c5f261b74a1a36bdd60e46ab67c9b4.svg";
const iconDefaultRight = "http://localhost:3845/assets/77554aec619e037226483a6c8f78ecaa7116652a.svg";
const iconSecondary = "http://localhost:3845/assets/9d7d73548318da5a7312f2608e7254d966312eae.svg";
const iconSecondaryRight = "http://localhost:3845/assets/6183bffd0fd54ca9e42e86d1dcfadbe032419b2a.svg";
const iconDestructive = "http://localhost:3845/assets/56c2e070de5d7c179a01e03b588ce4cd77e1a33d.svg";
const iconDestructiveRight = "http://localhost:3845/assets/9c759a9e2f5fa367f8f62732c342d53d78fa0807.svg";
const iconOutline = "http://localhost:3845/assets/3afb7144e5627a38d4d1996c8bab1d87f1218a38.svg";
const iconOutlineRight = "http://localhost:3845/assets/2c0ac0df580169f07e78c2468cf942318e262138.svg";
const iconGhost = "http://localhost:3845/assets/3afb7144e5627a38d4d1996c8bab1d87f1218a38.svg";
const iconGhostRight = "http://localhost:3845/assets/2c0ac0df580169f07e78c2468cf942318e262138.svg";
const iconLink = "http://localhost:3845/assets/9e3bd00be9588a90f8ce679aca90f34cf79fa1e5.svg";
const iconLinkRight = "http://localhost:3845/assets/574b0f25cd92b5bea4eb4c41c691528693c4584a.svg";

// ─── Spinner ─────────────────────────────────────────────────────────────────
function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin size-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

// ─── Icon helper ──────────────────────────────────────────────────────────────
function ButtonIcon({ src }: { src: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-4">
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-4.99%]">
          <img alt="" className="block max-w-none size-full" src={src} />
        </div>
      </div>
    </div>
  );
}

// ─── CVA variants — 변수명을 tokens.css 기준으로 맞춤 ────────────────────────
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium text-sm leading-5",
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "font-[var(--font-font-sans,Geist,sans-serif)]",
    "rounded-[calc(var(--radius-lg,10)*1px)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[#ec4899] text-white",
          "hover:bg-[#db2777] active:bg-[#be185d]",
          "focus-visible:ring-[#ec4899]",
        ],
        secondary: [
          "bg-[var(--base-secondary,#f4f4f5)] text-[var(--base-secondary-foreground,#18181b)]",
          "hover:bg-[#e4e4e7] active:bg-[#d4d4d8]",
          "focus-visible:ring-[var(--base-ring,#a1a1aa)]",
        ],
        destructive: [
          "bg-[var(--base-destructive,#dc2626)] text-[var(--base-destructive-foreground,#fef2f2)]",
          "hover:bg-[#b91c1c] active:bg-[#991b1b]",
          "focus-visible:ring-[var(--base-destructive,#dc2626)]",
        ],
        outline: [
          "bg-[var(--base-background,white)] text-[var(--base-foreground,#09090b)]",
          "border border-[var(--base-input,#e4e4e7)]",
          "shadow-[0px_1px_2px_0px_var(--shadow-xs-color,rgba(0,0,0,0.05))]",
          "hover:bg-[var(--base-accent,#f4f4f5)]",
          "focus-visible:ring-[var(--base-ring,#a1a1aa)]",
        ],
        ghost: [
          "bg-transparent text-[var(--base-foreground,#09090b)]",
          "hover:bg-[var(--base-accent,#f4f4f5)]",
          "focus-visible:ring-[var(--base-ring,#a1a1aa)]",
        ],
        link: [
          "bg-transparent text-[var(--base-primary,#18181b)]",
          "underline-offset-4 hover:underline",
          "focus-visible:ring-[var(--base-ring,#a1a1aa)]",
        ],
      },
      size: {
        sm:        "h-8 px-3 text-xs rounded-[calc(var(--radius-md,8)*1px)]",
        default:   "h-9 px-4 py-2",
        lg:        "h-10 px-6",
        icon:      "h-9 w-9 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// ─── Icon map ─────────────────────────────────────────────────────────────────
const variantIconMap: Record<string, { left: string; right: string }> = {
  default:     { left: iconDefault,     right: iconDefaultRight },
  secondary:   { left: iconSecondary,   right: iconSecondaryRight },
  destructive: { left: iconDestructive, right: iconDestructiveRight },
  outline:     { left: iconOutline,     right: iconOutlineRight },
  ghost:       { left: iconGhost,       right: iconGhostRight },
  link:        { left: iconLink,        right: iconLinkRight },
};

// ─── Kbd badge ────────────────────────────────────────────────────────────────
function KbdBadge({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div className={cn(
      "flex items-center justify-center gap-1 h-5 min-w-5 px-1 rounded-[6px] text-xs font-medium",
      dark
        ? "bg-[var(--custom-bg-background-20-dark-bg-background-10,rgba(255,255,255,0.2))] text-white"
        : "bg-[var(--base-muted,#f4f4f5)] text-[var(--base-muted-foreground,#71717a)]"
    )}>
      {label}
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode | null;
  rightIcon?: React.ReactNode | null;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  showKbd?: boolean;
  kbdLabel?: string;
  loading?: boolean;
}

// ─── Button ───────────────────────────────────────────────────────────────────
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      leftIcon,
      rightIcon,
      showLeftIcon = false,
      showRightIcon = false,
      showKbd = false,
      kbdLabel = "⌘K",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variantKey = (variant ?? "default") as string;
    const icons = variantIconMap[variantKey] ?? variantIconMap["default"];
    const isDark = variantKey === "default" || variantKey === "destructive";
    const isIconOnly = size === "icon" || size === "icon-sm" || size === "icon-lg";

    const renderLeft = () => {
      if (loading) return <Spinner />;
      if (!showLeftIcon) return null;
      if (leftIcon === null) return null;
      if (leftIcon) return leftIcon;
      return <ButtonIcon src={icons.left} />;
    };

    const renderRight = () => {
      if (!showRightIcon) return null;
      if (rightIcon === null) return null;
      if (rightIcon) return rightIcon;
      return <ButtonIcon src={icons.right} />;
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {renderLeft()}
        {!isIconOnly && children}
        {!isIconOnly && renderRight()}
        {!isIconOnly && showKbd && <KbdBadge label={kbdLabel} dark={isDark} />}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
