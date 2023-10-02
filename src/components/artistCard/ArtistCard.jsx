import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Artist.globals.css"

const ArtistCard = () => {
  return (
    <div className="px-3 pt-3 rounded-lg relative dark:bg-neutral-800 flex flex-col items-center hover:dark:bg-neutral-700 artsistCard">
      <div className="flex items-center justify-center mb-3">
        <Image
          src="/allan.webp"
          alt=""
          width={150}
          height={150}
          className="object-cover rounded-full shadow-lg shadow-neutral-900"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-center ">
        <Link
          href="/artist/eiewfj929ds9e"
          className="text-base font-semibold hover:underline dark:text-white"
        >
          Zero Venture
        </Link>
        <span className="mb-5 text-sm font-normal dark:text-stone-400">
          Artist
        </span>
      </div>
      <button className="artistCardBtn w-12 h-12 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center dark:bg-green-500 hover:dark:bg-green-400 absolute bottom-1/3 right-4">
        <PlayArrow className="text-3xl dark:text-neutral-900" />
      </button>
    </div>
  );
};

export default ArtistCard;
