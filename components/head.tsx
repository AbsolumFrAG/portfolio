import NextHead from "next/head";
import { useTheme } from "next-themes";

const Head = ({
  title = "Lou Tigroudja - Développeur Web",
  description = "Salut, je m'appelle Lou, ⚡️Développeur Web qui ❤️ apprendre quotidiennement.",
  image = "https://lou-tigroudja.com/og.png",
  children,
}: {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  const { systemTheme } = useTheme();

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="og:title" content={title} />

      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      <meta name="twitter:image" content={image} />
      <meta name="image" property="og:image" content={image} />

      <meta name="og:url" content="https://lou-tigroudja.com" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="fr" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Absolum_FrAGV2" />
      <meta name="apple-mobile-web-app-title" content="Lou Tigroudja" />
      <meta name="author" content="Lou Tigroudja" />

      <link
        rel="alternate"
        type="application/rss+xml"
        title="Flux RSS pour lou-tigroudja.com"
        href="/feed.xml"
      />

      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicon/pinned.svg" color="#000000" />
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}

      {!systemTheme || systemTheme === "dark" ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicon/dark.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicon/light.png"
            key="dynamic-favicon-alternate"
          />
          *
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  );
};

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicon/android-icon-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/favicon/manifest.json",
  },
];

export default Head;
