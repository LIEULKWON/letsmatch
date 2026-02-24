import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Icon Asset SVGs (from Figma) ───────────────────────────────────────────
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

// ─── Spinner for Loading state ───────────────────────────────────────────────
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

// ─── Icon helper ─────────────────────────────────────────────────────────────
function ButtonIcon({ src, className }: { src: string; className?: string }) {
  return (
    <div className={cn("overflow-clip relative shrink-0 size-4", className)}>
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-4.99%]">
          <img alt="" className="block max-w-none size-full" src={src} />
        </div>
      </div>
    </div>
  );
}

// ─── CVA variant map ─────────────────────────────────────────────────────────
const buttonVariants = cva(
  // base
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium text-sm leading-5",
    "rounded-[var(--border-radius/rounded-lg,10px)]",
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "font-[family-name:var(--font/font-sans,'Geist',sans-serif)]",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-[var(--tailwind-colors/pink/500,#ec4899)] text-white hover:bg-[#db2777] active:bg-[#be185d] focus-visible:ring-[#ec4899]",
        secondary:
          "bg-[var(--base/secondary,#f4f4f5)] text-[var(--base/secondary-foreground,#18181b)] hover:bg-[#e4e4e7] active:bg-[#d4d4d8] focus-visible:ring-[#a1a1aa]",
        destructive:
          "bg-[var(--custom/destructive-dark:destructive\\60,#dc2626)] text-[var(--base/destructive-foreground,#fef2f2)] hover:bg-[#b91c1c] active:bg-[#991b1b] focus-visible:ring-[#dc2626]",
        outline:
          "bg-white border border-[var(--base/input,#e4e4e7)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-[var(--base/foreground,#09090b)] hover:bg-[#f4f4f5] active:bg-[#e4e4e7] focus-visible:ring-[#a1a1aa]",
        ghost:
          "bg-transparent text-[var(--base/foreground,#09090b)] hover:bg-[#f4f4f5] active:bg-[#e4e4e7] focus-visible:ring-[#a1a1aa]",
        link: "bg-transparent text-[var(--base/primary,#18181b)] underline-offset-4 hover:underline focus-visible:ring-[#a1a1aa]",
      },
      size: {
        sm:      "h-8 px-3 text-xs rounded-[var(--border-radius/rounded-md,8px)]",
        default: "h-9 px-4 py-2",
        lg:      "h-10 px-6",
        icon:    "h-9 w-9 p-0",
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

// ─── Icon source map (left/right per variant) ────────────────────────────────
const variantIconMap: Record<string, { left: string; right: string }> = {
  default:     { left: iconDefault,     right: iconDefaultRight },
  secondary:   { left: iconSecondary,   right: iconSecondaryRight },
  destructive: { left: iconDestructive, right: iconDestructiveRight },
  outline:     { left: iconOutline,     right: iconOutlineRight },
  ghost:       { left: iconGhost,       right: iconGhostRight },
  link:        { left: iconLink,        right: iconLinkRight },
};

// ─── Kbd badge (keyboard shortcut) ───────────────────────────────────────────
function KbdBadge({
  label,
  dark,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 h-5 min-w-5 px-1 rounded-[6px] text-xs font-medium",
        dark
          ? "bg-white/20 text-white"
          : "bg-[#f4f4f5] text-[#71717a]"
      )}
    >
      {label}
    </div>
  );
}

// ─── Props ───────────────────────────────────────────────────────────────────
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Left icon override — pass null to hide */
  leftIcon?: React.ReactNode | null;
  /** Right icon override — pass null to hide */
  rightIcon?: React.ReactNode | null;
  /** Show left icon (uses Figma default icon if no leftIcon prop) */
  showLeftIcon?: boolean;
  /** Show right icon (uses Figma default icon if no rightIcon prop) */
  showRightIcon?: boolean;
  /** Show keyboard shortcut badge */
  showKbd?: boolean;
  /** Keyboard shortcut label, defaults to ⌘K */
  kbdLabel?: string;
  /** Loading state — replaces left icon with spinner */
  loading?: boolean;
  /** Render as child (slot pattern) */
  asChild?: boolean;
}

// ─── Button ──────────────────────────────────────────────────────────────────
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

    // Left icon slot
    const renderLeft = () => {
      if (loading) return <Spinner />;
      if (!showLeftIcon) return null;
      if (leftIcon === null) return null;
      if (leftIcon) return leftIcon;
      return <ButtonIcon src={icons.left} />;
    };

    // Right icon slot
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
        {!isIconOnly && showKbd && (
          <KbdBadge label={kbdLabel} dark={isDark} />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// ─── Usage examples (for reference) ─────────────────────────────────────────
// import { Button } from "@/components/ui/button";
//
// <Button variant="default">Button</Button>
// <Button variant="secondary">Secondary</Button>
// <Button variant="destructive">Delete</Button>
// <Button variant="outline">Outline</Button>
// <Button variant="ghost">Ghost</Button>
// <Button variant="link">Link</Button>
//
// Sizes:
// <Button size="sm">Small</Button>
// <Button size="default">Default</Button>
// <Button size="lg">Large</Button>
// <Button size="icon"><Icon /></Button>
//
// States:
// <Button loading>Loading...</Button>
// <Button disabled>Disabled</Button>
// <Button showLeftIcon>With Icon</Button>
// <Button showKbd kbdLabel="⌘K">With Kbd</Button>
