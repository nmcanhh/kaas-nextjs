"use client";

import React from "react";
import BlockchainIconRow from "./BlockchainIconRow";

const KaasStablecoinMultichain: React.FC = () => {
  // First row of blockchain icons
  const firstRowIcons = [
    "/images/stablecoin (1).png",
    "/images/stablecoin (3).png",
    "/images/stablecoin (2).png",
    "/images/stablecoin (4).png",
    "/images/stablecoin (5).png",
    "/images/stablecoin (6).png",
  ];

  // Second row of blockchain icons
  const secondRowIcons = [
    "/images/stablecoin (12).png",
    "/images/stablecoin (13).png",
    "/images/stablecoin (14).png",
    "/images/stablecoin (15).png",
    "/images/stablecoin (7).png",
    "/images/stablecoin (16).png",
  ];

  // Third row of blockchain icons
  const thirdRowIcons = [
    "/images/stablecoin (8).png",
    "/images/stablecoin (9).png",
    "/images/stablecoin (10).png",
    "/images/stablecoin (11).png",
    "/images/stablecoin (18).png",
    "/images/stablecoin (17).png",
  ];

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #D6DCFF 0%, #B9C1F6 100%)'
      }}
      className="box-border px-[120px] pt-[60px] mx-auto max-w-none max-md:px-5 max-md:pt-10 max-md:max-w-[991px] max-sm:px-4 max-sm:pt-5 max-sm:max-w-screen-sm">
      <div className="flex flex-col mx-auto my-0 max-w-[1200px] bg-left-bottom bg-no-repeat max-w-[1440px]">
        <header className="flex justify-evenly mb-12 max-md:flex-col max-md:gap-8">
          <h1 className="text-5xl font-medium leading-[60px] max-w-[501px] text-neutral-800 max-md:max-w-full max-sm:text-3xl max-sm:leading-10">
            Kaas Stablecoin Onramp &amp; Offramp Now Available on Multichain
          </h1>
          <article className="text-2xl max-w-[618px] text-neutral-800 max-md:max-w-full max-sm:text-lg">
            <p className="mb-5">
              Seamlessly convert fiat to stablecoins and vice versa across 18+
              leading blockchain networks, ensuring fast, secure, and low-cost
              transactions.
            </p>
            <p className="mb-5">
              <strong className="font-medium">🔗 Supported Chains:</strong>{" "}
              Algorand | Aptos | Arbitrum | Avalanche | Base | Celo | Ethereum |
              Hedera | Near | Noble | OP Mainnet | Polkadot | Polygon PoS |
              Solana | Stellar | Sui | Unichain | ZKsync
            </p>
            <p>🚀 Expand your payment capabilities with multichain support!</p>
            <div className="flex flex-col gap-5 mt-8 max-md:items-center">
              <BlockchainIconRow iconUrls={firstRowIcons} />
              <BlockchainIconRow iconUrls={secondRowIcons} />
              <BlockchainIconRow iconUrls={thirdRowIcons} />
            </div>
          </article>
        </header>
      </div>

      <figure className="mt-12 ml-0 max-md:flex max-md:justify-center">
        <img
          src="/images/stable-background.png"
          className="object-contain h-[365px] w-[693px] max-md:w-full max-md:h-auto max-md:max-w-[693px]"
          alt="blockchain illustration"
        />
      </figure>
    </section>
  );
};

export default KaasStablecoinMultichain;
