import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/lib/a11y/SkipLink";
import { LiveRegionProvider } from "@/lib/a11y/LiveRegion";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo/schemas";

const SITE_URL = "https://prestige-chauffeur.example.com";

const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = buildMetadata({
  title: "Prestige Chauffeur — Luxury Car Service",
  description: "Premier luxury chauffeur service. Airport transfers, corporate travel, weddings, and special events. Rolls-Royce, Bentley, Mercedes S-Class. Available 24/7.",
  siteName: "Prestige Chauffeur",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
  titleTemplate: "%s — Prestige Chauffeur",
  keywords: ["luxury chauffeur", "airport transfer", "Rolls-Royce", "Bentley", "Mercedes S-Class", "wedding car", "corporate travel"],
  themeColor: "#0a0a0a",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased overflow-x-clip">
        <SkipLink />
        <LiveRegionProvider>{children}</LiveRegionProvider>
        <JsonLd
          data={localBusinessSchema({
            type: "TaxiService",
            name: "Prestige Chauffeur",
            description: "Luxury chauffeur and private hire service operating 24/7.",
            url: SITE_URL,
            telephone: "+44 20 7946 0900",
            email: "bookings@prestige-chauffeur.example.com",
            image: `${SITE_URL}/opengraph-image`,
            priceRange: "£££",
            address: {
              streetAddress: "1 Brook Street",
              addressLocality: "London",
              postalCode: "W1S 1AA",
              addressCountry: "GB",
            },
            openingHours: [{ dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
            sameAs: ["https://instagram.com/prestige-chauffeur", "https://linkedin.com/company/prestige-chauffeur"],
            aggregateRating: { ratingValue: 4.95, reviewCount: 612 },
          })}
        />
      </body>
    </html>
  );
}
