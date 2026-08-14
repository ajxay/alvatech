import metaSource from "../meta.json";

const SITE_ORIGIN = "https://alvatech.se";

function buildPageMetaMap() {
  const map = new Map();

  for (const entries of Object.values(metaSource)) {
    if (!Array.isArray(entries)) continue;
    for (const entry of entries) {
      if (!entry?.url) continue;
      const pathname = new URL(entry.url).pathname.replace(/\/$/, "") || "/";
      map.set(pathname, {
        title: entry.meta_title,
        description: entry.meta_description,
      });
    }
  }

  return map;
}

const PAGE_META_BY_PATH = buildPageMetaMap();

const homeMeta = PAGE_META_BY_PATH.get("/") ?? {
  title: "Alvatech",
  description:
    "Skala upp din verksamhet med Alvatech. Vi kombinerar högpresterande e-handelsutveckling, datadriven annonsering och CRM-automation för hållbar tillväxt.",
};

/** Default metadata for pages without a dedicated entry in meta.json */
export const defaultSiteMetadata = {
  title: homeMeta.title,
  description: homeMeta.description,
};

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.replace(/\/$/, "") || "/";
}

function languageAlternates(pathname) {
  const path = normalizePathname(pathname);
  const enHref =
    path === "/"
      ? `${SITE_ORIGIN}/?lang=en`
      : `${SITE_ORIGIN}${path}?lang=en`;
  const svHref =
    path === "/"
      ? `${SITE_ORIGIN}/?lang=sv`
      : `${SITE_ORIGIN}${path}?lang=sv`;

  return {
    en: enHref,
    sv: svHref,
    "x-default": svHref,
  };
}

/**
 * Canonical + hreflang alternates for a route path.
 * EN/SV share the same path; language versions are distinguished with ?lang=.
 */
export function canonicalFor(pathname) {
  const path = normalizePathname(pathname);
  return {
    canonical: path,
    languages: languageAlternates(path),
  };
}

/** Next.js metadata object for a route path (e.g. `/about-us`), including canonical + hreflang. */
export function pageMetadataFor(pathname) {
  const key = normalizePathname(pathname);
  const entry = PAGE_META_BY_PATH.get(key);

  return {
    title: entry ? entry.title : defaultSiteMetadata.title,
    description: entry ? entry.description : defaultSiteMetadata.description,
    alternates: canonicalFor(key),
  };
}
