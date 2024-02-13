import { Inter, Nunito_Sans, Poppins, Roboto, Montserrat } from "next/font/google";
import ToastProvider from "@/providers/toast-provider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Dreambill - Payroll Platform",
  description:
    "Empower your business with our comprehensive payroll platform tailored for the African market. Streamline your Payroll Processes, Ensure Compliance, and Focus on Growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable}  ${poppins.variable}  ${nunito_sans.variable} ${montserrat.variable} font-roboto scroll-smooth`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
