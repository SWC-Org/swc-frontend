import type { Metadata } from "next";
import "@styles/global.css";
import Nav from "@components/Layout/Nav";
import Footer from "@components/Layout/Footer";
export const metadata: Metadata = {
  title: "SWC | Curtoon Window Platform",
  description: "Curtoon Window Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gradient-bg">
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
