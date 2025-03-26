"use client";

import React from "react";
import BlockchainIconRow from "./BlockchainIconRow";

const KaasStablecoinMultichain: React.FC = () => {
  // First row of blockchain icons
  const firstRowIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/93ce276c5a0fcb7fd81a3c81d72c61dadcdae4e9",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b397637a043067c3530f012218fddc2aa2255eae",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cc737a47ba3dfd17f8d5670b915300959f7ed8be",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0333fac97172ee67eefb0073f014ba563060ec4d",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/91a8b43abf54fe1dfc4353022cd8fed9a1d6a058",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b0b5d70dcab5433c89a22041dd886cae0c34bacb",
  ];

  // Second row of blockchain icons
  const secondRowIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/53b0de4de49789f7999748610cbb3f1ed8ce93f6",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cbf8f604da0394d6b8fda06d9d39878dda8ca70d",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c65247e9adea2bf98a9c38120ed959ef27d9bbcd",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/797ac600a5184a525b21ba280bc9f68c01e1e8f1",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e2915182bf6bd4d7c6f0dc953734f83d06dc2310",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e31bc0a4cc210d7defc63a5a55410f9f6c0172d2",
  ];

  // Third row of blockchain icons
  const thirdRowIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cfaee81e74cad2270a98af1023636d939b59f4a6",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/cc60a3412b228449c1fa51476f6ce15af9507f32",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/4bf5211dc4aace3f1df3f839d91dabd54f45d16d",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8d9f8a31096b3d267122e8483a82ef6d409b8b39",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e8eb95ca32f28e95d15fc6f223c8b34449376057",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9c8fb69fd71996bea0f142aa1e287832c760e2c7",
  ];

  return (
    <section className="box-border px-32 py-14 mx-auto max-w-none min-h-screen max-md:px-5 max-md:py-10 max-md:max-w-[991px] max-sm:px-4 max-sm:py-5 max-sm:max-w-screen-sm">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col mx-auto my-0 max-w-[1200px]">
        <header className="flex gap-20 mb-12 max-md:flex-col max-md:gap-8">
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
          </article>
        </header>

        <div className="flex flex-col gap-5 mt-8 max-md:items-center">
          <BlockchainIconRow iconUrls={firstRowIcons} />
          <BlockchainIconRow iconUrls={secondRowIcons} />
          <BlockchainIconRow iconUrls={thirdRowIcons} />
        </div>
      </div>

      <figure className="mt-12 ml-0 max-md:flex max-md:justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6803b089a57a8f39a3087fbbd7a3664759edb7e1"
          className="object-contain h-[365px] w-[693px] max-md:w-full max-md:h-auto max-md:max-w-[693px]"
          alt="blockchain illustration"
        />
      </figure>
    </section>
  );
};

export default KaasStablecoinMultichain;
