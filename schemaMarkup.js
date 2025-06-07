;(function () {
  // ───────────────────────────────────────────────────────────────────────────────
  // UTILITY: JSON-LD Script Injector (with dedupe guard)
  // ───────────────────────────────────────────────────────────────────────────────
  function injectJsonLd(jsonString, marker) {
    if (document.querySelector(`script[type="application/ld+json"][data-drop-schema="${marker}"]`)) {
      return;
    }
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.setAttribute("data-drop-schema", marker);
    scriptTag.text = jsonString;
    document.head.appendChild(scriptTag);
  }

  // Normalize URL (remove trailing slash except for root)
  function normalizeUrl(url) {
    return url.endsWith("/") && url.length > window.location.origin.length + 1
      ? url.slice(0, -1)
      : url;
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 1) ORGANIZATION SCHEMA
  // ───────────────────────────────────────────────────────────────────────────────
  function buildOrganizationSchema() {
    const baseUrl = normalizeUrl(window.location.origin + "/");
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": baseUrl + "#organization",
      "name": "Drop",
      "description": "Drop - All-in-One Car App in Egypt",
      "url": baseUrl,
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.0444",
          "longitude": "31.2357"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cairo",
          "addressLocality": "Cairo",
          "addressRegion": "Cairo Governorate",
          "addressCountry": "EG"
        }
      },
      "areaServed": "EG",
      "founder": {
        "@type": "Person",
        "name": "Youssef Elhossary"
      },
      "keywords": "Car wash Egypt, Car wash app, Car services Egypt, Car repair Egypt, Car maintenance Egypt, Car detailing app, Mobile car wash, Car service booking, Vehicle inspection Egypt, Roadside assistance Egypt, Oil change service Egypt, Tire replacement Egypt, Battery replacement Egypt, Car diagnostics Egypt, Engine diagnostics Egypt, Car AC repair Egypt, Brake pad replacement Egypt, Wheel alignment and balancing, Car painting and polishing Egypt, Car cleaning at home, Interior cleaning and sterilization, Headlight restoration service, Workshop locator app, Auto service platform, Automotive startups, Automotive SaaS Egypt, Garage management software, Smart car services, Custom car modification Egypt, Pre-purchase car inspection, Car underbody rustproofing, Transmission repair Egypt, Suspension and steering repair, Used car inspection Egypt, Car mechanic near me Egypt, Hybrid and electric car services, Vehicle maintenance platform"
    }, null, 2);
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 2) BREADCRUMB SCHEMA
  // ───────────────────────────────────────────────────────────────────────────────
  function buildBreadcrumbSchema() {
      const nameMap = {
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
    "app": "Web App"
    
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

    const rawPath = normalizeUrl(window.location.pathname);
    const segments = rawPath.split("/").filter(Boolean);
    const origin = window.location.origin;

    const itemList = [{
      "@type": "ListItem",
      position: 1,
      name: nameMap[""],
      item: origin + "/"
    }];

    let cumPath = "";
    segments.forEach((seg, idx) => {
      cumPath += "/" + seg;
      const clean = seg.replace(/\.html$/, "").toLowerCase();
      const name = nameMap[clean] ||
                   clean.replace(/-/g, " ")
                        .replace(/\b\w/g, c => c.toUpperCase());
      itemList.push({
        "@type": "ListItem",
        position: idx + 2,
        name: name,
        item: normalizeUrl(origin + cumPath)
      });
    });

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": normalizeUrl(origin + rawPath) + "#breadcrumb",
      itemListElement: itemList
    }, null, 2);
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 3) MOBILE APPLICATION SCHEMAS (iOS & Android separate)
  // ───────────────────────────────────────────────────────────────────────────────
  function buildMobileAppSchemas() {
    const origin = window.location.origin;
    const common = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "Drop – All-in-One Car App",
      "description": "Download Drop on iOS or Android to get all your car's needs in Egypt from one place.",
      "applicationCategory": "Business",
      "url": "https://drop-eg.com/",
      "publisher": {
        "@type": "Organization",
        "@id": normalizeUrl(origin + "/") + "#organization"
      }
    };

    const ios = Object.assign({}, common, {
      "operatingSystem": "iOS",
      "downloadUrl": "https://apps.apple.com/eg/app/drop-carwash-repairs-more/id6746170335",
      "@id": "https://apps.apple.com/eg/app/drop-carwash-repairs-more/id6746170335#app"
    });

    const android = Object.assign({}, common, {
      "operatingSystem": "Android",
      "downloadUrl": "https://play.google.com/store/apps/details?id=com.dropappegypt.dropapplication&hl=en",
      "@id": "https://play.google.com/store/apps/details?id=com.dropappegypt.dropapplication&hl=en#app"
    });

    return [JSON.stringify(ios, null, 2), JSON.stringify(android, null, 2)];
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 4) WEBPAGE SCHEMA (optional but recommended)
  // ───────────────────────────────────────────────────────────────────────────────
  function buildWebPageSchema() {
    const url = normalizeUrl(window.location.origin + window.location.pathname);
    const descMeta = document.querySelector('meta[name="description"]');
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url + "#webpage",
      "url": url,
      "name": document.title,
      "description": descMeta?.content || "Drop – All-in-One Car App in Egypt",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": normalizeUrl(window.location.origin + "/") + "#website"
      },
      "mainEntity": {
        "@type": "Organization",
        "@id": normalizeUrl(window.location.origin + "/") + "#organization"
      }
    }, null, 2);
  }

  // ───────────────────────────────────────────────────────────────────────────────
  // 5) INJECT ALL SCHEMAS AFTER DOM READY
  // ───────────────────────────────────────────────────────────────────────────────
  function injectAllSchemas() {
    injectJsonLd(buildOrganizationSchema(), "org");
    injectJsonLd(buildBreadcrumbSchema(), "breadcrumb");
    const [iosSchema, androidSchema] = buildMobileAppSchemas();
    injectJsonLd(iosSchema, "mobile-ios");
    injectJsonLd(androidSchema, "mobile-android");
    injectJsonLd(buildWebPageSchema(), "webpage");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectAllSchemas);
  } else {
    injectAllSchemas();
  }
})();
