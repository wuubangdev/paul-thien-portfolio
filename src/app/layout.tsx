import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {



  return {
    title: "Paul",
    description: 'Paul Thien Portfolio',
    openGraph: {
      images: ['https://github.com/wuubangdev/share-host-file/blob/main/avatar.png?raw=true'],
      type: "website",
      description: 'Paul Thien Portfolio',
      emails: 'thienbao.trang97@gmail.com',
      countryName: 'Viet Nam',
    },
  }
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/houdini.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
