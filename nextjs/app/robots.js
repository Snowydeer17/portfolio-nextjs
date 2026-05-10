export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
    ],
    sitemap: 'https://portfolio-nextjs-rke.vercel.app/sitemap.xml',
  }
}