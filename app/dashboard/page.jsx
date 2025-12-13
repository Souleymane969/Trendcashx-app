"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { getWalletAccount } from "../../lib/wallet";

export default function Dashboard() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWallet = async () => {
      const acc = await getWalletAccount();
      setAccount(acc);
      setLoading(false);
    };
    loadWallet();
  }, []);

  return (
    <>
      <Header />

      <main className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Dashboard
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">
            Chargement du dashboard...
          </p>
        ) : !account ? (
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Connectez votre wallet pour accéder à votre dashboard.
            </p>
            <a
              href="/wallet"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white inline-block"
            >
              Aller au Wallet
            </a>
          </div>
        ) : (
          <>
            {/* Cartes statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black border border-gray-800 rounded-xl p-6">
                <p className="text-gray-400 mb-2">Wallet connecté</p>
                <p className="font-mono text-green-400 break-all">
                  {account}
                </p>
              </div>

              <div className="bg-black border border-gray-800 rounded-xl p-6">
                <p className="text-gray-400 mb-2">NFT possédés</p>
                <p className="text-3xl font-bold">0</p>
              </div>

              <div className="bg-black border border-gray-800 rounded-xl p-6">
                <p className="text-gray-400 mb-2">Transactions</p>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>

            {/* Section NFTs */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">
                Mes NFTs
              </h3>

              <div className="bg-black border border-gray-800 rounded-xl p-8 text-center text-gray-400">
                Aucun NFT pour le moment.
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
