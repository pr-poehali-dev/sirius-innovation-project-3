interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-green-400 text-lg font-bold uppercase tracking-widest">tuviha</div>
        <nav className="flex gap-8">
          <a
            href="https://t.me/octovix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm"
          >
            Telegram
          </a>
          <a
            href="https://www.tiktok.com/@gavaninamefe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm"
          >
            TikTok
          </a>
        </nav>
      </div>
    </header>
  );
}
