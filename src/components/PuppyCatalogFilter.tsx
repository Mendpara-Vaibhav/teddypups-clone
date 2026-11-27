"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { WHATSAPP_URL } from "@/data/navigation";
import { AVAILABLE_PUPPIES, BREED_FILTERS } from "@/data/puppies";
import { PuppyGridCard } from "./PuppyGridCard";

type WhereFilter = "all" | "local" | "imported" | "korean-teacup";
type GenderFilter = "all" | "boy" | "girl";

export function PuppyCatalogFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const originParam = searchParams.get("origin");
  const collectionParam = searchParams.get("collection");
  const breedParam = searchParams.get("breed") ?? "all";
  const genderParam = searchParams.get("gender");

  const whereFilter: WhereFilter =
    collectionParam === "korean-teacup"
      ? "korean-teacup"
      : originParam === "local"
        ? "local"
        : originParam === "imported"
          ? "imported"
          : "all";

  const genderFilter: GenderFilter =
    genderParam === "boy" || genderParam === "girl" ? genderParam : "all";

  const updateQuery = useCallback(
    (updates: {
      where?: WhereFilter;
      breed?: string;
      gender?: GenderFilter;
    }) => {
      const nextParams = new URLSearchParams(searchParams.toString());

      if (updates.where !== undefined) {
        nextParams.delete("origin");
        nextParams.delete("collection");
        if (updates.where === "local") nextParams.set("origin", "local");
        if (updates.where === "imported") nextParams.set("origin", "imported");
        if (updates.where === "korean-teacup") {
          nextParams.set("collection", "korean-teacup");
        }
      }

      if (updates.breed !== undefined) {
        if (updates.breed === "all") nextParams.delete("breed");
        else nextParams.set("breed", updates.breed);
      }

      if (updates.gender !== undefined) {
        if (updates.gender === "all") nextParams.delete("gender");
        else nextParams.set("gender", updates.gender);
      }

      const qs = nextParams.toString();
      router.replace(qs ? `/puppies?${qs}` : "/puppies", { scroll: false });
    },
    [router, searchParams]
  );

  const resetAllFilters = useCallback(() => {
    router.replace("/puppies", { scroll: false });
  }, [router]);

  const filteredPuppies = useMemo(() => {
    return AVAILABLE_PUPPIES.filter((pup) => {
      if (whereFilter === "local") return false;
      if (whereFilter === "korean-teacup" && !pup.isKoreanTeacup) return false;
      if (whereFilter === "imported" && pup.origin !== "Imported") return false;

      if (breedParam !== "all" && pup.breedFilter !== breedParam) {
        return false;
      }

      if (genderFilter === "boy") {
        if (pup.gender !== "boy" && pup.gender !== "boy & girl") return false;
      }
      if (genderFilter === "girl") {
        if (pup.gender !== "girl" && pup.gender !== "boy & girl") return false;
      }

      return true;
    });
  }, [whereFilter, breedParam, genderFilter]);

  const count = filteredPuppies.length;

  return (
    <div>
      {/* Sketchpad Filter Board */}
      <div className="relative tp-board p-5 sm:p-8 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)] mb-10">
        <span
          aria-hidden="true"
          className="absolute -top-3 left-10 h-6 w-20 bg-honey/85 border-2 border-cocoa -rotate-2"
        />
        <span
          aria-hidden="true"
          className="hidden sm:block absolute -top-3 right-12 h-6 w-20 bg-honey/85 border-2 border-cocoa rotate-2"
        />

        <div className="flex flex-col gap-5">
          {/* Row 1: where */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5">
            <span className="font-scrawl text-base text-toffee-ink sm:w-24 shrink-0">
              where
            </span>
            <div
              className="flex flex-wrap gap-3"
              role="group"
              aria-label="Filter by location"
            >
              <button
                type="button"
                aria-pressed={whereFilter === "all"}
                onClick={() => updateQuery({ where: "all" })}
                className="tp-sticker-chip"
              >
                Everywhere
              </button>
              <button
                type="button"
                aria-pressed={whereFilter === "local"}
                onClick={() =>
                  updateQuery({
                    where: whereFilter === "local" ? "all" : "local",
                  })
                }
                className="tp-sticker-chip"
              >
                In Dubai
              </button>
              <button
                type="button"
                aria-pressed={whereFilter === "imported"}
                onClick={() =>
                  updateQuery({
                    where: whereFilter === "imported" ? "all" : "imported",
                  })
                }
                className="tp-sticker-chip"
              >
                Imported
              </button>
              <button
                type="button"
                aria-pressed={whereFilter === "korean-teacup"}
                onClick={() =>
                  updateQuery({
                    where:
                      whereFilter === "korean-teacup"
                        ? "all"
                        : "korean-teacup",
                  })
                }
                className="tp-sticker-chip"
              >
                Korean Teacup
              </button>
            </div>
          </div>

          {/* Row 2: breed */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5">
            <span className="font-scrawl text-base text-toffee-ink sm:w-24 shrink-0">
              breed
            </span>
            <div
              className="flex flex-wrap gap-3"
              role="group"
              aria-label="Filter by breed"
            >
              {BREED_FILTERS.map((breed) => {
                const pressed = breedParam === breed;
                return (
                  <button
                    key={breed}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() =>
                      updateQuery({ breed: pressed ? "all" : breed })
                    }
                    className="tp-sticker-chip"
                  >
                    {breed}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: boy or girl */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5">
            <span className="font-scrawl text-base text-toffee-ink sm:w-24 shrink-0">
              boy or girl
            </span>
            <div
              className="flex flex-wrap items-center gap-3"
              role="group"
              aria-label="Filter by gender"
            >
              <button
                type="button"
                aria-pressed={genderFilter === "boy"}
                onClick={() =>
                  updateQuery({
                    gender: genderFilter === "boy" ? "all" : "boy",
                  })
                }
                className="tp-sticker-chip"
              >
                Boys
              </button>
              <button
                type="button"
                aria-pressed={genderFilter === "girl"}
                onClick={() =>
                  updateQuery({
                    gender: genderFilter === "girl" ? "all" : "girl",
                  })
                }
                className="tp-sticker-chip"
              >
                Girls
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Count */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p aria-live="polite" className="font-scrawl text-lg text-toffee-ink">
          {count} {count === 1 ? "puppy" : "puppies"} looking for a home
        </p>

        {(whereFilter !== "all" ||
          breedParam !== "all" ||
          genderFilter !== "all") && (
          <button
            type="button"
            onClick={resetAllFilters}
            className="text-sm font-semibold text-cocoa underline decoration-2 underline-offset-4 hover:text-toffee-deep"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Animated Grid or Empty State */}
      {count === 0 ? (
        <div className="tp-board p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]">
          <p className="font-plush-text text-xl sm:text-2xl text-cocoa leading-relaxed">
            No puppies match just now. Tell us what you&apos;re hoping for and
            we&apos;ll let you know what&apos;s in our showroom or what we can
            bring in for you.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full sm:w-auto"
            >
              Ask on WhatsApp
            </a>
            <button
              type="button"
              onClick={resetAllFilters}
              className="btn btn-primary w-full sm:w-auto"
            >
              Show all puppies
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPuppies.map((puppy, idx) => (
              <motion.div
                key={puppy.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <PuppyGridCard puppy={puppy} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
