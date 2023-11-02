"use client";
/* eslint-disable @next/next/no-img-element */
import {
  DevicesOther,
  FavoriteBorderOutlined,
  FavoriteSharp,
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  LoopOutlined,
  PauseCircle,
  PictureInPicture,
  PlayCircle,
  QueueMusic,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDownRounded,
  VolumeOffRounded,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import "./Footerplayer.globals.css";
import { UiContext } from "@/providers/UiContext/MainUi";
import { usePathname } from "next/navigation";

export const FooterPlayer = () => {
  const path=usePathname()
  const { setRightDisplay, rightDispaly } = useContext(UiContext);
  const [audio, setAudio] = useState(null);
  const musicSlider = useRef(null);
  const [showRightBar, setShowRightBar] = useState(false);
  const color = useRef({ color: "#ffffff" });
  const [likeColor, setLikeColor] = useState(false);
  const [musicProgress, setMusicProgress] = useState(0);
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const musicSliderMouseOver = useRef({ state: false });
  const [currentMin, setCurrentMin] = useState(`00`);
  const [currentSec, setCurrentSec] = useState(`00`);

  useEffect(() => {
    setAudio(
      new Audio("/Alan Walker _The Spectre (Lyrics _ Lyrics Video) (1).mp3")
    );
    
  }, []);

  useEffect(() => {
    if (rightDispaly) {
      return
    }
    setShowRightBar(rightDispaly)
  },[rightDispaly])
  
 
  // Chnge music current time and also seeking
  const musicInputHandler = (e, max) => {
    const songDuration = audio?.duration;
    const tempSliderValue = (e.target.value / max) * 100;
    setMusicProgress(tempSliderValue);
    audio.currentTime = (tempSliderValue * songDuration) / 100;
    musicSlider.current.style.background = `linear-gradient(to right, ${color.current.color} ${tempSliderValue}%,#3a3a3a ${tempSliderValue}%)`;
  };
  //on hover handler
  const mouseoverhandler = (ref, value) => {
    musicSliderMouseOver.current.state = true;
    color.current.color = "#23c55e";
    ref.current.style.background = `linear-gradient(to right, ${color.current.color} ${value}%,#3a3a3a ${value}%)`;
  };
  //out hover handler
  const mouseOuthandler = (ref, value) => {
    musicSliderMouseOver.current.state = false;
    color.current.color = "#FFFFFF";
    ref.current.style.background = `linear-gradient(to right, ${color.current.color} ${value}%,#3a3a3a ${value}%)`;
  };
  //mute handler
  const muteHandler = () => {
    mute ? setMute(!mute) : setMute(!mute);
    !mute ? (audio.muted = true) : (audio.muted = false);
  };
  const handlePlay = () => {
    // audio.src="/gym_class_heroes_stereo_hearts_ft._adam_levine_official_video_aac_35246.m4a"
    play ? setPlay(!play) : setPlay(!play);
    !play ? audio.play() : audio.pause();
  };
  const handlePause = (e) => {
    console.log(e.target);
  };
  const handleLike = () => {
    likeColor ? setLikeColor(!likeColor) : setLikeColor(!likeColor);
  };

  useEffect(() => {
    audio?.addEventListener("timeupdate", (e) => {
      const currentTime = e.target.currentTime;
      const musicDuration = e.target.duration;
      const currentminute = Math.floor((currentTime % 3600) / 60);
      const currentSecond = Math.floor((currentTime % 3600) % 60);

    

      setMusicProgress((100 * currentTime) / musicDuration);
      if (musicSliderMouseOver.current.state) {
        mouseoverhandler(musicSlider, (100 * currentTime) / musicDuration);
      } else {
        mouseOuthandler(musicSlider, (100 * currentTime) / musicDuration);
      }
      // musicSlider.current.style.background = `linear-gradient(to right, ${(100 * currentTime) / musicDuration} ${(100 * currentTime) / musicDuration}%,#3a3a3a ${(100 * currentTime) / musicDuration}%)`;
      setCurrentMin(
        currentminute < 10 ? `0${currentminute}` : `${currentminute}`
      );
      setCurrentSec(
        currentSecond < 10 ? `0${currentSecond}` : `${currentSecond}`
      );
      if (currentTime === musicDuration) {
        setMusicProgress(0);
        setCurrentMin(
          currentminute < 10 ? `0${currentminute}` : `${currentminute}`
        );
        setCurrentSec(
          currentSecond < 10 ? `0${currentSecond}` : `${currentSecond}`
        );
      }
    });
  }, [audio?.src]);
  const handleShowRightBar = () => {
    setShowRightBar(!showRightBar);
    rightDispaly ? setRightDisplay("none") : setRightDisplay("block");
  };

  if (path.includes("dashboard")) {
  return
}

  return (
    <div className="flex w-full items-center col-span-12 pb-4">
      <div className="flex items-center w-3/12">
        <div className="w-2/6 pr-3 flex items-center justify-end">
          <div className="group relative max-h-14 max-w-[64px] max-sm:h-11 max-sm:w-11 max-md:w-12 max-md:h-12 md:h-14 md:w-16">
            <button
              className="group-hover:opacity-100 group-hover:transition-opacity z-10 opacity-0 absolute right-1 top-1 rounded-full bg-neutral-900/90 text-neutral-50 "
              onClick={handleShowRightBar}
            >
              {showRightBar ? (
                <KeyboardArrowDownRounded />
              ) : (
                <KeyboardArrowUpRounded />
              )}
            </button>
            <Image
              src="/spectreAllanWalker.png"
              alt="music"
              fill
              className=" rounded-sm object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col w-3/6 gap-1">
          <Link
            href="/playlist/qwheh923dwion2dj0"
            className="text-xs font-semibold cursor-pointer hover:underline"
          >
            Spectre
          </Link>
          <Link
            href="/artist/dduiwheui298d9dj"
            className="text-[12px] gap-y-2 dark:text-stone-400 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis hover:underline"
          >
            Allan Walker
          </Link>
        </div>
        <div className="w-1/6 flex items-center">
          <span className="mr-3 " onClick={handleLike}>
            {likeColor ? (
              <FavoriteSharp className="text-lg text-green-500 cursor-pointer" />
            ) : (
              <FavoriteBorderOutlined className=" text-lg cursor-pointer" />
            )}
          </span>
          <span>
            <PictureInPicture className="text-lg cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="w-6/12 ">
        <div className="flex justify-center items-center w-full  gap-4">
          <button
            className="disabled:cursor-not-allowed hover:text-zinc-50 disabled:dark:text-zinc-700"
            disabled={audio?.src ? false : true}
          >
            <Shuffle className="text-2xl dark:text-zinc-400 " />
          </button>
          <button
            className="disabled:cursor-not-allowed hover:text-zinc-50 disabled:dark:text-zinc-700"
            disabled={audio?.src ? false : true}
          >
            <SkipPrevious className="text-3xl dark:text-zinc-400 " />
          </button>
          <button
            className="h-10 w-10 flex items-center justify-center rounded-full disabled:cursor-not-allowed disabled:bg-stone-700 disabled:text-neutral-900"
            disabled={audio?.src ? false : true}
            onClick={handlePlay}
            onKeyPress={(e) => handlePause(e)}
          >
            {play ? (
              <PauseCircle className="text-5xl hover:scale-105" />
            ) : (
              <PlayCircle className="text-5xl  hover:scale-105 " />
            )}
          </button>
          <button
            className="disabled:cursor-not-allowed hover:text-zinc-50 disabled:dark:text-zinc-700"
            disabled={audio?.src ? false : true}
          >
            <SkipNext className="text-3xl dark:text-zinc-400 " />
          </button>
          <button
            className="disabled:cursor-not-allowed hover:text-zinc-50 disabled:dark:text-zinc-700"
            disabled={audio?.src ? false : true}
          >
            <LoopOutlined className="text-2xl dark:text-zinc-400" />
          </button>
        </div>
        <div className="flex items-center justify-center mt-3 ">
          <span className="w-1/12 text-right dark:text-stone-400 font-medium text-xs">
            {audio?.src ? `${currentMin}:${currentSec}` : `--:--`}
          </span>
          <div className="mx-1 w-9/12 flex items-center">
            <input
              type="range"
              disabled={audio?.src ? false : true}
              name=""
              id=""
              value={musicProgress}
              max="100"
              className="w-full h-1 cursor-pointer appearance-none dark:bg-zinc-400 rounded-lg transition-all duration-200 disabled:cursor-not-allowed musicRange"
              ref={musicSlider}
              onInput={(event) =>
                musicInputHandler(event, event.currentTarget.max)
              }
              onMouseOver={(event) =>
                mouseoverhandler(musicSlider, event.currentTarget.value)
              }
              onMouseOut={(event) =>
                mouseOuthandler(musicSlider, event.currentTarget.value)
              }
            />
          </div>
          <span className="w-2/12 dark:text-stone-400  font-medium text-xs">
            {audio?.duration
              ? `
              ${
                Math.floor((audio?.duration % 3600) / 60) < 10
                  ? `0${Math.floor((audio?.duration % 3600) / 60)}`
                  : Math.floor((audio?.duration % 3600) / 60)
              }:${
                  Math.floor((audio?.duration % 3600) % 60) < 10
                    ? `0${Math.floor((audio?.duration % 3600) % 60)}`
                    : Math.floor((audio?.duration % 3600) % 60)
                }
              `
              : `--:--`}
          </span>
        </div>
      </div>
      <div className="w-3/12 gap-3 flex justify-end items-center pr-3">
        <span>
          <QueueMusic className="dark:text-zinc-400 cursor-pointer hover:text-zinc-50" />
        </span>
        <span>
          <DevicesOther className="dark:text-zinc-400 hover:text-zinc-50" />
        </span>
        <div className=" w-32  flex items-center gap-2">
          <span onClick={muteHandler} className="cursor-pointer">
            {mute ? (
              <VolumeOffRounded className="dark:text-zinc-400 hover:text-zinc-50 text-xl" />
            ) : (
              <VolumeDownRounded className="dark:text-zinc-400 hover:text-zinc-50 text-xl" />
            )}
          </span>
          <VolumeUi audio={audio} setMute={setMute} Color={ "#ffffff"} />
        </div>
      </div>
    </div>
  );
};

const VolumeUi = ({ audio, setMute, Color }) => {
  const volumeSlider = useRef(null)
  const color=useRef({color:Color})
  const [volumeProgress,setVolumeProgress]=useState(20)
  
  
  
  const volumeInputHandler = (e, max) => {
    const tempSliderValue = (e.target.value / max) * 100;
    setVolumeProgress(tempSliderValue);
    audio.volume = tempSliderValue / 100;
    audio.volume === 0 ? setMute(true) : setMute(false);

    // console.log(audio.volume);
    volumeSlider.current.style.background = `linear-gradient(to right, ${color.current.color} ${tempSliderValue}%,#3a3a3a ${tempSliderValue}%)`;
  }
  const mouseoverhandler = (ref, value) => {
    color.current.color = "#23c55e";
    ref.current.style.background = `linear-gradient(to right, ${color.current.color} ${value}%,#3a3a3a ${value}%)`;
  }
  const  mouseOuthandler=(ref, value) => {
    color.current.color = "#FFFFFF";
    ref.current.style.background = `linear-gradient(to right, ${color.current.color} ${value}%,#3a3a3a ${value}%)`;
  }
  useEffect(() => {
    if(audio){audio.volume=volumeProgress / 100} 
  }, [audio])
  
  useEffect(() => {
    mouseOuthandler(volumeSlider,volumeProgress)
  }, [])
  return (
    <div className="w-20 h-1 flex justify-start rounded cursor-pointer">
    <input
      type="range"
      name=""
      id=""
      value={volumeProgress}
      max="100"
      className="w-full h-1 cursor-pointer appearance-none dark:bg-zinc-400 rounded-lg transition-all duration-200 volumeRange"
      ref={volumeSlider}
      onInput={(event) =>
        volumeInputHandler(
          event,
          event.currentTarget.max,
          event.currentTarget.value
        )
      }
      onMouseOver={(event) =>
        mouseoverhandler(volumeSlider, event.currentTarget.value)
      }
      onMouseOut={(event) =>
        mouseOuthandler(volumeSlider, event.currentTarget.value)
      }
    />
  </div>
  )
}
