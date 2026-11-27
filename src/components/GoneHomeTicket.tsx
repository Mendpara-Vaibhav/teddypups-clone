import Image from "next/image";
import type { GoneHomePuppy } from "@/data/puppies";

type Props = {
  puppy: GoneHomePuppy;
  index: number;
};

export function GoneHomeTicket({ puppy, index }: Props) {
  const tiltClass = index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";

  return (
    <article
      className={`relative flex items-stretch rounded-2xl border-[3px] border-cocoa bg-milk text-cocoa shadow-[6px_8px_0_0_rgba(42,23,14,0.16)] overflow-hidden transition-transform duration-200 ${tiltClass}`}
    >
      {/* Main Ticket Body */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between gap-4 min-w-0">
        <div className="flex items-center gap-3.5">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full border-2 border-cocoa overflow-hidden bg-honey-soft">
            <Image
              src={puppy.image}
              alt={`${puppy.name} — ${puppy.breed}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="font-scrawl text-xs sm:text-sm text-toffee-ink">
              one ticket home
            </p>
            <h2 className="font-plush text-xl sm:text-2xl text-cocoa truncate">
              {puppy.name}
            </h2>
            <p className="text-sm font-medium text-cocoa-soft truncate">
              {puppy.breed} · {puppy.gender}
            </p>
          </div>
        </div>

        <div className="pt-2.5 border-t border-cocoa/15 flex items-center justify-between gap-2 text-[11px] font-bold tracking-wider uppercase text-cocoa-soft">
          <span className="truncate">{puppy.hub}</span>
          <span aria-hidden="true" className="text-toffee-deep">
            — — →
          </span>
          <span className="text-toffee-deep shrink-0">HOME ♥</span>
        </div>
      </div>

      {/* Perforated Stub */}
      <div className="relative w-12 sm:w-14 shrink-0 border-l-2 border-dashed border-cocoa/55 bg-honey-soft/65 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute -top-2.5 -left-2.5 h-5 w-5 rounded-full border-2 border-cocoa bg-[#fff1d8]"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-2.5 -left-2.5 h-5 w-5 rounded-full border-2 border-cocoa bg-[#fff1d8]"
        />
        <span className="font-scrawl text-xs text-cocoa -rotate-90 whitespace-nowrap select-none">
          admit one
        </span>
      </div>
    </article>
  );
}
