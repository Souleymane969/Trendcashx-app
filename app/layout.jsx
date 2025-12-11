export const metadata = {
  title: "TrendCashX",
  description: "Marketplace NFT moderne et professionnelle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
