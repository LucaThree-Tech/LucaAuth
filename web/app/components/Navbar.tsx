"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../client";
import { ConnectButton } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [inAppWallet()];

const Navbar = () => {
  return (
    <div className="m-5 flex relative justify-between z-10 bg-none">
      <h2 className="mt-3 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-2xl lg:text-2xl font-sans relative z-20 font-bold tracking-tight">
        Luca3Auth
      </h2>
      <ConnectButton
        client={client}
        wallets={wallets}
        appMetadata={{
          name: "Luca3Auth",
          url: "https://luca3auth.com",
          logoUrl: "/Luca3.png",
        }}
        autoConnect={true}
        chains={[baseSepolia]}
        connectButton={{
          label: "Get Started",
        }}
        connectModal={{
          title: "Student Auth with Luca3Auth",
          showThirdwebBranding: false,
        }}
        showAllWallets={false}
      />
    </div>
  );
};

export default Navbar;
