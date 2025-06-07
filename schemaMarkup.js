;(function () {
  // ───────────────────────────────────────────────────────────────────────────────
  // 1) ORGANIZATION SCHEMA (dynamic mainEntityOfPage)
  // ───────────────────────────────────────────────────────────────────────────────
  function buildOrganizationSchema() {
    const currentUrl = window.location.origin + window.location.pathname;

    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Drop",
      "description": "Drop - All-in-One Car App in Egypt",
      "url": "https://drop-eg.com/",
      "logo": "https://drop-eg.com/open-graph/drop-app-logo.png",
      "image": "https://drop-eg.com/open-graph/open-graph-banner.png",
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
      "keywords": "Car wash Egypt, Car wash app, Car services Egypt, Car repair Egypt, Car maintenance Egypt, Car detailing app, Mobile car wash, Car service booking, Vehicle inspection Egypt, Roadside assistance Egypt, Oil change service Egypt, Tire replacement Egypt, Battery replacement Egypt, Car diagnostics Egypt, Engine diagnostics Egypt, Car AC repair Egypt, Brake pad replacement Egypt, Wheel alignment and balancing, Car painting and polishing Egypt, Car cleaning at home, Interior cleaning and sterilization, Headlight restoration service, Workshop locator app, Auto service platform, Automotive startups, Automotive SaaS Egypt, Garage management software, Smart car services, Custom car modification Egypt, Pre-purchase car inspection, Car underbody rustproofing, Transmission repair Egypt, Suspension and steering repair, Used car inspection Egypt, Car mechanic near me Egypt, Hybrid and electric car services, Vehicle maintenance platform",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      }
    };

    return JSON.stringify(org, null, 2);
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 2) DYNAMIC BREADCRUMB SCHEMA BUILDER
  // ───────────────────────────────────────────────────────────────────────────────
  function buildBreadcrumbSchema() {
  // Map URL‐segments (slugs) to friendly names.
  // You can add entries here for things like “maadi” or “new-cairo” if you want exact custom names.
  const breadcrumbNameMap = {
    "": "Home",
    "egypt": "Egypt",
    "carwash": "Car Wash",
    "washdrop": "WashDrop",
    "washdrop-coverage": "WashDrop Coverage",
    "early-access": "Early Access",
    "register": "Register",
    "investor-relations": "Investor Relations",
    "blog": "Blog",
    "is-it-safe-to-wash-cars-engine": "Is It Safe to Wash Cars Engine?",
    "the-ultimate-guide-exterior-car-washing": "The Ultimate Guide to Exterior Car Washing",
    "the-ultimate-guide-interior-car-washing": "The Ultimate Guide to Interior Car Washing",
    "under-construction": "Top Workshops in Egypt",
    "side-menu.html": "Navigation Menu",
    
    "6th-of-october":            "6th of October",
    "carwash-in-6th-of-october": "Car Wash in 6th of October",

    "heliopolis":            "Heliopolis",
    "carwash-in-heliopolis": "Car Wash in Heliopolis",

    "maadi":            "Maadi",
    "carwash-in-maadi": "Car Wash in Maadi",

    "mohandessin":            "Mohandessin",
    "carwash-in-mohandessin": "Car Wash in Mohandessin",

    "nasr-city":            "Nasr City",
    "carwash-in-nasr-city": "Car Wash in Nasr City",

    "new-cairo":            "New Cairo",
    "carwash-in-new-cairo": "Car Wash in New Cairo",

    "sheikh-zayed":            "Sheikh Zayed",
    "carwash-in-sheikh-zayed": "Car Wash in Sheikh Zayed",

    "zamalek":            "Zamalek",
    "carwash-in-zamalek": "Car Wash in Zamalek"    
  };

  const rawPath = window.location.pathname;                 // e.g. "/egypt/carwash/maadi/carwash-in-maadi.html"
  const segments = rawPath.split("/").filter(Boolean);      // ["egypt","carwash","maadi","carwash-in-maadi.html"]

  // Always start with “Home” at position 1
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: breadcrumbNameMap[""] || "Home",
      item: window.location.origin + "/"
    }
  ];

  let cumulativePath = "";
  segments.forEach((seg, index) => {
    cumulativePath += "/" + seg;
    const position = index + 2;

    // 1) Lowercase the segment
    const rawSlug = seg.toLowerCase();
    // 2) Remove any trailing ".html" for name lookup/fallback
    const cleanSlug = rawSlug.replace(/\.html$/, "");
    // 3) Look up in the map, or generate “Title Case” from cleanSlug
    const name =
      breadcrumbNameMap[cleanSlug] ||
      cleanSlug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    // 4) Use the full cumulativePath (with .html if present) for the item URL
    const itemUrl = window.location.origin + cumulativePath;

    itemListElement.push({
      "@type": "ListItem",
      position: position,
      name: name,
      item: itemUrl
    });
  });

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement
  };

  return JSON.stringify(breadcrumb, null, 2);
}

  // ───────────────────────────────────────────────────────────────────────────────
  // 3) MOBILE APPLICATION SCHEMA (iOS App Store)
  // ───────────────────────────────────────────────────────────────────────────────
function buildMobileAppSchema() {
  const downloadUrls = [
    "https://apps.apple.com/eg/app/drop-carwash-repairs-more/id6746170335",
    "https://play.google.com/store/apps/details?id=com.dropappegypt.dropapplication&hl=en"
  ];

  const mobileApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Drop – All-in-One Car App",
    "description": "Download Drop on iOS or Android to get all your car's needs in Egypt from one place.",
    "operatingSystem": ["iOS", "Android"],
    "applicationCategory": "Business",
    "url": "https://drop-eg.com/",
    "downloadUrl": downloadUrls,
    "publisher": {
      "@type": "Organization",
      "name": "Drop",
      "url": "https://drop-eg.com/"
    }
  };

  return JSON.stringify(mobileApp, null, 2);
}


  // ───────────────────────────────────────────────────────────────────────────────
  // 4) SCRIPT INJECTION UTILITY
  // ───────────────────────────────────────────────────────────────────────────────
  function injectJsonLd(jsonString) {
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = jsonString;
    document.head.appendChild(scriptTag);
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 5) ONCE THE DOM IS READY, INJECT ALL SCHEMAS
  // ───────────────────────────────────────────────────────────────────────────────
  function injectAllSchemas() {
    injectJsonLd(buildOrganizationSchema());
    injectJsonLd(buildBreadcrumbSchema());
    injectJsonLd(buildMobileAppSchema());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectAllSchemas);
  } else {
    injectAllSchemas();
  }
})();