import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SvgIcon({ children, className, ...props }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Send(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </SvgIcon>
  );
}

export function Zap(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" />
    </SvgIcon>
  );
}

export function BarChart3(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 16v-5" />
      <path d="M12 16V7" />
      <path d="M17 16v-8" />
    </SvgIcon>
  );
}

export function Inbox(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M22 12h-6l-2 3h-4l-2-3H2" />
      <path d="m5 5-3 7v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3-7H5Z" />
    </SvgIcon>
  );
}

export function FileText(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </SvgIcon>
  );
}

export function GitBranch(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M6 3v12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M9 6h6" />
    </SvgIcon>
  );
}

export function Bot(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="3" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M9 13v2" />
      <path d="M15 13v2" />
    </SvgIcon>
  );
}

export function Headphones(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5Z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z" />
    </SvgIcon>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />
    </SvgIcon>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-4-.9L3 21l1.7-4.5A8.3 8.3 0 0 1 3 11.5a8.5 8.5 0 1 1 18 0Z" />
    </SvgIcon>
  );
}

export function Check(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m20 6-11 11-5-5" />
    </SvgIcon>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </SvgIcon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </SvgIcon>
  );
}

export function Shield(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </SvgIcon>
  );
}

export function Clock(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </SvgIcon>
  );
}
