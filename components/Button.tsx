import Link from "next/link";

type Variant = "gold" | "outline";
type Size = "md" | "lg";

const base =
  "inline-block rounded-btn font-body font-bold text-center transition-opacity hover:opacity-90";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink",
  outline: "border border-ink-outline text-paper",
};

const sizes: Record<Size, string> = {
  md: "px-[34px] py-4 text-[15px]",
  lg: "px-10 py-[18px] text-base",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type SubmitButtonProps = CommonProps & {
  type: "submit" | "button";
};

function isLink(
  props: LinkButtonProps | SubmitButtonProps
): props is LinkButtonProps {
  return "href" in props;
}

/** Brand button. Renders a Next Link when given `href`, else a native button. */
export default function Button(props: LinkButtonProps | SubmitButtonProps) {
  const { children, variant = "gold", size = "md", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (isLink(props)) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type} className={`${classes} cursor-pointer border-none`}>
      {children}
    </button>
  );
}
