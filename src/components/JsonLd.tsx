export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Toozyx",
    url: "https://toozyx.com",
    logo: "https://media.toozyx.com/assets/icons/icon.svg",
    email: "media@toozyx.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "media@toozyx.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://youtube.com/@toozyx",
      "https://instagram.com/toozyx",
      "https://facebook.com/toozyx",
      "https://linkedin.com/company/toozyx",
      "https://tiktok.com/@toozyx",
      "https://x.com/toozyx",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Toozyx Media",
    url: "https://media.toozyx.com",
    publisher: {
      "@type": "Organization",
      name: "Toozyx",
      url: "https://toozyx.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://media.toozyx.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `https://media.toozyx.com${image}`,
    url: `https://media.toozyx.com${url}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Toozyx",
      url: "https://toozyx.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
