import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "HIJR",
  description: "Healthcare Job Recruitment",
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
    <body className="antialiased ">
  <Navbar />
  {children}
  <Footer />
</body>

    </html>
  );
}
