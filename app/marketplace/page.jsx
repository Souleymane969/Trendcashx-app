"use client";

import { useState } from "react";
import Header from "../../components/Header";
import { getWalletAccount } from "../../lib/wallet";

const nfts = [
  {
    id: 1,
    name: "Golden Vision",
    price: "0.5 ETH",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Crypto Spirit",
    price: "0.8 ETH",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Digital Crown",
    price: "1.2 ETH",
    image: "https://via.placeholder.com/300",
  },
];

export default function Marketplace() {
  const [message, setMessage] = useState("");

  const handleBuy = async (nft) => {
    const account = await getWalletAccount();

    if (!account) {
      setMessage("Veuillez connecter votre wallet avant d’acheter.");
      return;
    }

    setMessage(
      `NFT "${nft.name}" acheté avec succès par ${account.slice(0, 6)}...`
    );
  };

  return (
    <>
      <Header />

      <main className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Marketplace NFT
        </h2>

        {message && (
          <p className="text-center mb-6 text-green-400">
            {message}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {nft.name}
                </h3>

                <p className="text-gray-400 mb-4">
                  Prix : {nft.price}
                </p>

                <button
                  onClick={() => handleBuy(nft)}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
                >
                  Acheter
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
    }
