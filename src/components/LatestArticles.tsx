"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { blogPosts } from "@/lib/posts";
import { ArrowRightIcon, ClockIcon } from "./Icons";

export function LatestArticles() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.latestArticles.title}
          </h2>
          <p className="text-lg text-gray-500">{t.latestArticles.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[1rem] overflow-hidden border border-gray-100 bg-white card-hover"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-gray-300 text-sm">
                  <div className="w-full h-full bg-gray-50" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-primary/5 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    {post.readingTime} {t.blog.minuteRead}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t.latestArticles.readMore}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/blog" className="btn-secondary text-sm px-6 py-2.5">
            {lang === "en" ? "View All Articles" : "عرض جميع المقالات"}
          </Link>
        </div>
      </div>
    </section>
  );
}
