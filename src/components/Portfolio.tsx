"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { VideoModal } from "./VideoModal";
import { PlayIcon } from "./Icons";

const videos = [
  "nlMVGeQzhdo",
  "KArMcERG2Zs",
  "lsAVevWpbO4",
  "xxTGelQMQNw",
  "twRW4CO1zSE",
  "mv_11Unum24",
];

export function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-500">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((videoId) => (
            <div
              key={videoId}
              onClick={() => setActiveVideo(videoId)}
              className="relative aspect-video rounded-[1rem] overflow-hidden bg-gray-100 cursor-pointer group card-hover"
            >
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="YouTube video thumbnail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <PlayIcon className="w-6 h-6 text-gray-900 ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
