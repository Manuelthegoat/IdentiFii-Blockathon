"use client";
import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });

const Lisk = defineChain({
    id: 4202,
    name: "Lisk Sepolia Testnet",
    network: "Lisk Sepolia Testnet",
    nativeCurrency: {
        decimals: 18,
        name: "Lisk Sepolia Testnet",
        symbol: "ETH"
    },
    rpcUrls: {
        default: {
            http:['https://rpc.sepolia-api.lisk.com']
        }
    } as any,

    blockExplorers: {
        default: {
            name: 'Explorer', url: 'https://sepolia-blockscout.lisk.com'
        }
    }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="cm2xxugfq0a2tyafu7yd7twz9"
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp",
            },
            defaultChain: Lisk,
            supportedChains: [Lisk],
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
