import "./globals.css";
import { ConfigProvider } from "antd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Open_Sans, Poppins } from "next/font/google";

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
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "inherit",
              colorPrimary: "#e96a3a",
            },
            components: {
              Spin: {
                colorPrimary: "white",
              },
            },
          }}
        >
          <Header />
          {children}
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
