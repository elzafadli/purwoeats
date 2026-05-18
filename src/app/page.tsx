type IconName =
  | "add_business"
  | "bookmark"
  | "chat"
  | "chevron_right"
  | "close"
  | "dark_mode"
  | "diamond"
  | "expand_more"
  | "family_restroom"
  | "favorite"
  | "keyboard_arrow_right"
  | "laptop_mac"
  | "local_offer"
  | "location_on"
  | "menu"
  | "music_note"
  | "park"
  | "public"
  | "schedule"
  | "search"
  | "send"
  | "star"
  | "storefront";

const cafes = [
  {
    name: "Kopi Sore Purworejo",
    type: "Coffee, Live Music",
    tag: "LIVE MUSIC HARI INI",
    tagColor: "bg-[#f4b92f]",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    rating: "4.7 (128)",
    price: "Rp 20K - 40K",
    close: "Tutup 23.00",
  },
  {
    name: "Estu Coffee & Eatery",
    type: "Coffee, Western, Pasta",
    tag: "WFC FRIENDLY",
    tagColor: "bg-[#245f3f]",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    rating: "4.6 (95)",
    price: "Rp 25K - 50K",
    close: "Tutup 22.00",
  },
  {
    name: "Kebon Ndalem",
    type: "Javanese, Nusantara",
    tag: "OUTDOOR",
    tagColor: "bg-[#4b7c41]",
    image: "/assets/purwoeats-hero.png",
    rating: "4.8 (76)",
    price: "Rp 15K - 35K",
    close: "Tutup 21.30",
  },
  {
    name: "Rumah Kopi 16",
    type: "Coffee, Snack",
    tag: "HIDDEN GEM",
    tagColor: "bg-[#6e6aa8]",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    rating: "4.5 (60)",
    price: "Rp 15K - 30K",
    close: "Tutup 22.00",
  },
];

const events = [
  {
    date: "25",
    month: "MEI",
    title: "Acoustic Night",
    place: "Kopi Sore Purworejo",
    time: "Sabtu, 25 Mei 2024",
    tag: "Live Music",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "28",
    month: "MEI",
    title: "Nobar Final Liga",
    place: "Estu Coffee & Eatery",
    time: "Selasa, 28 Mei 2024",
    tag: "Nobar",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=700&q=80",
  },
  {
    date: "01",
    month: "JUN",
    title: "Latte Art Workshop",
    place: "Rumah Kopi 16",
    time: "Sabtu, 1 Juni 2024",
    tag: "Workshop",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
  },
];

const cityImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80",
];

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

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid size-11 place-items-center border ${
          light ? "border-white" : "border-[#10261b]"
        }`}
      >
        <span className="text-2xl italic leading-none">P</span>
      </div>
      <div>
        <p className="text-[22px] font-semibold uppercase leading-none tracking-[0.18em]">
          Purwoeats
        </p>
        <p
          className={`mt-1 text-[10px] font-bold uppercase tracking-[0.22em] ${
            light ? "text-white/80" : "text-[#10261b]/70"
          }`}
        >
          Cafe & Eatery Guide
        </p>
      </div>
    </div>
  );
}

function ArrowLink() {
  return (
    <a href="#" className="flex items-center gap-3 text-sm font-medium">
      Lihat semua <Icon name="chevron_right" className="!text-xl" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf5ea] text-[#0f1712]">
      <section className="relative min-h-[650px] overflow-hidden bg-[#050705] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.48)_44%,rgba(0,0,0,0.32)_100%)]" />

        <header className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-8 py-9">
          <Logo light />
          <nav className="hidden items-center gap-10 text-[15px] font-semibold lg:flex">
            {[
              "Beranda",
              "Cafe",
              "Eatery",
              "Event",
              "Promo",
              "Artikel",
              "Tentang Kami",
            ].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`pb-2 ${
                  index === 0 ? "border-b-2 border-[#e5bd57]" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            {/* <button aria-label="Cari">
              <Icon name="search" className="!text-3xl" />
            </button>
            <button aria-label="Simpan">
              <Icon name="bookmark" className="!text-3xl" />
            </button> */}
            <button
              aria-label="Menu"
              className="grid size-12 place-items-center rounded-full bg-[#123b2a]"
            >
              <Icon name="menu" className="!text-3xl" />
            </button>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 px-8 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="max-w-[650px] font-serif text-[52px] font-bold leading-[1.05] tracking-normal md:text-[72px]">
              Temukan
              <br />
              Cafe & Eatery Terbaik
              <br />
              <span className="script-text text-[64px] font-normal leading-none text-[#f3bd3f] md:text-[86px]">
                di Purworejo
              </span>
            </h1>
            <p className="mt-6 max-w-[520px] text-xl leading-8">
              Tempat nongkrong, makan enak, dan pengalaman seru di Purworejo
              dalam satu tempat.
            </p>
            <div className="mt-9 flex flex-wrap gap-5">
              <a
                href="#trending"
                className="flex h-14 items-center gap-3 rounded-xl bg-[#123b2a] px-8 font-bold"
              >
                <Icon name="storefront" /> Jelajahi Cafe
              </a>
              <a
                href="/daftarkan-usahamu"
                className="flex h-14 items-center gap-3 rounded-xl bg-white px-8 font-bold text-[#18130d]"
              >
                <Icon name="add_business" /> Daftarkan Usahamu Gratis
              </a>
            </div>
          </div>

          <div className="justify-self-end overflow-hidden rounded-[28px] bg-[#efe2cf]/95 text-[#18130d] shadow-2xl backdrop-blur-md lg:w-[430px]">
            <div
              className="h-[210px] bg-cover bg-center"
              style={{
                backgroundImage: "url(/assets/risolboom-products.png)",
              }}
            />
            <div className="p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2d6f4f]">
                    Trending minggu ini
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-bold">
                    RisolBoom Purworejo
                  </h2>
                </div>
                <span className="rounded-full bg-[#2d6f4f] px-3 py-2 text-xs font-black text-white">
                  Baru
                </span>
              </div>

              <p className="mt-4 leading-7 text-[#5f5045]">
                Risol manis dengan dua rasa favorit: matcha creamy dan coklat
                lumer. Kulitnya crispy, isiannya tebal, cocok buat camilan sore
                atau pre-order acara.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Matcha creamy", "Coklat lumer", "Crispy outside"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d7c8b6] bg-[#f6ecdf] px-3 py-1 text-xs font-bold"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <a
                href="/risolboom-purworejo"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#123b2a] text-sm font-black text-white"
              >
                Lihat Detail
                <Icon name="chevron_right" className="!text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1280px] items-end justify-between px-8 pb-9">
          <div className="flex items-center gap-4">
            <span className="grid size-11 place-items-center rounded-full bg-[#123b2a]">
              <Icon name="location_on" />
            </span>
            <div>
              <p className="font-bold">Kopi Sore Purworejo</p>
              <p className="text-sm text-white/75">
                Coffee - Live Music - Outdoor
              </p>
            </div>
          </div>
          <div className="hidden gap-3 md:flex">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={`size-3 rounded-full ${
                  dot === 0 ? "bg-white" : "bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-[#fffaf1] py-8 md:py-9">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-3xl">
              Jelajahi berdasarkan suasana
            </h2>
            <ArrowLink />
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-8">
            {moods.map((mood) => (
              <button key={mood.label} className="group text-center">
                <span className="mx-auto grid size-[88px] place-items-center rounded-2xl bg-[#f2eadf] transition group-hover:bg-[#123b2a] group-hover:text-white">
                  <Icon name={mood.icon} className="!text-4xl" />
                </span>
                <span className="mt-4 block text-sm font-medium">
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section> */}

      <section id="trending" className="bg-[#f8f0e5] py-8 md:py-9">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-3xl">Trending Minggu Ini</h2>
            <ArrowLink />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cafes.map((cafe) => (
              <article
                key={cafe.name}
                className="overflow-hidden rounded-xl border border-[#e2d6c7] bg-white shadow-[0_10px_28px_rgba(45,33,19,0.08)]"
              >
                <div
                  className="relative h-[215px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${cafe.image})` }}
                >
                  <span
                    className={`absolute left-3 top-3 rounded-md px-3 py-2 text-xs font-black text-white ${cafe.tagColor}`}
                  >
                    {cafe.tag}
                  </span>
                  <button
                    aria-label={`Simpan ${cafe.name}`}
                    className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-black/20 text-white backdrop-blur-sm"
                  >
                    <Icon name="favorite" className="!text-3xl" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-xl font-bold">{cafe.name}</h3>
                  <p className="mt-2 text-sm">{cafe.type}</p>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-[#123b2a]">Buka - {cafe.close}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="star" className="!text-base text-[#f4b92f]" />
                      {cafe.rating}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span />
                    <span>{cafe.price}</span>
                  </div>
                  <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#efe2cf] text-sm font-bold text-[#123b2a]">
                    <Icon name="chat" className="!text-lg" /> Reservasi WA
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf1] py-9">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-serif text-3xl">Event Seru di Purworejo</h2>
              <ArrowLink />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.title}
                  className="overflow-hidden rounded-lg border border-[#e2d6c7] bg-white"
                >
                  <div
                    className="relative h-[180px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="absolute left-3 top-3 rounded-lg bg-white px-3 py-2 text-center font-black">
                      <p className="text-2xl leading-none">{event.date}</p>
                      <p className="text-xs">{event.month}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-xl font-bold">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm">{event.place}</p>
                    <p className="mt-1 text-sm">{event.time}</p>
                    <span className="mt-4 inline-block rounded-md bg-[#efe2cf] px-3 py-2 text-xs">
                      {event.tag}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="promo">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-serif text-3xl">Promo Spesial</h2>
              <ArrowLink />
            </div>
            <article
              className="min-h-[300px] rounded-xl bg-cover bg-center p-12 text-white"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(8,37,24,.9),rgba(8,37,24,.35)),url(https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80)",
              }}
            >
              <h3 className="font-serif text-4xl leading-tight">
                Diskon 20%
                <br />
                All Menu
              </h3>
              <p className="mt-6 leading-7">
                Setiap Senin - Jumat
                <br />
                11.00 - 16.00
              </p>
              <button className="mt-10 rounded-xl bg-white px-7 py-4 font-bold text-[#10261b]">
                Lihat Promo Lainnya
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#062616] py-7 text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-8 lg:grid-cols-[1fr_1fr_1.25fr]">
          <h2 className="font-serif text-5xl leading-tight">
            Bangga dengan
            <br />
            Rasa Lokal
            <br />
            <span className="script-text text-[#f3bd3f]">Purworejo</span>
          </h2>
          <div>
            <p className="max-w-sm text-lg leading-7 text-white/85">
              Dukung cafe & eatery lokal Purworejo. Temukan, kunjungi, dan
              bagikan tempat favoritmu!
            </p>
            <a
              href="/daftarkan-usahamu"
              className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-[#10261b]"
            >
              <Icon name="add_business" /> Daftarkan Usahamu
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {cityImages.map((image) => (
              <div
                key={image}
                className="h-28 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#fffaf1] py-10">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-8 md:grid-cols-[1.3fr_0.6fr_0.8fr_1.6fr]">
          <div>
            <Logo />
            <div className="mt-8 flex gap-3">
              {["IG", "TikTok", "Web"].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={item}
                  className="grid size-10 place-items-center rounded-full border border-[#10261b]/15 bg-white text-xs font-black text-[#10261b]"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="mt-10 text-xs">
              © 2024 PurwoEats. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Jelajahi</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="#">Cafe</a>
              <a href="#">Eatery</a>
              <a href="#">Event</a>
              <a href="#">Promo</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Informasi</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="#">Tentang Kami</a>
              <a href="#">Blog</a>
              <a href="#">Kontak</a>
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Dapatkan info terbaru</h3>
            <p className="mt-4 text-sm">
              Promo, event, dan cafe baru di Purworejo
            </p>
            <label className="mt-6 flex h-14 overflow-hidden rounded-lg border border-[#d8c9b3] bg-white">
              <input
                className="min-w-0 flex-1 px-5 text-sm outline-none"
                placeholder="Masukkan email kamu..."
              />
              <button className="grid w-16 place-items-center bg-[#123b2a] text-white">
                <Icon name="send" />
              </button>
            </label>
          </div>
        </div>
      </footer>
    </main>
  );
}
