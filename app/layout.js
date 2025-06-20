// import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const Outfit = OutfitFont({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

// const Ovo = OvoFont({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio-Project",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${ovo.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
