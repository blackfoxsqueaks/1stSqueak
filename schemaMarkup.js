// schemaMarkup.js

// Organization Schema
const organizationSchema = `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Drop",
  "description": "Drop - All-in-One Car App in Egypt",
  "url": "https://drop-eg.com/",
  "logo": "https://drop-eg.com/GoogleSearchImage.png",
  "image": "https://drop-eg.com/SEOimage.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+201271152411",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://facebook.com/drivewithdrop",
    "https://instagram.com/drivewithdrop",
    "https://linkedin.com/company/drivewithdrop"
  ],
  "foundingDate": "2022",
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cairo",
      "addressCountry": "EG"
    }
  },
  "areaServed": "EG",
  "founder": {
    "@type": "Person",
    "name": "Youssef Elhossary"
  },
  "keywords": [
    "Car wash Egypt",
    "Car wash app",
    "Car app",
    "Car services Egypt",
    "Car repair Egypt",
    "Workshop owners",
    "Investors",
    "Startups Egypt",
    "Mobile car wash",
    "Vehicle detailing Egypt",
    "Automotive services",
    "Car maintenance Egypt",
    "Car cleaning solutions",
    "Eco-friendly car wash",
    "On-demand car services",
    "Car wash franchises",
    "Car wash technology",
    "Fleet car services",
    "Car care app",
    "Automobile repair solutions",
    "Car service marketplace",
    "Vehicle inspection Egypt",
    "Roadside assistance Egypt",
    "Car service booking",
    "Automotive startups",
    "Car detailing app"
    ],
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://drop-eg.com/" }
}`;

// Breadcrumb Schema
const breadcrumbSchema = `
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://drop-eg.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "WashDrop",
      "item": "https://drop-eg.com/egypt/carwash/washdrop"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "WashDrop Coverage",
      "item": "https://drop-eg.com/egypt/carwash/washdrop-coverage"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Early Access Registration",
      "item": "https://drop-eg.com/early-access/register"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Investor Relations",
      "item": "https://drop-eg.com/investor-relations"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Blog",
      "item": "https://drop-eg.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Is It Safe to Wash Cars Engine?",
      "item": "https://drop-eg.com/blog/is-it-safe-to-wash-cars-engine"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "The Ultimate Guide to Exterior Car Washing",
      "item": "https://drop-eg.com/blog/the-ultimate-guide-exterior-car-washing"
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "The Ultimate Guide to Interior Car Washing",
      "item": "https://drop-eg.com/blog/the-ultimate-guide-interior-car-washing"
    },
    {
      "@type": "ListItem",
      "position": 10,
      "name": "Top Workshops in Egypt",
      "item": "https://drop-eg.com/under-construction"
    },
    {
      "@type": "ListItem",
      "position": 11,
      "name": "Navigation Menu",
      "item": "https://drop-eg.com/side-menu.html"
    }
  ]
}`;

// Inject the schema markup
const injectSchema = (schema, type) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = schema;
  document.head.appendChild(script);
};

// Call the function to inject both schemas
injectSchema(organizationSchema);
injectSchema(breadcrumbSchema);
