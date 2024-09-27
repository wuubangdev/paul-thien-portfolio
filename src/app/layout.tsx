import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Paul Portfolio",
    description: '🎨 Houdini FX Artist & 3D Generalist | Tạo nên những hiệu ứng hình ảnh động sống động và chân thực nhất! Với kinh nghiệm phong phú trong việc sử dụng Houdini và các công cụ 3D khác, tôi mang đến những giải pháp sáng tạo và hiệu quả cho các dự án điện ảnh, game, và quảng cáo. Từ việc tạo ra các hiệu ứng đặc biệt phức tạp đến xây dựng toàn bộ môi trường 3D, tôi luôn hướng đến sự hoàn hảo trong từng khung hình. 🌟',
    openGraph: {
      title: "Paul Portfolio",
      description: '🎨 Houdini FX Artist & 3D Generalist | Tạo nên những hiệu ứng hình ảnh động sống động và chân thực nhất! Với kinh nghiệm phong phú trong việc sử dụng Houdini và các công cụ 3D khác, tôi mang đến những giải pháp sáng tạo và hiệu quả cho các dự án điện ảnh, game, và quảng cáo. Từ việc tạo ra các hiệu ứng đặc biệt phức tạp đến xây dựng toàn bộ môi trường 3D, tôi luôn hướng đến sự hoàn hảo trong từng khung hình. 🌟',
      url: 'https://www.behance.net/lucthienbao',
      images: [
        {
          url: 'https://github.com/wuubangdev/share-host-file/blob/main/avata.jpg?raw=true',
          width: 800,
          height: 600,
          alt: 'Paul Avatar'
        }
      ],
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@your_twitter_handle',
      title: 'Paul Portfolio',
      description: '🎨 Houdini FX Artist & 3D Generalist | Tạo nên những hiệu ứng hình ảnh động sống động và chân thực nhất! Với kinh nghiệm phong phú trong việc sử dụng Houdini và các công cụ 3D khác, tôi mang đến những giải pháp sáng tạo và hiệu quả cho các dự án điện ảnh, game, và quảng cáo. Từ việc tạo ra các hiệu ứng đặc biệt phức tạp đến xây dựng toàn bộ môi trường 3D, tôi luôn hướng đến sự hoàn hảo trong từng khung hình. 🌟',
      images: ['https://github.com/wuubangdev/share-host-file/blob/main/avata.jpg?raw=true']
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
