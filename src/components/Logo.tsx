export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="Pure Ice"
      width={396}
      height={215}
      className={className}
    />
  );
}
