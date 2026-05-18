import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type IconName =
  | "arrow_back"
  | "bakery_dining"
  | "check_circle"
  | "chevron_right"
  | "favorite"
  | "local_fire_department"
  | "local_offer"
  | "open_in_new"
  | "schedule"
  | "star";

const tiktokUrl = "https://www.tiktok.com/@risolboompurworejo";
const openingHours = "Setiap hari, 10.00 - 21.00 WIB";

const products = [
  {
    name: "Risol Matcha",
    label: "Best for matcha lovers",
    description:
      "Cream matcha yang lembut, wangi teh hijau, dan manisnya lebih kalem. Cocok buat yang suka dessert ringan tapi tetap nagih.",
    price: "Mulai Rp 10K",
    color: "bg-[#2d6f4f]",
    textColor: "text-[#2d6f4f]",
  },
  {
    name: "Risol Coklat",
    label: "Lumer & indulgent",
    description:
      "Isian coklat tebal dengan rasa manis legit. Paling pas dimakan hangat saat kulit risol masih crispy.",
    price: "Mulai Rp 10K",
    color: "bg-[#5a2f21]",
    textColor: "text-[#5a2f21]",
  },
];

const highlights: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "bakery_dining",
    title: "Kulit crispy",
    text: "Bagian luar renyah, bagian dalam tetap creamy dan padat rasa.",
  },
  {
    icon: "local_fire_department",
    title: "Enak dimakan hangat",
    text: "Matcha dan coklat terasa lebih keluar saat risol baru sampai.",
  },
  {
    icon: "schedule",
    title: "Cocok pre-order",
    text: "Bisa jadi snack acara, hampers kecil, atau stok camilan keluarga.",
  },
];

export const metadata: Metadata = {
  title: "RisolBoom Purworejo | Risol Matcha & Coklat",
  description:
    "Detail produk RisolBoom Purworejo dengan fokus pada risol matcha dan risol coklat.",
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

export default function RisolBoomPage() {
  return (
    <main className="min-h-screen bg-[#fff8ec] text-[#211713]">
      <header className="sticky top-0 z-30 border-b border-[#2b1911]/10 bg-[#fff8ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#2b1911]/10 bg-white px-5 text-sm font-bold text-[#2d6f4f] shadow-sm"
          >
            <Icon name="arrow_back" className="!text-lg" />
            Kembali
          </Link>

          <div className="hidden text-center sm:block">
            <p className="font-serif text-xl font-bold">RisolBoom Purworejo</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a7565]">
              Matcha & Coklat
            </p>
          </div>

          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#211713] px-5 text-sm font-bold text-white shadow-sm"
          >
            TikTok
            <Icon name="open_in_new" className="!text-lg" />
          </a>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f3dfbc] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#7b4a18]">
              <Icon name="local_fire_department" className="!text-lg" />
              Dessert risol lokal
            </p>

            <h1 className="mt-6 font-serif text-5xl font-bold leading-[0.98] tracking-normal md:text-7xl">
              Risol manis
              <br />
              yang bikin
              <br />
              <span className="script-text text-[#2d6f4f]">nagih.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#765f50]">
              RisolBoom Purworejo fokus di dua rasa dessert favorit: matcha
              creamy dan coklat lumer. Kulitnya crispy, isiannya tebal, cocok
              buat camilan sore atau pre-order acara.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Matcha creamy", "Coklat lumer", "Crispy outside"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#2b1911]/10 bg-white px-4 py-2 text-sm font-bold text-[#5d4b3f]"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-xl bg-[#2d6f4f] px-7 font-black text-white shadow-[0_14px_35px_rgba(45,111,79,0.25)]"
              >
                Lihat di TikTok
                <Icon name="open_in_new" />
              </a>
              <a
                href="#produk"
                className="inline-flex h-14 items-center gap-2 rounded-xl bg-white px-7 font-black text-[#211713] shadow-sm"
              >
                Lihat Varian
                <Icon name="chevron_right" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-10 hidden size-72 rounded-full bg-[#2d6f4f]/15 blur-3xl md:block" />
            <div className="absolute -bottom-8 left-4 hidden size-56 rounded-full bg-[#d8a33a]/20 blur-3xl md:block" />

            <div className="relative overflow-hidden rounded-[40px] border border-white bg-[#f0ddc7] p-3 shadow-[0_30px_90px_rgba(54,34,18,0.18)]">
              <div className="relative aspect-[1.06] overflow-hidden rounded-[32px] bg-[#211713]">
                <Image
                  src="/assets/risolboom-products.png"
                  alt="RisolBoom Purworejo risol matcha dan risol coklat"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-[28px] bg-white/94 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a7565]">
                    Jam buka
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold">
                    10.00 - 21.00
                  </p>
                </div>
                <div className="text-right">
                  <p className="flex items-center justify-end gap-1 font-black text-[#211713]">
                    <Icon name="schedule" className="!text-lg text-[#2d6f4f]" />
                    Harian
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#2d6f4f]">
                    {openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="border-y border-[#2b1911]/10 bg-white py-16">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2d6f4f]">
                Produk utama
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-tight">
                Dua varian dessert risol yang paling dicari.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#765f50]">
              Pilih matcha untuk rasa creamy yang ringan, atau coklat untuk rasa
              lumer yang lebih manis.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[30px] border border-[#2b1911]/10 bg-[#fff8ec] shadow-[0_18px_45px_rgba(54,34,18,0.08)]"
              >
                <div className={`h-4 ${product.color}`} />
                <div className="p-7 md:p-8">
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <span
                      className={`rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] ${product.textColor}`}
                    >
                      {product.label}
                    </span>
                    <Icon name="favorite" className="!text-3xl text-[#d36b43]" />
                  </div>

                  <h3 className="font-serif text-4xl font-bold">
                    {product.name}
                  </h3>
                  <p className="mt-4 leading-8 text-[#765f50]">
                    {product.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#2b1911]/10 pt-6">
                    <p className="text-2xl font-black text-[#211713]">
                      {product.price}
                    </p>
                    <a
                      href={tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-black text-white ${product.color}`}
                    >
                      Cek Stok
                      <Icon name="open_in_new" className="!text-lg" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ec] py-16">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 md:grid-cols-3 md:px-8">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-[#2b1911]/10 bg-white p-7"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-[#f3dfbc] text-[#2d6f4f]">
                <Icon name={item.icon} className="!text-3xl" />
              </span>
              <h3 className="mt-6 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#765f50]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#211713] py-14 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d8a33a]">
              Order & update stok
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold">
              Pantau menu terbaru RisolBoom di TikTok.
            </h2>
            <p className="mt-4 flex items-center gap-2 text-white/80">
              <Icon name="schedule" className="!text-xl text-[#d8a33a]" />
              Jam buka: {openingHours}
            </p>
          </div>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-fit items-center gap-2 rounded-xl bg-white px-7 font-black text-[#211713]"
          >
            Buka TikTok
            <Icon name="open_in_new" />
          </a>
        </div>
      </section>
    </main>
  );
}
