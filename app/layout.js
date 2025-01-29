import { Geist, Geist_Mono, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Racemate India | Race Timing | Marathon",
  description:
    "Racemate is a SportsTech startup offering a complete solution for Race events in one place to create the best possible experience for your athletes from Start to Finish.",
  icons: {
    icon: ["/favicon.svg"],
    apple: ["/favicon.svg"],
    shortcut: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased bg-gray-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
