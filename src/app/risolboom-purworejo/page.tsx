import type { Metadata } from "next";
import Image from "next/image";
import { ProductShowcase, ProductShowcaseFlavor } from "./v3/ProductShowcase";

type IconName =
  | "arrow_back"
  | "check_circle"
  | "chat"
  | "chevron_right"
  | "favorite"
  | "kitchen"
  | "local_florist"
  | "local_mall"
  | "location_on"
  | "photo_camera"
  | "redeem"
  | "schedule"
  | "shield"
  | "shopping_bag"
  | "thermostat"
  | "verified";

const tiktokUrl = "https://www.tiktok.com/@risolboompurworejo";
const whatsappUrl = "https://wa.me/6282112345678";

const flavorCards: ProductShowcaseFlavor[] = [
  {
    name: "Risol Matcha",
    copy: "Krim matcha premium yang lembut, manis pas, dan wangi menggoda.",
    image: "/assets/risolla-v3-matcha.png",
    icon: "local_florist",
    accent: "#6f8c39",
  },
  {
    name: "Risol Coklat",
    copy: "Coklat lumer premium dengan rasa manis yang bikin ketagihan.",
    image: "/assets/risolla-v3-coklat.png",
    icon: "redeem",
    accent: "#76502c",
  },
];

const trustBadges = [
  {
    icon: "verified" as IconName,
    title: "Bahan Berkualitas",
    text: "Tanpa pengawet",
  },
  {
    icon: "kitchen" as IconName,
    title: "Simpan di Freezer",
    text: "Tahan hingga 30 hari",
  },
  {
    icon: "favorite" as IconName,
    title: "Dibuat dengan Cinta",
    text: "Higienis & terpercaya",
  },
];

const reasons = [
  {
    icon: "local_florist" as IconName,
    title: "Bahan Premium",
    text: "Menggunakan bahan berkualitas terbaik",
  },
  {
    icon: "thermostat" as IconName,
    title: "Tahan Lama",
    text: "Simpan di freezer, tetap enak kapan saja",
  },
  {
    icon: "shield" as IconName,
    title: "Higienis",
    text: "Dibuat dengan standar kebersihan tinggi",
  },
  {
    icon: "favorite" as IconName,
    title: "100% Handmade",
    text: "Dibuat dengan cinta dan penuh perhatian",
  },
];

const footerLinks = {
  Menu: ["Beranda", "Tentang", "Produk", "Testimoni", "Kontak"],
  Informasi: ["Cara Pemesanan", "Pengiriman", "Penyimpanan", "FAQ"],
};

export const metadata: Metadata = {
  title: "RisolBoom Purworejo V3 | RisolBoom Matcha & Coklat",
  description:
    "Landing page RisolBoom Purworejo versi 3 dengan tampilan matcha lembut, produk risol matcha, dan risol coklat.",
};

function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
    >
      {name}
    </span>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-[#55702b]">
      <span className="grid size-12 place-items-center rounded-full border border-[#55702b]/25">
        <Icon name="local_florist" className="!text-4xl" />
      </span>
      <div>
        <p
          className={`font-serif font-bold leading-none ${
            compact ? "text-3xl" : "text-[34px]"
          }`}
        >
          RisolBoom
        </p>
        <p className="mt-1 text-[13px] font-semibold text-[#243116]">
          Matcha & Coklat
        </p>
      </div>
    </div>
  );
}

