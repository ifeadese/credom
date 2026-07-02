type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Centered content column: max-width 1240px, 40px horizontal padding. */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-content px-10 ${className}`}>{children}</div>
  );
}
