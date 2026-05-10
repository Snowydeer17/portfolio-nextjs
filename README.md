# portfolio-nextjs
## What I did,
Converted HTML pages into Next.js routes (app directory),
Created reusable components (Header, Footer),
Used Next.js Image component for optimized images,
Organized assets into the public folder,
Applied CSS modules for styling,

## Challenges,
Fixing JSX syntax differences (className, closing tags),
Debugging layout and styling issues,
Getting forms and interactions working properly,

## Files to check,
/app/page.tsx (home),
/app/about/page.tsx,
/app/contact/page.tsx,
/components/Header.tsx,
/components/Footer.tsx


## Dynamic pages slug response
The slug creates a URL-friendly identifier for each project, such as shuck, so Next.js can match /projects/shuck to the correct project object. Dynamic routes are useful because one page template can display different project information depending on the slug. This makes a portfolio easier to expand because I can add more creative projects to the data array later without manually building a new page from scratch each time. For Robotic Kirin, this structure works well because each larger project, such as SHUCK, can eventually have its own showcase page

## Robots.txt response
A robots.txt file tells search engines which parts of a website they are allowed or not allowed to crawl and index. This helps website owners control how search engines interact with their site. Blocking certain pages can help prevent private, unfinished, or unnecessary pages from appearing in search results. For example, admin pages or hidden development pages are often blocked from search engine crawlers

## Sitemap response
A sitemap is important for SEO because it helps search engines discover and organize the pages on a website. It gives search engines a clearer understanding of the structure of the site and which pages are important. This can help pages appear in search results more efficiently and improve indexing. Sitemaps are especially useful for websites with multiple pages or dynamic content

## Google analytics response
Google Analytics helps website owners understand how people interact with their website, such as page visits, traffic sources, and user activity. This information is useful because it can show which pages are getting attention and which areas may need improvement. For a portfolio site, analytics can help identify what projects visitors are most interested in. This can guide future updates and help make the site more effective.

## Google search console response
Google Search Console helps website owners monitor how their site appears in Google search results. It provides information such as search impressions, clicks, indexing status, sitemap submissions, and usability issues. This data helps developers improve SEO, fix indexing problems, and better understand how users discover their website. Search Console can also help identify errors that may prevent pages from appearing correctly in search engines.