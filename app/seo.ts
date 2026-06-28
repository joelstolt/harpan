import type { Metadata } from "next";

const SITE_URL = "https://www.forskolanharpan.se";
const SITE_NAME = "Förskolan Harpan";

/**
 * Per-page metadata helper. Next.js shallow-merges metadata, so a subpage that
 * only sets title+description would inherit the root layout's og:title/og:url
 * (i.e. the start page). This sets canonical + OpenGraph per page explicitly.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} – ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – ${SITE_NAME}`,
      description,
    },
  };
}
