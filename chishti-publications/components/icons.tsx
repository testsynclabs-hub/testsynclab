type IconProps = {
  className?: string;
};

export function LogoMark({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#6B3142" />
      <rect
        x="0.8"
        y="0.8"
        width="30.4"
        height="30.4"
        rx="8.2"
        fill="none"
        stroke="#F8DDE2"
        strokeWidth="1.15"
      />
      <path fill="#FFF6F2" d="M5.2 9.4c2.9.85 6 1.35 9 1.55v13.1c-3-.2-6.1-.7-9-1.55V9.4z" />
      <path fill="#F6E3DC" d="M26.8 9.4c-2.9.85-6 1.35-9 1.55v13.1c3-.2 6.1-.7 9-1.55V9.4z" />
      <path fill="#6B3142" d="M19.2 10.7h3.1v6.6l-1.55-1.25L19.2 17.3z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.8.6.6-3.7-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.3a.5.5 0 0 0 0-.5c0-.1-.5-1.2-.7-1.6s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.2-.1-.4-.2z"
      />
    </svg>
  );
}

export function HeartIcon({
  filled = false,
  className = "h-5 w-5",
}: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 19.4s-6.4-3.9-6.4-8.1A3.6 3.6 0 0 1 12 8.6a3.6 3.6 0 0 1 6.4 2.7c0 4.2-6.4 8.1-6.4 8.1z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
