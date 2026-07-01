"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/posts";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslation } from "@/lib/translations";
import { ClockIcon, ArrowLeftIcon } from "@/components/Icons";

interface ArticleClientProps {
  post: BlogPost;
  related: BlogPost[];
}

export function ArticleClient({ post, related }: ArticleClientProps) {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          {t.blog.backToBlog}
        </Link>

        <article>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              {post.readingTime} {t.blog.minuteRead}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>
              {t.blog.by} {post.author}
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div className="aspect-[16/9] rounded-[1rem] bg-gradient-to-br from-primary/5 to-secondary/5 mb-10 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5" />
          </div>

          <div className="prose prose-sm sm:prose-base max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-gray-600 ml-4 mb-1">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </article>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {t.blog.relatedPosts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-[1rem] overflow-hidden border border-gray-100 bg-white card-hover"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-secondary/5" />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-gray-900 mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
