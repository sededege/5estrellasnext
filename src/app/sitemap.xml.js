const EXTERNAL_DATA_URL = 'https://www.articulos5estrellas.com.uy/producto';

function convertToSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.articulos5estrellas.com.uy</loc>
     </url>
     <url>
       <loc>https://www.articulos5estrellas.com.uy/sobre-nosotros</loc>
     </url>
     <url>
       <loc>https://www.articulos5estrellas.com.uy/contacto</loc>
     </url>
     ${posts
       .map(({ title }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${convertToSlug(title)}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = require('./components/products.json')

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);
console.log(site)
  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;