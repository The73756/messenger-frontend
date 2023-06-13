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
    <div
      {...handlersSwipe}
      className="navbar z-10 mx-auto mb-4 items-stretch justify-between gap-4 p-0 pt-10">
      <HeaderNav />
      <HeaderMiddle />
      <HeaderProfile />
    </div>
  );
};
