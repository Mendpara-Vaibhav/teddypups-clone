"use client";

import Link from "next/link";
import { useState } from "react";
import { HOW_IT_WORKS_TABS } from "@/data/howItWorks";
import { WHATSAPP_URL } from "@/data/navigation";
import { PupBuddy } from "./PupBuddy";

type TabKey = "dubai" | "imported";

export function HowItWorksTabs() {
  const [tab, setTab] = useState<TabKey>("dubai");
  const data = HOW_IT_WORKS_TABS[tab];

  return (
    <section id="ways" aria-labelledby="ways-heading" className="tp-journeys">
      {/* Tab Switcher + Curious PupBuddy */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <div
          role="tablist"
          aria-label="Ways to meet your puppy"
          className="inline-flex flex-wrap gap-3"
        >
          <button
            type="button"
            role="tab"
            id="tab-dubai"
            aria-selected={tab === "dubai"}
            aria-controls="panel-ways"
            onClick={() => setTab("dubai")}
            className={`rounded-full border-2 border-cocoa px-5 py-2.5 text-sm sm:text-base font-semibold transition-all ${
              tab === "dubai"
                ? "bg-cocoa text-milk shadow-[3px_4px_0_0_rgba(42,23,14,0.22)]"
                : "bg-milk text-cocoa hover:bg-honey-soft"
            }`}
          >
            {HOW_IT_WORKS_TABS.dubai.tabLabel}
          </button>

          <button
            type="button"
            role="tab"
            id="tab-imported"
            aria-selected={tab === "imported"}
            aria-controls="panel-ways"
            onClick={() => setTab("imported")}
            className={`rounded-full border-2 border-cocoa px-5 py-2.5 text-sm sm:text-base font-semibold transition-all ${
              tab === "imported"
                ? "bg-cocoa text-milk shadow-[3px_4px_0_0_rgba(42,23,14,0.22)]"
                : "bg-milk text-cocoa hover:bg-honey-soft"
            }`}
          >
            {HOW_IT_WORKS_TABS.imported.tabLabel}
          </button>
        </div>

        <div className="hidden sm:block -mb-2 shrink-0">
          <PupBuddy
            pose="sit"
            facing="left"
            bubble={tab === "imported" ? "hm?" : null}
            className="w-24"
          />
        </div>
      </div>

      {/* Tab Content Panel */}
      <div
        id="panel-ways"
        role="tabpanel"
        aria-labelledby={tab === "dubai" ? "tab-dubai" : "tab-imported"}
        className="tp-board p-6 sm:p-10 shadow-[8px_10px_0_0_rgba(42,23,14,0.16)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b-2 border-cocoa/15">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-4">
              {data.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border-2 border-cocoa bg-honey-soft px-3.5 py-1 font-scrawl text-xs sm:text-sm text-cocoa"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h2
              id="ways-heading"
              className="font-plush text-3xl sm:text-4xl text-cocoa"
            >
              {data.title}
            </h2>

            <p className="mt-4 text-cocoa-soft leading-relaxed">
              {data.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3.5">
              <Link href={data.primaryCta.href} className="btn btn-primary">
                {data.primaryCta.label}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                {data.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Illustrated Card matching active tab */}
          <div className="lg:col-span-5">
            {tab === "dubai" ? (
              <div className="rounded-2xl border-[3px] border-cocoa bg-[#fff1d8] p-5 shadow-[5px_7px_0_0_rgba(42,23,14,0.16)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-scrawl text-base text-toffee-ink">
                    Downtown Dubai
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-7 w-7 rounded-full border-2 border-cocoa bg-honey"
                  />
                </div>
                <svg
                  viewBox="0 0 360 150"
                  fill="none"
                  className="w-full h-auto"
                  aria-label="Downtown Dubai showroom skyline illustration"
                >
                  <circle
                    cx="290"
                    cy="42"
                    r="24"
                    fill="#f2be6b"
                    stroke="#2a170e"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M15 135 V96 h36 V70 h28 v65 h22 V52 h30 v83 h26 V78 h30 v57 h20 V16 l6 32 h6 l6 40 h28 V68 h34 v67 h30 V86 h34 v49 H15 Z"
                    fill="#e4a85b"
                    stroke="#2a170e"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div className="rounded-2xl border-[3px] border-cocoa bg-sky/75 p-5 shadow-[5px_7px_0_0_rgba(42,23,14,0.16)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-scrawl text-base text-cocoa">
                    Korea → Dubai
                  </span>
                  <span className="rounded-full border border-cocoa bg-milk px-2.5 py-0.5 text-xs font-semibold text-cocoa">
                    direct import
                  </span>
                </div>
                <svg
                  viewBox="0 0 360 150"
                  fill="none"
                  className="w-full h-auto"
                  aria-label="Korea to Dubai import flight route"
                >
                  <path
                    d="M32 120 C 110 22, 240 20, 326 92"
                    stroke="#2a170e"
                    strokeWidth="3"
                    strokeDasharray="6 10"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="32"
                    cy="120"
                    r="7"
                    fill="#a24a1a"
                    stroke="#2a170e"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="326"
                    cy="92"
                    r="7"
                    fill="#1f7a4d"
                    stroke="#2a170e"
                    strokeWidth="2.5"
                  />
                  <g transform="translate(178 44) rotate(-6)">
                    <path
                      d="M-26 -8 H20 C32 -8, 40 -2, 40 2 C40 6, 32 8, 20 8 H-26 L-36 -6 L-28 -6 Z"
                      fill="#fffdf8"
                      stroke="#2a170e"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M-4 -8 L8 -22 L16 -22 L8 -8 Z"
                      fill="#f2be6b"
                      stroke="#2a170e"
                      strokeWidth="2.2"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* 4 Numbered Steps */}
        <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.steps.map((step) => (
            <li
              key={step.num}
              className="rounded-2xl border-2 border-cocoa bg-[#fff8ec] p-5 flex flex-col gap-2"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-cocoa bg-honey font-plush text-base text-cocoa">
                {step.num}
              </span>
              <h3 className="font-plush text-xl text-cocoa">{step.title}</h3>
              <p className="text-sm text-cocoa-soft leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