export default function RisolBoomV3Page() {
  return (
    <main className="min-h-screen bg-[#cfd8aa] px-3 py-6 text-[#293615] sm:px-6">
      <div className="mx-auto max-w-[1490px] overflow-hidden rounded-[22px] bg-[#fbfaec] shadow-[0_28px_90px_rgba(63,78,32,0.22)]">
        <section
          id="beranda"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_18%,#f4f2df_0,#edf1d5_28%,#f9f8e9_58%,#f3f5df_100%)]"
        >
          <div className="absolute -left-12 bottom-3 h-20 w-52 rotate-[-8deg] bg-[radial-gradient(circle,#7d9a30_0_2px,transparent_3px)] bg-[length:12px_12px] opacity-55" />
          <div className="absolute right-8 top-44 z-30 hidden size-32 rounded-full bg-[#6c8834] text-white md:grid md:place-items-center">
            <span className="rotate-6 text-center text-2xl font-black italic leading-tight">
              NEW
              <br />
              MENU!
            </span>
          </div>
          <div className="absolute right-44 top-52 z-30 hidden text-[#6c8834] lg:block">
            <Icon name="local_florist" className="!text-5xl rotate-45" />
          </div>

          <header className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between px-6 py-7 lg:px-10">
            <Logo />
            <nav className="hidden items-center gap-10 text-[15px] font-semibold lg:flex">
              {[
                "Beranda",
                "Tentang",
                "Produk",
                "Keunggulan",
                "Testimoni",
                "Kontak",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`pb-2 ${
                    index === 0
                      ? "border-b-2 border-[#617b2d] text-[#617b2d]"
                      : "text-[#293615]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#produk"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-[#6e8737]/45 bg-white/55 px-7 text-sm font-black text-[#34441c]"
            >
              Lihat Produk
              <Icon name="chevron_right" className="!text-xl" />
            </a>
          </header>

          <div className="relative z-10 isolate mx-auto grid max-w-[1320px] gap-10 px-6 pb-20 pt-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pb-28">
            <div className="relative z-20 flex flex-col justify-center">
              <h1 className="max-w-[620px] font-serif text-[54px] font-bold leading-[1.03] text-[#34441c] sm:text-[72px]">
                Risol Lembut,
                <br />
                Isian Spesial
              </h1>
              <p className="script-text mt-2 text-[50px] leading-none text-[#6e8737] sm:text-[68px]">
                Matcha & Coklat
              </p>
              <span className="mt-3 h-px w-48 bg-[#9caf63]" />
              <p className="mt-8 max-w-[500px] text-lg leading-8 text-[#27321a]">
                Perpaduan sempurna antara kulit risol yang lembut dan isian
                creamy matcha serta coklat yang lumer di setiap gigitan.
              </p>

              <div className="mt-9 flex flex-wrap gap-5">
                <a
                  href={whatsappUrl}
                  className="inline-flex h-14 items-center gap-3 rounded-2xl bg-[#6e8737] px-8 text-sm font-black text-white shadow-[0_16px_36px_rgba(89,111,40,0.22)]"
                >
                  Pesan Sekarang
                  <Icon name="local_mall" className="!text-xl" />
                </a>
                <a
                  href="#produk"
                  className="inline-flex h-14 items-center rounded-2xl border border-[#6e8737] bg-white/55 px-8 text-sm font-black text-[#34441c]"
                >
                  Lihat Produk
                </a>
              </div>

              <div className="mt-16 grid max-w-[640px] gap-5 sm:grid-cols-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.title}
                    className="flex items-center gap-4 border-r border-[#77864c]/20 last:border-r-0"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-[#6e8737] text-[#6e8737]">
                      <Icon name={badge.icon} className="!text-3xl" />
                    </span>
                    <span>
                      <strong className="block text-sm">{badge.title}</strong>
                      <span className="mt-1 block text-xs text-[#4b5434]">
                        {badge.text}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-0 min-h-[430px] overflow-visible lg:min-h-[700px]">
              <div className="absolute left-8 top-8 hidden size-24 rounded-full bg-[#86a341]/18 blur-sm lg:block" />
              <div className="absolute right-0 top-0 h-40 w-72 rounded-full bg-white/55 blur-2xl" />
              <div className="pointer-events-none absolute -inset-x-8 inset-y-0 z-0 overflow-hidden rounded-bl-[44%] lg:-right-20 lg:left-[-130px]">
                <Image
                  src="/assets/risolla-v3-hero.png"
                  alt="Risol matcha dan coklat lumer di atas piring"
                  fill
                  priority
                  sizes="(min-width: 1024px) 820px, 100vw"
                  className="object-cover object-center drop-shadow-[0_28px_40px_rgba(69,61,29,0.26)]"
                />
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f4f4df] to-transparent" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-[-1px] h-16 rounded-t-[50%] bg-[#fbfaec]" />
        </section>

        <section
          id="produk"
          className="relative bg-[#fbfaec] px-6 pb-14 lg:px-10"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="text-center">
              <p className="script-text text-4xl text-[#6e8737]">
                Pilihan Rasa
              </p>
              <h2 className="font-serif text-5xl font-bold text-[#34441c]">
                Dua Rasa Favorit
              </h2>
            </div>

            <ProductShowcase flavors={flavorCards} whatsappUrl={whatsappUrl} />
          </div>
        </section>

        <section id="keunggulan" className="bg-[#fbfaec] px-6 py-7 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <h2 className="text-center font-serif text-2xl font-bold text-[#34441c]">
              Kenapa Harus RisolBoom?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className={`flex items-center gap-5 lg:border-r lg:border-[#77864c]/20 ${
                    index === reasons.length - 1 ? "lg:border-r-0" : ""
                  }`}
                >
                  <span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#e3e8c7] text-[#5f7931]">
                    <Icon name={reason.icon} className="!text-3xl" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-[#5f7931]">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#27321a]">
                      {reason.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="bg-[#fbfaec] px-6 py-12 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[18px] bg-[linear-gradient(100deg,#e8edcf_0%,#f8f5e3_52%,#e3e9c6_100%)] shadow-[0_18px_50px_rgba(91,90,44,0.08)] lg:grid-cols-[0.78fr_0.92fr_0.9fr]">
            <div className="flex flex-col justify-center p-10">
              <p className="font-serif text-7xl leading-none text-[#6e8737]">
                &ldquo;
              </p>
              <p className="mt-2 text-lg leading-8 text-[#27321a]">
                Rasanya enak banget! Matchanya wangi, coklatnya lumer. Anak-anak
                suka, pasti order lagi!
              </p>
              <p className="mt-5 text-xl text-[#d8a53a]">★★★★★</p>
              <p className="mt-2 text-sm text-[#27321a]">
                - Dinda, pelanggan setia
              </p>
              <div className="mt-8 flex gap-3">
                <span className="size-3 rounded-full bg-[#6e8737]" />
                <span className="size-3 rounded-full bg-[#bdc99a]" />
                <span className="size-3 rounded-full bg-[#bdc99a]" />
              </div>
            </div>

            <div className="relative min-h-[300px]">
              <Image
                src="/assets/risolla-v3-box.png"
                alt="Paket risol matcha dan coklat"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-10">
              <h2 className="font-serif text-5xl font-bold leading-tight text-[#34441c]">
                Nikmati Kelezatan
                <br />
                Kapan Saja!
              </h2>
              <p className="mt-6 max-w-[360px] leading-7 text-[#27321a]">
                Cocok untuk camilan, hampers, arisan, atau ide jualan.
              </p>
              <a
                href={whatsappUrl}
                className="mt-9 inline-flex h-13 w-fit items-center gap-2 rounded-2xl bg-[#6e8737] px-7 text-sm font-black text-white"
              >
                Pesan Sekarang via WhatsApp
                <Icon name="chat" className="!text-xl" />
              </a>
            </div>
          </div>
        </section>

        <footer
          id="kontak"
          className="bg-[#dce4bd] px-6 py-10 text-[#27321a] lg:px-10"
        >
          <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-[1.4fr_0.8fr_1fr_1.15fr]">
            <div>
              <Logo compact />
              <p className="mt-7 max-w-[300px] leading-7">
                Risol lembut dengan isian spesial matcha dan coklat pilihan.
                Dibuat dengan cinta untuk kebahagiaanmu.
              </p>
              <div className="mt-7 flex gap-3">
                {[
                  {
                    label: "tiktok",
                    icon: "photo_camera" as IconName,
                    href: tiktokUrl,
                  },
                  {
                    label: "whatsapp",
                    icon: "chat" as IconName,
                    href: whatsappUrl,
                  },
                  {
                    label: "shop",
                    icon: "shopping_bag" as IconName,
                    href: tiktokUrl,
                  },
                ].map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-[#27321a]/25"
                  >
                    <Icon name={icon} className="!text-xl" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-black">{title}</h3>
                <div className="mt-5 grid gap-4 text-sm">
                  {links.map((link) => (
                    <a key={link} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="font-black">Kontak</h3>
              <div className="mt-5 grid gap-4 text-sm">
                <a href={whatsappUrl} className="flex items-center gap-3">
                  <Icon name="chat" className="!text-xl" />
                  0821-1234-5678
                </a>
                <a href={tiktokUrl} className="flex items-center gap-3">
                  <Icon name="photo_camera" className="!text-xl" />
                  @risolla.id
                </a>
                <p className="flex items-center gap-3">
                  <Icon name="location_on" className="!text-xl" />
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-[1320px] items-center justify-between border-t border-[#27321a]/10 pt-6 text-sm text-[#4c5636]">
            <p>© 2024 RisolBoom Matcha & Coklat. All rights reserved.</p>
            <Icon name="local_florist" className="!text-3xl" />
          </div>
        </footer>
      </div>
    </main>
  );
}
