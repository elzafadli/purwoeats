"use client";

import Image from "next/image";
import { useState } from "react";

type IconName =
  | "chevron_right"
  | "local_florist"
  | "redeem";

export type ProductShowcaseFlavor = {
  name: string;
  copy: string;
  image: string;
  icon: IconName;
  accent: string;
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

export function ProductShowcase({
  flavors,
  whatsappUrl,
}: {
  flavors: ProductShowcaseFlavor[];
  whatsappUrl: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFlavor = flavors[activeIndex];

  return (
    <div className="mt-8 grid overflow-hidden rounded-[18px] bg-[#dce4bd] shadow-[0_22px_60px_rgba(62,74,31,0.14)] lg:grid-cols-[1.05fr_0.95fr]">
      <article className="relative min-h-[520px] overflow-hidden bg-[#b9c98b] p-6 text-white sm:p-8">
        <Image
          src={activeFlavor.image}
          alt={activeFlavor.name}
          fill
          sizes="(min-width: 1024px) 650px, 100vw"
          className="object-cover opacity-85"
          priority={activeIndex === 0}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(66,86,36,0.08),rgba(54,72,31,0.68))]" />
        <div className="relative z-10 flex h-full min-h-[472px] flex-col justify-end">
          <span
            className="mb-5 grid size-16 place-items-center rounded-full text-white shadow-lg"
            style={{ backgroundColor: activeFlavor.accent }}
          >
            <Icon name={activeFlavor.icon} className="!text-4xl" />
          </span>
          <h3 className="max-w-[520px] font-serif text-5xl font-bold leading-tight">
            {activeFlavor.name}
          </h3>
          <p className="mt-4 max-w-[430px] text-base leading-7 text-[#f3f4df]">
            {activeFlavor.copy}
          </p>
          <a
            href={whatsappUrl}
            className="mt-8 inline-flex h-12 w-fit items-center gap-3 rounded-full px-6 text-sm font-black text-white"
            style={{ backgroundColor: activeFlavor.accent }}
          >
            Pesan Rasa Ini
            <Icon name="chevron_right" className="!text-xl" />
          </a>
        </div>
      </article>

      <div className="grid gap-4 bg-[#eef1dc] p-5 sm:p-6">
        {flavors.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`grid min-h-[150px] grid-cols-[0.95fr_1fr] overflow-hidden rounded-[14px] border text-left transition ${
                isActive
                  ? "border-[#9caf63] bg-[#fbfaec]"
                  : "border-[#bdc99a]/80 bg-[#f7f6e7] hover:border-[#9caf63]"
              }`}
            >
              <span className="relative min-h-[150px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 310px, 50vw"
                  className="object-cover"
                />
                {index === 0 ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[#dce68f] px-3 py-2 text-center text-[11px] font-black leading-tight text-[#293715]">
                    BEST
                    <br />
                    SELLER
                  </span>
                ) : null}
              </span>
              <span className="flex flex-col justify-center p-5">
                <span
                  className="font-serif text-3xl font-bold uppercase leading-none"
                  style={{ color: isActive ? item.accent : "#6e8737" }}
                >
                  {item.name.replace("Risol ", "")}
                </span>
                <span
                  className={`mt-4 line-clamp-2 text-sm leading-6 ${
                    isActive ? "text-[#27321a]" : "text-[#4b5434]"
                  }`}
                >
                  {item.copy}
                </span>
                <span
                  className={`mt-5 inline-flex items-center gap-2 text-xs font-bold ${
                    isActive ? "text-[#34441c]" : "text-[#6e8737]"
                  }`}
                >
                  <span
                    className="grid size-8 place-items-center rounded-full border"
                    style={{ borderColor: item.accent }}
                  >
                    <Icon name={item.icon} className="!text-lg" />
                  </span>
                  Pilih rasa
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
