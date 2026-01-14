import type { Metadata } from "next";

const SITE_URL = process.env.SITE_URL ?? "https://vinhomes-hai-van-bay.vercel.app";

export function generateMetadata(): Metadata {
  const ogUrl = `${SITE_URL}/images/banner.webp`;
  const logoUrl = `${SITE_URL}/images/logo.png`;
  const appleIconUrl = `${SITE_URL}/images/apple-touch-icon.png`;

  return {
    title: {
      default: "Vinhomes Hải Vân Bay - Căn hộ cao cấp ven biển Đà Nẵng",
      template: "%s | Vinhomes Hải Vân Bay"
    },
    description: "Vinhomes Hải Vân Bay - Tổ hợp căn hộ cao cấp ven biển tại thành phố Đà Nẵng. Kiến tạo cuộc sống hiện đại và đẳng cấp với tầm nhìn biển tuyệt đẹp.",
    keywords: ["Vinhomes", "Hải Vân Bay", "căn hộ", "Đà Nẵng", "ven biển", "cao cấp", "bất động sản"],
    authors: [{ name: "Vinhomes" }],
    creator: "Vinhomes",
    publisher: "Vinhomes",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://vinhomes-hai-van-bay.vercel.app'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: "Vinhomes Hải Vân Bay - Căn hộ cao cấp ven biển Đà Nẵng",
      description: "Tổ hợp căn hộ cao cấp ven biển tại thành phố Đà Nẵng. Kiến tạo cuộc sống hiện đại và đẳng cấp.",
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
      title: "Vinhomes Hải Vân Bay - Căn hộ cao cấp ven biển Đà Nẵng",
      description: "Tổ hợp căn hộ cao cấp ven biển tại thành phố Đà Nẵng. Kiến tạo cuộc sống hiện đại và đẳng cấp.",
      images: [ogUrl],
      creator: "@vinhomes",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
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
