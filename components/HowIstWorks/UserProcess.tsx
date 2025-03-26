"use client";
import * as React from "react";
import ProcessCard from "./ProcessCard";

function UserProcess() {
  const processes = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e58fecad3a780ed20b1e31ff29585d1bbf633978?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      title: "Deposit & Convert",
      description:
        "Users deposit fiat via banks or PSPs, instantly converting it to stablecoins",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f37b894ec655944ef10c897c3112c94e99ee0531?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      title: "Spend & Transfer",
      description:
        "Businesses and users send, receive, or spend stablecoins across multiple chains",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f94740cc0409c331118dd0c4ec24c3c6f3b1b8d?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      title: "Cash Out & Settle",
      description:
        "Stablecoins are converted back to fiat and settled into local bank accounts",
    },
  ];

  return (
    <>
      <h2 className="mt-14 text-5xl font-medium leading-none text-center text-neutral-800 max-md:mt-10 max-md:max-w-full">
        The overall process for end-users
      </h2>
      <section className="pb-5 mt-14 w-full rounded-none max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`${
                index > 0 ? "ml-5 " : ""
              }w-[33%] max-md:ml-0 max-md:w-full`}
            >
              <ProcessCard
                imageUrl={process.imageUrl}
                title={process.title}
                description={process.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default UserProcess;
