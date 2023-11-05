"use client";
import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navbar/NavBar";
import { PlayArrowRounded, PlayArrowSharp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import "./page.globals.css";
import React, { Children, useContext, useEffect, useRef, useState } from "react";
import { useUiContext } from "@/providers/UiContext/MainUi";
import { useSession } from "next-auth/react";
import { recommended } from "@/data/dummyData";
import { useVibrantColor } from "@/utils/hooks/colorHooks";
import { twMerge } from "tailwind-merge";
// import {cloudInary} from "@/utils/cloudinaryConfig"

export default function Home() {
  const { data } = useSession();
  const pageRef = useRef();
  const { center } = useUiContext();
  const [centerBarWidth, setCenterBarWidth] = useState("5");
  const [pageWidth, setPageWidth] = useState(null);
  const [containerColor, setContainerColor] = useState("rgba(64,64,64,0.4)");

  useEffect(() => {
    // router.refresh()
    const pageCurrentWidth = pageRef.current.clientWidth;
    setPageWidth(pageCurrentWidth);
    setCenterBarWidth(center);
  }, [center]);
  return (
    <div
      ref={pageRef}
      className={`pt-2 dark:bg-black rounded-md ${
        center ? center : "col-span-8"
      }`}
    >
      <div className="overflow-y-scroll  w-full h-full relative rounded-md scrollbar-thin scrollbar-thumb-neutral-700 bg-neutral-900 ">
        <div
          className={`w-full relative mb-4 bg-neutral-900/30`}
          style={{
            backgroundImage: `linear-gradient(0deg,#171717,${containerColor})`,
          }}
        >
          
          <div className=" fixed z-10 " style={{ width: `${pageWidth}px` }}>
            <NavBar position={""} />{" "}
          </div>
          <div className="w-full h-16 "></div>
          <span className="w-full text-3xl font-bold px-4 pt-12 ">
            Good afternoon
          </span>
          <div
            className={`w-full px-3 mt-3 grid grid-flow-row gap-2  ${
              pageWidth <= 642
                ? "grid-cols-2 max-md:grid-cols-1  "
                : "grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1"
            }`}
          >
            {recommended.map((item, i) => (
              <UserRecomended
                key={i}
                pageWidth={pageWidth}
                data={item}
                setContainerColor={setContainerColor}
              />
            ))}
          </div>
        </div>
        <div className="pt-4">
          <div className="flex items-center justify-between px-5">
            <span className="text-2xl font-bold">
              Made For Danielkagombe
            </span>
            <Link
              href="/"
              className="text-xs font-semibold text-stone-400 hover:underline"
            >
              Show all{" "}
            </Link>
          </div>
          <UserPlayListHandler visibleItemCount={pageWidth <= 642 ? 3 : 4 } otherClassNames={""}>
            <UserPlayList />
            <UserPlayList />
            <UserPlayList />
            <UserPlayList />
          </UserPlayListHandler>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const UserRecomended = ({ pageWidth, data, setContainerColor }) => {
  const color = useVibrantColor(data.img);

  return (
    <div
      onMouseOut={() => setContainerColor("#1e3a8a")}
      onMouseOver={() => setContainerColor(color)}
      className={`featuredMusics max-h-44  cursor-pointer flex items-center rounded-md gap-2 transition-all  ease-in-out  dark:bg-neutral-500/40 hover:duration-300 hover:bg-neutral-500/75 ${
        pageWidth <= 642 ? "col-span-1 " : "col-span-1"
      }`}
    >
      <div className="w-3/12 h-14 relative flex justify-start">
        <Image
          src={data.img}
          alt=""
          width={60}
          height={50}
          className="object-cover rounded-s-md"
        />
      </div>
      <div className="w-6/12">
        <span className="dark:text-white text-sm font-bold">{data.name}</span>
      </div>
      <div className="w-3/12 flex items-center justify-center">
        <button className="featuredmusicBtn w-10 h-10 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center transition-all ease-in-out dark:bg-green-500 hover:dark:bg-green-400 ">
          <PlayArrowRounded className="text-2xl dark:text-neutral-900" />
        </button>
      </div>
    </div>
  );
};

const UserPlayListHandler = ({
  children,
  otherClassNames,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) => {
  const childrenArray = Children.toArray(children).flat();
  const visibleChildren = childrenArray.slice(0, visibleItemCount);
  children = visibleChildren;
  return (
    <div
      className={`${twMerge(
        "px-5 flex justify-between gap-2 mt-4",
        otherClassNames
      )}`}
    >
      {children}
    </div>
  );
};

const UserPlayList = () => {
  return (
    <div className="playListCard w-48 p-3 flex flex-col justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700/80">
      <div>
        <div className="relative w-full h-36 ">
          <div className="w-full h-36 relative shadow-md shadow-neutral-900">
            <Image
              src="/crow.jpg"
              alt=""
              fill={true}
              className="object-cover rounded-lg "
            />
          </div>
          <div className="w-full h-full absolute rounded-lg top-0 left-0 bg-gradient-to-bl from-pink-600/40 to-blue-700/40"></div>
          <span className="w-14  absolute left-2 bottom-2 text-xs font-bold text-white ">
            Discover weekly{" "}
          </span>
          <button className="playListCardBtn  w-10 h-10 absolute right-2 bottom-2 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500">
            <PlayArrowSharp className="text-neutral-950" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-between pt-3">
        <span className="text-base font-bold text-white ">Discover weekly</span>
        <p className="font-medium text-xs text-stone-400 overflow-hidden text-ellipsis">
          Your weekly mixtape of fresh music. Enjoy Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.{" "}
        </p>
      </div>
    </div>
  );
};
