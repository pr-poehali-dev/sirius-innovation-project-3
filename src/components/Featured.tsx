import Icon from "@/components/ui/icon";

const socials = [
  {
    name: "Telegram",
    handle: "@tuviha",
    desc: "Личный профиль — пиши напрямую",
    href: "https://t.me/tuviha",
    icon: "Send",
  },
  {
    name: "Telegram-канал",
    handle: "@tuvihavich",
    desc: "Мой канал с новостями и контентом",
    href: "https://t.me/tuvihavich",
    icon: "Megaphone",
  },
  {
    name: "TikTok",
    handle: "@tuvihavich",
    desc: "Видео и креативы — подписывайся",
    href: "https://www.tiktok.com/@tuvihavich",
    icon: "Music2",
  },
];

export default function Featured() {
  return (
    <div className="min-h-screen px-6 py-20 bg-black flex flex-col justify-center">
      <h3 className="uppercase mb-3 text-sm tracking-widest text-green-400 text-center">
        Мои соцсети
      </h3>
      <p className="text-2xl lg:text-4xl mb-12 text-white leading-tight text-center max-w-3xl mx-auto">
        Выбери платформу и переходи прямо в профиль
      </p>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto w-full">
        {socials.map((s) => (
          <a
            key={s.handle}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-950 border border-green-900 rounded-2xl p-8 flex flex-col items-start gap-4 transition-all duration-300 hover:border-green-400 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
              <Icon name={s.icon} size={26} />
            </span>
            <div>
              <p className="text-white text-xl font-semibold">{s.name}</p>
              <p className="text-green-400 text-base">{s.handle}</p>
            </div>
            <p className="text-neutral-400 text-sm">{s.desc}</p>
            <span className="mt-auto text-green-400 text-sm uppercase tracking-wide flex items-center gap-1">
              Перейти <Icon name="ArrowRight" size={16} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}