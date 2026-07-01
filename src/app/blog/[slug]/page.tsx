import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { ArticleClient } from "./client";
import { OrganizationSchema, WebsiteSchema, BreadcrumbSchema, ArticleSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://media.toozyx.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://media.toozyx.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `https://media.toozyx.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://media.toozyx.com${post.image}`],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${slug}` },
      ]} />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`/blog/${slug}`}
        image={post.image}
        datePublished={post.date}
        author={post.author}
      />

      <ArticleClient post={post} related={related} />
    </>
  );
}

export async function generateStaticParams() {
  const { blogPosts } = await import("@/lib/posts");
  return blogPosts.map((post) => ({ slug: post.slug }));
}
