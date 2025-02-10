import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";


const inter = Inter({
  subsets: ['cyrillic'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});


export const metadata: Metadata = {
  title: "Национальная лотерея — купить лотерейный билет онлайн на официальном сайте государственной лотереи. Стоимость билета от 20 рублей.",
  description: "Купить лотерейные билеты от 10 рублей на официальном сайте Национальной лотереи. ❤️Вывод выигрыша онлайн ⭐️ Моментальные и тиражные лотереи. ✨Тиражи каждую неделю. Играйте и выигрывайте с Национальной лотереей!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-[#f2f4ff]">
      <body
        className={inter.variable}
      >
          <Header />
        <main className="min-h-screen">
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
