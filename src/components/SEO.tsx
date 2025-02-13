import { Helmet, HelmetProvider } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
}

const SEO = ({ title, description, canonicalUrl, keywords }: SeoProps) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          keywords ||
          "desarrollador web, portafolio, react, typescript, php, laravel, aws, programación"
        }
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={canonicalUrl || window.location.href} />
    </Helmet>
  </HelmetProvider>
);

export default SEO;
