import topics from "../data/topics.json";
import {
  computerFundamentalsLessons,
  computerFundamentalsTopicGroups
} from "../data/computerFundamentalsCourse.js";
import { siteInfo, staticPages, toAbsoluteUrl } from "../data/siteInfo.js";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const pagePaths = [
  ...staticPages.map((page) => page.path),
  ...computerFundamentalsTopicGroups.map((group) => group.contentUrl),
  ...topics.map((topic) => topic.contentUrl),
  ...computerFundamentalsLessons.map((lesson) => lesson.contentUrl),
  ...topics.map((topic) => topic.quizUrl),
  ...computerFundamentalsLessons.map((lesson) => lesson.quizUrl)
];

const uniquePaths = Array.from(new Set(pagePaths)).sort((a, b) => a.localeCompare(b));

function toSitemapUrl(path: string) {
  const normalizedPath = path === "/" || path.endsWith("/") ? path : `${path}/`;
  return toAbsoluteUrl(normalizedPath);
}

export function GET() {
  const urls = uniquePaths
    .map((path) => {
      const priority = path === "/" ? "1.0" : path.includes("/quizzes/") ? "0.6" : "0.8";
      return [
        "  <url>",
        `    <loc>${escapeXml(toSitemapUrl(path))}</loc>`,
        `    <lastmod>${siteInfo.lastReviewedDate}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>"
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
