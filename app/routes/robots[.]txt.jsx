export function loader() {
  const robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/
    
    User-agent: *
    Allow: /
    
    Sitemap: http://www.recoveryocean.com/sitemap.xml
  `

  return new Response(robotText,{
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    }
  })
}