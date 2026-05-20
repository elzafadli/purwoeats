import type { Metadata } from "next";
import Link from "next/link";

type IconName =
  | "arrow_back"
  | "auto_awesome"
  | "check_circle"
  | "design_services"
  | "edit_note"
  | "local_offer"
  | "payments"
  | "photo_camera"
  | "public"
  | "restaurant"
  | "schedule"
  | "storefront"
  | "support_agent"
  | "trending_up";

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "public",
    title: "Halaman usaha online",
    text: "Profil usaha punya halaman sendiri berisi menu, jam buka, lokasi, kontak, promo, dan cerita singkat brand.",
  },
  {
    icon: "design_services",
    title: "Request template gratis",
    text: "Bisa request tampilan atau custom template sesuai karakter usaha, tanpa biaya tambahan selama masa promo.",
  },
  {
    icon: "trending_up",
    title: "Lebih mudah ditemukan",
    text: "Usaha tampil di direktori PurwoEats agar calon pelanggan lokal lebih cepat menemukan tempat makanmu.",
  },
  {
    icon: "edit_note",
    title: "Update info usaha",
    text: "Bantu tampilkan promo, menu unggulan, jam operasional, dan link sosial media agar informasinya tetap rapi.",
  },
];

const included = [
  "Gratis trial 1 bulan sebelum lanjut berlangganan",
  "Landing page usaha dengan foto, highlight produk, dan CTA kontak",
  "Desain responsif untuk HP dan desktop",
  "Bantuan penyusunan copy singkat agar halaman terasa menjual",
  "Gratis request atau custom template selama promo bulan ini",
  "Bisa diarahkan ke WhatsApp, Instagram, TikTok, Google Maps, atau marketplace",
];

export const metadata: Metadata = {
  title: "Daftarkan Usahamu | PurwoEats",
  description:
    "Daftarkan cafe, eatery, atau UMKM kuliner Purworejo di PurwoEats mulai Rp30.000 per bulan selama promo.",
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

export default function DaftarkanUsahamuPage() {
  return (
    <main className="min-h-screen bg-[#fffaf1] text-[#10261b]">
      <header className="sticky top-0 z-30 border-b border-[#10261b]/10 bg-[#fffaf1]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#10261b]/10 bg-white px-5 text-sm font-bold text-[#245f3f] shadow-sm"
          >
            <Icon name="arrow_back" className="!text-lg" />
            Kembali
          </Link>

          <p className="hidden text-sm font-black uppercase tracking-[0.18em] text-[#6b5a47] sm:block">
            Partner PurwoEats
          </p>

          <a
            href="#pricing"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#10261b] px-5 text-sm font-bold text-white shadow-sm"
          >
            Lihat Paket
            <Icon name="payments" className="!text-lg" />
          </a>
        </div>
      </header>

      <section className="overflow-hidden bg-[#f6e5c8]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#a25f00]">
              <Icon name="local_offer" className="!text-lg" />
              Promo bulan ini
            </p>

            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1] md:text-7xl">
              Daftarkan
              <br />
              usahamu di
              <br />
              <span className="script-text text-[#245f3f]">PurwoEats.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f4e3f]">
              Bantu cafe, eatery, resto, dan UMKM kuliner Purworejo punya
              halaman yang rapi, mudah dibagikan, dan siap dipakai untuk promosi
              harian.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Cafe", "Eatery", "Resto", "Jajanan", "Pre-order"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#10261b]/10 bg-white px-4 py-2 text-sm font-bold text-[#5f4e3f]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div id="pricing" className="flex items-center">
            <div className="w-full rounded-[28px] border border-white bg-white p-6 shadow-[0_28px_80px_rgba(54,34,18,0.14)] md:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#245f3f]">
                    Paket listing usaha
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-bold">
                    Mulai bulan ini
                  </h2>
                </div>
                <span className="rounded-full bg-[#f3bd3f] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#3a2605]">
                  Promo
                </span>
              </div>

              <div className="mt-8 rounded-2xl bg-[#10261b] p-6 text-white">
                <div className="mb-6 flex items-center gap-4 rounded-2xl border border-[#f3bd3f]/35 bg-[#f3bd3f] p-4 text-[#10261b] shadow-[0_16px_38px_rgba(243,189,63,0.22)]">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-white">
                    <Icon name="auto_awesome" className="!text-3xl" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em]">
                      Gratis trial
                    </p>
                    <p className="font-serif text-3xl font-bold leading-none">
                      1 bulan pertama
                    </p>
                  </div>
                </div>

                <p className="text-sm font-bold text-white/70">Harga normal</p>
                <p className="mt-1 text-3xl font-black text-white/55 line-through">
                  Rp50.000
                </p>
                <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <p className="font-serif text-6xl font-bold leading-none text-[#f3bd3f]">
                    Rp30.000
                  </p>
                  <p className="pb-2 text-lg font-bold text-white/80">
                    per bulan
                  </p>
                </div>
                <p className="mt-4 leading-7 text-white/78">
                  Setelah trial selesai, lanjut Rp30.000 per bulan selama promo.
                  Sudah termasuk pembuatan halaman usaha, penataan informasi
                  dasar, dan gratis request atau custom template.
                </p>
              </div>

              <div className="mt-7 grid gap-3">
                {included.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Icon
                      name="check_circle"
                      className="mt-0.5 !text-xl text-[#245f3f]"
                    />
                    <p className="leading-7 text-[#5f4e3f]">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/6289654666583?text=Halo%20PurwoEats%2C%20saya%20ingin%20daftarkan%20usaha%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#245f3f] px-7 text-center font-black text-white shadow-[0_14px_35px_rgba(36,95,63,0.25)]"
              >
                Daftar Sekarang
                <Icon name="storefront" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#245f3f]">
                Yang kamu dapat
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-tight">
                Halaman usaha yang siap dibagikan ke pelanggan.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#6b5a47]">
              Cocok untuk usaha yang ingin terlihat lebih profesional tanpa
              perlu bikin website dari nol.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#10261b]/10 bg-[#fffaf1] p-6"
              >
                <div className="grid size-12 place-items-center rounded-full bg-[#245f3f] text-white">
                  <Icon name={benefit.icon} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-[#6b5a47]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10261b] py-14 text-white">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f3bd3f]">
              Siapkan data usaha
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight">
              Prosesnya dibuat ringan.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/78">
              Cukup kirim nama usaha, alamat, jam buka, kontak, foto produk atau
              tempat, menu unggulan, dan link sosial media. Tim PurwoEats bantu
              susun menjadi halaman yang enak dilihat.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: "restaurant" as IconName, label: "Data menu" },
              { icon: "photo_camera" as IconName, label: "Foto usaha" },
              { icon: "support_agent" as IconName, label: "Kontak aktif" },
            ].map((step) => (
              <div
                key={step.label}
                className="rounded-2xl border border-white/12 bg-white/8 p-5"
              >
                <Icon name={step.icon} className="!text-3xl text-[#f3bd3f]" />
                <p className="mt-4 font-bold">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#fffaf1] py-10">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-5 px-5 text-sm text-[#6b5a47] md:flex-row md:items-center md:px-8">
          <p className="font-bold text-[#10261b]">PurwoEats</p>
          <p>Promo berlaku bulan ini untuk usaha kuliner Purworejo.</p>
        </div>
      </footer>
    </main>
  );
}
