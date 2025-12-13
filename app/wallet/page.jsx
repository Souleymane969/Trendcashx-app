"use client";

import { useState } from "react";
import Header from "../../components/Header";

export default function WalletPage() {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        setError("MetaMask n'est pas installé.");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      setError("");
    } catch (err) {
      setError("Connexion refusée.");
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Mon Wallet</h2>

        {!account ? (
          <>
            <p className="text-gray-400 mb-6">
              Connectez votre wallet pour accéder à vos NFTs et transactions.
            </p>

            <button
              onClick={connectWallet}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white"
            >
              Connecter MetaMask
            </button>

            {error && (
              <p className="text-red-500 mt-4">{error}</p>
            )}
          </>
        ) : (
          <div className="bg-black border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 mb-2">Wallet connecté :</p>
            <p className="font-mono text-green-400">
              {account}
            </p>
          </div>
        )}
      </main>
    </>
  );
}
