import type { Metadata } from "next";
import "./globals.css";
import "./product.css";
import "./polish.css";

const loginlessBuild = process.env.NEXT_PUBLIC_ORBIT_LOGINLESS === "1";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-one-peach-zk5xcjij5u.vercel.app";
const title = loginlessBuild
  ? "ORBIT | 아이디어에서 팀까지"
  : "ORBIT | 함께 만들 팀원을 잇습니다";
const description = loginlessBuild
  ? "아이디어를 필요한 역할로 구체화하고, 팀원 매칭부터 합류 합의까지 연결합니다."
  : "아이디어를 필요한 역할로 구체화하고, 함께 만들 팀원을 만나는 프로젝트 매칭 플랫폼.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "ORBIT",
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "ORBIT",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
