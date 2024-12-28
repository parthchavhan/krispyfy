import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/ui/preloader";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";


export const metadata: Metadata = {
  title: "Krispyfy ",
  description: "Krispyfy ",
  keywords: ""
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>

        <Preloader />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
