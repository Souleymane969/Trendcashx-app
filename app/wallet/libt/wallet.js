export const getWalletAccount = async () => {
  if (typeof window === "undefined") return null;

  if (!window.ethereum) return null;

  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });

  return accounts.length > 0 ? accounts[0] : null;
};
