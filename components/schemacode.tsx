interface schemaTypes {
    pageUrl?:string
    url?:string
    pageName?:string
    currnetPage?:string,
    currnetPageUrl?:string
    h1? : string
    description? : string
}

type BreadcrumbProps =  {
  pageName?: string;
  pageUrl?: string;
  currnetPage?: string;
  currnetPageUrl?: string;
}


type Bread = {
  breadcrumbs: BreadcrumbProps[]
}

// Organisation

export default function Organization() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Noblekode",
    alternateName: "Noblekode",
    url: "https://noblekode.com/",
    logo: "https://noblekode.com/images/logo_name.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9717434098",
      contactType: "customer service",
      contactOption: "HearingImpairedSupported",
      areaServed: "IN",
      availableLanguage: ["en", "Hindi"],
    },
    sameAs: "https://www.instagram.com/noblekode?igsh=bWYwZmoxanF4N2E0",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}

// Webpage

export function Webpage({ pageUrl, pageName }: schemaTypes) {
  const web = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: pageName,
    publisher: {
      "@type": "Organization",
      name: "noblekode",
      alternateName: "Noblekode",
      url: "https://noblekode.com/",
      logo: "https://noblekode.com/images/logo_name.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9717434098",
        contactType: "customer service",
        contactOption: "HearingImpairedSupported",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      sameAs: ["https://www.instagram.com/noblekode?igsh=bWYwZmoxanF4N2E0"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(web) }}
      />
    </>
  );
}

// Website

export function Website() {
  const webSite = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "Noble Kode",
    url: "https://noblekode.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://noblekode.com/search?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Noblekode",
      alternateName: "Noblekode",
      url: "https://noblekode.com/",
      logo: "https://noblekode.com/images/logo_name.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9717434098",
        contactType: "customer service",
        contactOption: "HearingImpairedSupported",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      sameAs: ["https://www.instagram.com/noblekode?igsh=bWYwZmoxanF4N2E0"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}

// Breadcrumbs
export function Breadcrumbs({ breadcrumbs }: Bread) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: Array.isArray(breadcrumbs)
      ? breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.pageName,
          item: crumb.pageUrl,
        }))
      : [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// Article
export function ArticleSchema({ h1, description }: schemaTypes) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://noblekode.com/",
    },
    headline: h1,
    description: description,
    image: "https://noblekode.com/",
    author: {
      "@type": "Organization",
      name: "Noble kode",
      url: "https://noblekode.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Noble kode",
      logo: {
        "@type": "ImageObject",
        url: "https://noblekode.com/",
      },
    },
    datePublished: "2025-04-01",
    dateModified: "2025-07-31",
  };
}

// Contact
export function ContactSchema() {
  const contact = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Noble Kode",
    url: "https://noblekode.com/",
    logo: "https://www.yourcompany.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9717434098",
      contactType: "Customer Service",
      areaServed: "India",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "RZ 770/2, Street No. 14, Sadh Nagar",
      addressLocality: "Palam",
      addressRegion: "Delhi",
      postalCode: "110045",
      addressCountry: "IN",
    },
    sameAs: ["https://www.instagram.com/noblekode?igsh=bWYwZmoxanF4N2E0"],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contact) }}
      />
      </>
  )
  }


  // FAQSchema

  export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    };
  
    return (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    );
  }
  