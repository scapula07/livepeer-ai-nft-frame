import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Mint an NFT on Aptos",
      action: "post",
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/default.png`,
    aspectRatio: "1:1",
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/prompt`,
});

export const metadata: Metadata = {
  title: "Mint an NFT ",
  description: "Mint an NFT",
  openGraph: {
    title: "Mint an NFT ",
    description: "Enter your Aptos Wallet address to Mint an NFT on Aptos",
    images: [`${NEXT_PUBLIC_URL}/default.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
   <>
       <h1>Mint an NFT on Aptos</h1>
   </>
  );
}