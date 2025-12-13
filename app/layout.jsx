import "./globals.css";

export const metadata = {
  title: "TrendCashX",
  description: "Marketplace NFT moderne et professionnelle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
