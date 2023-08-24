import type { Metadata } from "next";
import "@styles/global.css";
import Nav from "@components/Layout/Nav";
import Footer from "@components/Layout/Footer";
import AuthProvider from "@app/context/AuthProvider";

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
        <AuthProvider>
          <Nav />
          <div>{children}</div>
        </AuthProvider>
        <div className="z-[100]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
