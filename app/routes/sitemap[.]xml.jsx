export function loader() {
  const content = `
  <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <url>
    <loc>https://www.recoveryocean.com/</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/posts</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/about</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/contact</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/encountering-addicts-from-our-past</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/how-i-managed-to-stop-using-heroin</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/privacy-policy</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/3-lies-addicts-tell-themselves</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/the-most-humiliating-moment-of-my-drug-addiction</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/do-drug-addicts-fall-in-love</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/do-you-have-to-talk-at-na-meetings</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/are-drug-addicts-mean</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/fomo-in-early-recovery</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://www.recoveryocean.com/blog/why-do-drug-addicts-steal-copper</loc>
    <lastmod>2022-06-10T20:40:54+00:00</lastmod>
    <priority>0.64</priority>
  </url>
</urlset>`

return new Response(content, {
  status: 200,
  headers: {
    "Content-Type": "application/xml",
    "xml-version": "1.0",
    "encoding": "UTF-8"
  }
})

}