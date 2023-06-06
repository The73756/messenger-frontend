"use client";

import React, { useEffect, useState } from "react";

import { useSwipe } from "../lib";

import { HeaderMiddle } from "./header-middle";
import { HeaderNav } from "./header-nav";
import { HeaderProfile } from "./header-profile";

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
    <div {...handlersSwipe} className="navbar p-0 pt-10 z-10 mx-auto mb-[15px] gap-[15px] items-stretch justify-between text-white">
      <HeaderNav />
      <HeaderMiddle />
      <HeaderProfile />
    </div>
  );
};
