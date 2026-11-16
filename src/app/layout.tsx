import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Satisfy } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getNavLinks, getSite } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  weight: "400",
  variable: "--font-satisfy",
  subsets: ["latin"],
});

// Site-wide defaults from CMS Global SEO; each page sets its own title, description and canonical
export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    metadataBase: new URL(SITE_URL),
    title: site.siteTitle,
    description: site.siteDescription,
    applicationName: site.siteTitle,
    verification: site.searchConsoleId ? { google: site.searchConsoleId } : undefined,
  };
}

// The site is designed for light mode only; stop mobile browsers (Chrome,
// Samsung Internet) from force-darkening it, which hides the header logo.
export const viewport: Viewport = {
  colorScheme: "only light",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [site, navLinks] = await Promise.all([getSite(), getNavLinks()]);
  const { googleAnalyticsId: gaId, gtmId } = site;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${satisfy.variable} antialiased`}>
      <body className="font-sans min-h-screen flex flex-col bg-white text-gray-900">
        {gtmId && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        )}
        {site.customHeaderScripts && <div hidden dangerouslySetInnerHTML={{ __html: site.customHeaderScripts }} />}
        <SmoothScroll>
          <Header
            links={navLinks}
            logo={site.logo || "/logo-header.webp"}
            mobileLogo={site.socialLinks.footerLogo || "/logo1.webp"}
            brandTitle={site.socialLinks.brandTitle}
          />
          <main className="flex-grow">
            {children}
          </main>
          <Footer site={site} />
        </SmoothScroll>
        {site.customFooterScripts && <div hidden dangerouslySetInnerHTML={{ __html: site.customFooterScripts }} />}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </body>
    </html>
  );
}
