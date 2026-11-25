// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
// Naver and other participating engines share submissions).
//
// Run after a production deploy:  npm run indexnow
//
// The key below must match public/<key>.txt, which IndexNow fetches from
// https://blossomrocket.studio/<key>.txt to verify ownership.

const SITE_URL = "https://blossomrocket.studio";
const INDEXNOW_KEY = "781139678eeb9011b48b940b596de7fb";

async function main() {
  const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(`Could not fetch sitemap: ${sitemapRes.status}`);
  }
  const xml = await sitemapRes.text();
  const urlList = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g), (m) =>
    m[1].trim(),
  );

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  // 200 = accepted, 202 = accepted and key validation pending.
  console.log(`IndexNow: submitted ${urlList.length} URLs → ${res.status}`);
  if (!res.ok) {
    console.error(await res.text());
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
