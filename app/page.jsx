import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Marketplace NFT nouvelle génération
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Achetez, vendez et collectionnez des NFTs uniques sur TrendCashX.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white text-lg">
          Explorer le marketplace
        </button>
      </main>
    </>
  );
}
