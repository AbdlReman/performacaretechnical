import type { Metadata } from "next";
import { localizedPath } from "@/i18n/routing";
import type { Locale } from "@/i18n/types";
import { isLocale } from "@/i18n/routing";

export const SITE_NAME = "Performa Care";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://performacaretechnical.ae"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/images/shopping-mall-cleaning-660x410.jpg";

export const PUBLIC_PATHS = [
  "/",
  "/about-us",
  "/services",
  "/staff-supply",
  "/hospitality",
  "/why-us",
  "/process",
  "/faq",
  "/contact",
  "/blog",
] as const;

export type SeoPath = (typeof PUBLIC_PATHS)[number] | `/blog/${string}`;

type PageSeo = {
  title: string;
  description: string;
};

const pageSeo: Record<(typeof PUBLIC_PATHS)[number], Record<Locale, PageSeo>> = {
  "/": {
    en: {
      title: "Professional Technical & Hospitality Services in Dubai | Performa Care",
      description:
        "Cleaning services, manpower supply, hospitality staffing and MEP maintenance across Dubai. 2-hour response. Call +971 50 224 7589.",
    },
    ar: {
      title: "خدمات تقنية وضيافة احترافية في دبي | بيرفورما كير",
      description:
        "خدمات التنظيف وتوفير العمالة وتوظيف الضيافة وصيانة MEP في دبي. استجابة خلال ساعتين. اتصل +971 50 224 7589.",
    },
  },
  "/about-us": {
    en: {
      title: "About Performa Care | Technical, Cleaning & Hospitality Services in Dubai",
      description:
        "Performa Care provides professional cleaning, trained staff supply, hospitality staffing and MEP maintenance for homes and businesses across Dubai.",
    },
    ar: {
      title: "من نحن | بيرفورما كير للخدمات التقنية والتنظيف والضيافة في دبي",
      description:
        "تقدم بيرفورما كير خدمات التنظيف الاحترافية وتوفير الموظفين المدربين وتوظيف الضيافة وصيانة MEP للمنازل والأعمال في دبي.",
    },
  },
  "/services": {
    en: {
      title: "Our Services | Cleaning, Staffing & Technical Maintenance | Performa Care",
      description:
        "Commercial and residential cleaning, special services, manpower supply, hospitality staffing and MEP maintenance across Dubai.",
    },
    ar: {
      title: "خدماتنا | التنظيف والعمالة والصيانة التقنية | بيرفورما كير",
      description:
        "تنظيف تجاري وسكني وخدمات خاصة وتوفير عمالة وتوظيف ضيافة وصيانة MEP في جميع أنحاء دبي.",
    },
  },
  "/staff-supply": {
    en: {
      title: "Manpower & Staff Supply | Cleaners, Housekeeping & Hospitality | Performa Care",
      description:
        "Hire trained cleaners, housekeeping staff, office boys, waiters and waitresses across Dubai.",
    },
    ar: {
      title: "توفير العمالة والموظفين | عمال نظافة وتدبير منزلي وضيافة | بيرفورما كير",
      description:
        "وظّف عمال نظافة مدربين وطاقم تدبير منزلي ومراسلين مكتبيين ونوادل ونادلات في دبي.",
    },
  },
  "/hospitality": {
    en: {
      title: "Hospitality Services in Dubai | Waiters, Waitresses & Event Staff | Performa Care",
      description:
        "Trained waiters, waitresses, housekeeping and hospitality staff for hotels, restaurants, cafés and events across Dubai.",
    },
    ar: {
      title: "خدمات الضيافة في دبي | نوادل ونادلات وطاقم فعاليات | بيرفورما كير",
      description:
        "نوادل ونادلات وطاقم تدبير منزلي وضيافة مدربون للفنادق والمطاعم والمقاهي والفعاليات في دبي.",
    },
  },
  "/why-us": {
    en: {
      title: "Why Choose Performa Care | Trusted Cleaning & Staffing Partner in Dubai",
      description:
        "2-hour response, trained professionals, eco-friendly products, agreed schedules and one partner for cleaning, staffing and maintenance.",
    },
    ar: {
      title: "لماذا بيرفورما كير | شريك موثوق للتنظيف والعمالة في دبي",
      description:
        "استجابة خلال ساعتين ومحترفون مدربون ومنتجات صديقة للبيئة وجداول متفق عليها وشريك واحد للتنظيف والعمالة والصيانة.",
    },
  },
  "/process": {
    en: {
      title: "How It Works | From First Call to a Spotless Site | Performa Care",
      description:
        "A simple process: tell us your needs, site assessment, agree the plan, and reliable delivery with a 2-hour response across Dubai.",
    },
    ar: {
      title: "آلية العمل | من أول اتصال إلى موقع نظيف | بيرفورما كير",
      description:
        "عملية بسيطة: أخبرنا باحتياجك، تقييم الموقع، الاتفاق على الخطة، وتنفيذ موثوق مع استجابة خلال ساعتين في دبي.",
    },
  },
  "/faq": {
    en: {
      title: "FAQ | Cleaning, Staff Supply & Maintenance Questions | Performa Care",
      description:
        "Answers about staff supply, Dubai coverage, 2-hour response, cleaning contracts, eco-friendly products, events staffing, MEP and quotes.",
    },
    ar: {
      title: "الأسئلة الشائعة | التنظيف والعمالة والصيانة | بيرفورما كير",
      description:
        "إجابات حول توفير العمالة وتغطية دبي والاستجابة خلال ساعتين وعقود التنظيف والمنتجات الصديقة للبيئة والفعاليات وMEP والعروض.",
    },
  },
  "/contact": {
    en: {
      title: "Contact Performa Care | Cleaning & Staffing Quotes in Dubai",
      description:
        "Contact Performa Care in Dubai. Call +971 50 224 7589 or email info@performacaretechnical.ae / support@performacaretechnical.ae.",
    },
    ar: {
      title: "تواصل مع بيرفورما كير | عروض التنظيف والعمالة في دبي",
      description:
        "تواصل مع بيرفورما كير في دبي. اتصل +971 50 224 7589 أو راسل info@performacaretechnical.ae / support@performacaretechnical.ae.",
    },
  },
  "/blog": {
    en: {
      title: "Blog | Cleaning, Staffing & Hospitality Insights | Performa Care",
      description:
        "Tips and insights on cleaning, staffing and hospitality services from Performa Care in Dubai.",
    },
    ar: {
      title: "المدونة | رؤى حول التنظيف والعمالة والضيافة | بيرفورما كير",
      description:
        "نصائح ورؤى حول خدمات التنظيف والعمالة والضيافة من بيرفورما كير في دبي.",
    },
  },
};

