export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <h1 className="text-xl font-bold text-white">
        TrendCashX
      </h1>

      <nav className="flex gap-6 text-gray-300">
        <a href="/" className="hover:text-white">Accueil</a>
        <a href="/marketplace" className="hover:text-white">Marketplace</a>
        <a href="/dashboard" className="hover:text-white">Dashboard</a>
        <a href="/wallet" className="hover:text-white">Wallet</a>
      </nav>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        Connect Wallet
      </button>
    </header>
  );
}
