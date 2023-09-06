import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "زیبا همتی",
  description: "مشخصات نمایه زیبا همتی در رسان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
