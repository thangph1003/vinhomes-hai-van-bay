import type { Metadata } from "next";

const SITE_URL = process.env.SITE_URL

export function generateMetadata(): Metadata {
  const ogUrl = `${SITE_URL}/images/banner-resize.webp`;
  const logoUrl = `${SITE_URL}/images/logo.png`;
  const appleIconUrl = `${SITE_URL}/images/logo.png`;

  return {
    title: {
      default: "Vinhomes Làng Vân (Hải Vân Bay): Dự Án Nghỉ Dưỡng Ven Biển Đà Nẵng",
      template: "%s | Vinhomes Hải Vân Bay"
    },
    description: "Vinhomes Làng Vân (Vinhomes Hải Vân Bay) là đại đô thị nghỉ dưỡng ven biển do Vingroup phát triển, định hình không gian sống chất lượng cao và giá trị tích lũy dài hạn.",
    keywords: ["Vinhomes", "Hải Vân Bay", "căn hộ", "Đà Nẵng", "ven biển", "cao cấp", "bất động sản"],
    authors: [{ name: "Vinhomes" }],
    creator: "Vinhomes",
    publisher: "Vinhomes",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(`${SITE_URL}`),
    alternates: {
      canonical: `${SITE_URL}`,
    },
    openGraph: {
      title: "Vinhomes Làng Vân - Hải Vân Bay: Dự Án Nghỉ Dưỡng Ven Biển Đà Nẵng",
      description: "Vinhomes Làng Vân (Vinhomes Hải Vân Bay) là đại đô thị nghỉ dưỡng ven biển do Vingroup phát triển, định hình không gian sống chất lượng cao và giá trị tích lũy dài hạn.",
      url: SITE_URL,
      siteName: "Vinhomes Hải Vân Bay",
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: "Vinhomes Hải Vân Bay - Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vinhomes Làng Vân (Hải Vân Bay): Dự Án Nghỉ Dưỡng Ven Biển Đà Nẵng",
      description: "Vinhomes Làng Vân (Vinhomes Hải Vân Bay) là đại đô thị nghỉ dưỡng ven biển do Vingroup phát triển, định hình không gian sống chất lượng cao và giá trị tích lũy dài hạn.",
      images: [ogUrl],
      creator: "@vinhomes",
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: logoUrl,
      shortcut: logoUrl,
      apple: appleIconUrl,
    },
    manifest: "/manifest.json",
  };
}