export function toLocale(raw: string | undefined): Locale {
  return raw && isLocale(raw) ? raw : "en";
}

export function absoluteUrl(path: string, locale: Locale = "en"): string {
  // Asset paths should never get a locale prefix.
  if (
    path.startsWith("/images/") ||
    path.startsWith("/favicon") ||
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  }
  const localized = localizedPath(path, locale);
  if (localized === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${localized}`;
}

export function languageAlternates(path: string) {
  return {
    en: absoluteUrl(path, "en"),
    ar: absoluteUrl(path, "ar"),
    "x-default": absoluteUrl(path, "en"),
  };
}

export function buildPageMetadata(
  path: (typeof PUBLIC_PATHS)[number],
  localeRaw: string | undefined,
  extras?: Partial<Metadata>
): Metadata {
  const locale = toLocale(localeRaw);
  const seo = pageSeo[path][locale];
  const canonical = absoluteUrl(path, locale);
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: canonical,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      images: [{ url: ogImage, width: 660, height: 410, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
    ...extras,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    name: "Performa Care Technical Services",
    alternateName: ["Performa Care", "Performa Care Hospitality Services"],
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    telephone: "+971502247589",
    email: "info@performacaretechnical.ae",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 476, 4th Floor, Arjumand Building, 17th St, Green Community Village",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971502247589",
        contactType: "customer service",
        email: "info@performacaretechnical.ae",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        email: "support@performacaretechnical.ae",
        contactType: "customer support",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };
}
