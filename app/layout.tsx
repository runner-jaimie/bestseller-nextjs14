import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Best Seller",
    default: "Loading...",
  },
  description: "The best seller on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
