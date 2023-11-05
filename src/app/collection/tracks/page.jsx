"use client";
import { Footer } from "@/components/footer/Footer";
import { LikedList } from "@/components/likedList/LikedList";
import { NavBar } from "@/components/navbar/NavBar";
import {
  AccessTimeRounded,
  FavoriteSharp,
  PlayArrow,
  PlayArrowRounded,
} from "@mui/icons-material";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./global.css";
import { UiContext } from "@/providers/UiContext/MainUi";
import { useDarkMutedColor, useVibrantColor } from "@/utils/hooks/colorHooks";

const Tracks = () => {
  const pageRef = useRef();
  const { center } = useContext(UiContext);
  const [navbarColor, setNavbarColor] = useState("trasparent");
  const [pageWidth, setPageWidth] = useState(null);

  useEffect(() => {
    const pageCurrentWidth = pageRef.current.clientWidth;
    setPageWidth(pageCurrentWidth);
  }, [center]);

  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    const tableHeader = document.getElementById("tableHeader");
    const table = document.querySelector("#table");
    if (e.target.scrollTop > 251) {
      setNavbarColor("rgba(80,56,160)");
      tableHeader.style.backgroundColor = "#1a1a1a";
      table.className = "w-full relative transtion-all duration-100  ";
      return;
    }
    setNavbarColor("transparent");
    tableHeader.style.backgroundColor = "transparent";
    table.className =
      "w-full relative transtion-all duration-100 listContainer";
  };

  return (
    <div className={`pt-2 ${center ? center : "col-span-8"}`} ref={pageRef}>
      <div
        className={` h-full rounded-lg overflow-y-scroll  container`}
        onScrollCapture={handleScroll}
      >
        <main
          className="relative  rounded-lg"
          style={{ backgroundColor: `rgba(80,56,160,0.75)` }}
        >
          <NavBar position={"sticky"} color={navbarColor} />

          <div
            className={`h-60 w-full flex pl-4 pb-4 relative items-end ${
              pageWidth <= 642 ? "pt-0" : "mt-8"
            }`}
          >
            <div
              className={`pb-1 ${pageWidth <= 642 ? "w-4/12" : "w-3/12  "}  `}
            >
              <Image
                src="/likedSongs.png"
                alt="likedImage"
                width={pageWidth <= 642 ? 200 : 230}
                height={pageWidth <= 642 ? 200 : 220}
                className="shadow-2xl shadow-neutral-950"
              />
            </div>
            <div
              className={`pb-1 ${
                pageWidth <= 642 ? "pl-4 w-8/12" : "w-9/12 pl-3"
              }`}
            >
              <section>
                <div className="mb-2">
                  <span className="font-medium text-neutral-50 ">Playlist</span>
                </div>
                <div>
                  <span
                    className={`w-full ${
                      pageWidth <= 642 ? "text-6xl" : "text-7xl"
                    } text-neutral-50 font-extrabold whitespace-nowrap text-ellipsis overflow-hidden`}
                  >
                    Liked Songs
                  </span>
                </div>
                <div className="flex items-center mt-7">
                  <div className="h-6 w-6 mr-2">
                    <Image
                      src="/crow.jpg"
                      alt="userProfile"
                      width={250}
                      height={250}
                      className="w-full h-full rounded-full object-cover shadow-md shadow-neutral-950"
                    />
                  </div>
                  <span className="mr-2 text-sm text-neutral-50 font-semibold ">
                    Danielkagombe .
                  </span>
                  <span className="text-sm text-neutral-50 font-medium">
                    12 songs
                  </span>
                </div>
              </section>
            </div>
          </div>
          <div id="table" className="w-full relative ">
            <div className=" w-full h-64 absolute top-0 bg-gradient-to-b from-transparent/60 to-neutral-900/95"></div>

            <div className="px-4 py-3 relative ">
              <button
                className="w-14 h-14 flex items-center sticky top-16 justify-center rounded-full dark:bg-green-500 hover:dark:bg-green-400 cursor-pointer"
                role="play button"
              >
                <PlayArrow className="text-neutral-900 text-4xl" />
              </button>
            </div>
            <div className="relative bg-gradient-to-b from-transparent/5 to-[#121212]">
              <div
                id="tableHeader"
                className="m-2 flex flex-col sticky top-14 "
              >
                <div className="flex py-1 mx-4 ">
                  <span className="w-6/12 pl-4 flex items-center dark:text-stone-400 text-sm ">
                    # Title
                  </span>
                  <span className="w-3/12 flex items-center justify-start dark:text-stone-400 text-sm">
                    Album
                  </span>
                  <span className="w-3/12 flex items-center justify-center">
                    <AccessTimeRounded className=" dark:text-stone-400 text-xl" />
                  </span>
                </div>
                <div className="px-6 mb-4">
                  <hr className="dark:border-neutral-700 mt-2" />
                </div>
              </div>
              <div className="bg-gradient-to-b  from-neutral-900/90 to-neutral-900">
                <LikedList />
                <LikedList />
                <LikedList />
                <LikedList />
                <LikedList />
                <LikedList />
                <LikedList />
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Tracks;
