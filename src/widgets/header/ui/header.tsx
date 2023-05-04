"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { MusicPlayer } from "@/features/music-player";
import { Notification } from "@/features/notification";
import { Search } from "@/features/search";

import { Portal } from "@/shared/ui";

import { useSwipe } from "../lib";

import { Burger } from "./burger";
import { UserBtn } from "./user-btn";

export const Header = () => {
  const [isShowBurger, setIsShowBurger] = useState<boolean>(false);
  const handlersSwipe = useSwipe({
    swipeRight: () => setIsShowBurger(true),
  });

  useEffect(() => {
    document.addEventListener("touchstart", (e) => handlersSwipe.onTouchStart(e));
    document.addEventListener("touchmove", (e) => handlersSwipe.onTouchMove(e));
    document.addEventListener("touchend", (e) => handlersSwipe.onTouchEnd(e));
  }, []);

  return (
    <div {...handlersSwipe} className="navbar bottom-0 z-10 mx-auto">
      <button
        onClick={() => setIsShowBurger(true)}
        className="flex flex-col items-start space-y-2 lg:hidden">
        <div className="h-0.5 w-8 bg-gray-600"></div>
        <div className="h-0.5 w-8 bg-gray-600"></div>
        <div className="h-0.5 w-6 bg-gray-600"></div>
      </button>
      <Portal>
        <div
          onClick={() => setIsShowBurger(false)}
          className={
            (isShowBurger ? "z-10 " : "z-[-1] ") +
            "absolute inset-0 opacity-30 transition-colors" +
            (isShowBurger ? " bg-black" : "")
          }></div>
        <Burger close={() => setIsShowBurger(false)} isShow={isShowBurger} />
      </Portal>
      <Link href="#" className="btn-ghost btn ml-auto text-xl normal-case lg:ml-0 lg:mr-10">
        Logo
      </Link>
      <div className="hidden flex-1 items-center lg:flex">
        <Search />
        <Notification />
        <MusicPlayer />
        <UserBtn />
      </div>
    </div>
  );
};
