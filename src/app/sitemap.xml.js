// pages/sitemap.xml.js
const createSitemap = (urls) => `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${`https://www.articulos5estrellas.com.uy/${url}`}</loc>
      <changefreq>monthly</changefreq>
    </url>
  `,
    )
    .join('')}
</urlset>
`;

const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
  const urls = ['sobre-nosotros', 'contacto']; // Añade otras URLs según sea necesario

  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(urls));
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;