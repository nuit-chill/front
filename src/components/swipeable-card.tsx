/**
 * Stolen from https://raw.githubusercontent.com/Songkiyeon/react-card-rotate-swiper/master/src/CardSwiper.tsx
 * Extended to fit more functions
 */

import React, { TouchEvent, MouseEvent, useEffect, useRef } from "react";
import gsap from "gsap";

// ADDED here, more typings
export type direction = "right" | "left" | "down" | "up" | "none";
type onSwipeFunction = (direction: direction) => void;
type onPreSwipeFunction = (direction: direction, progress: number) => void;

type TProps = {
  contents: any;
  onSwipe?: onSwipeFunction;
  className?: string;
  detectingSize?: number;
  throwLimit?: number;
  // ADDED here, flags to determine the allowed directions
  horizontalOnly?: true;
  // ADDED here, pre swipe system
  onPreSwipe?: onPreSwipeFunction;
};

export const SwipeableCard = (props: TProps) => {
  const target = useRef<HTMLDivElement>(null);
  const x = useRef<number>(0);
  const y = useRef<number>(0);

  const mid = useRef<number>(0);

  const angleMax = 30;

  // ADDED here, custom origin functions
  const getSimpleRotateOrigin = async (mx: number) => {
    let direction = await selectEarlyDirection(mx, 0);
    // assumes only the right of left can be picked
    if (direction == "right") {
      return [50, 100, 1];
    }
    return [50, 100, -1];
  };

  const getRotateOrigin = async (mx: number) => {
    if (props.horizontalOnly) {
      return await getSimpleRotateOrigin(mx);
    }
    let result: number[] = [];

    if (target.current !== null) {
      if (y.current < mid.current) {
        if (x.current > mx) {
          result = [0, 100, -1];
        } else {
          result = [100, 100, 1];
        }
      } else {
        if (x.current > mx) {
          result = [0, 0, 1];
        } else {
          result = [100, 0, -1];
        }
      }
      return result;
    } else {
      return undefined;
    }
  };

  // ADDED here, early direction detector
  const selectEarlyDirection = async (mx: number, my: number): Promise<direction> => {
    if (mx - x.current > 0) {
      return "right";
    } else if (mx - x.current < 0) {
      return "left";
    } else if (my - y.current < -0) {
      return "up";
    } else if (my - y.current > 0) {
      return "down";
    }

    return "none";
  };

  const selectDirection = async (mx: number, my: number) => {
    if (mx - x.current > (props.detectingSize ?? 100)) {
      return "right";
    } else if (mx - x.current < -(props.detectingSize ?? 100)) {
      return "left";
    } else if (my - y.current < -(props.detectingSize ?? 100)) {
      return "up";
    } else if (my - y.current > (props.detectingSize ?? 100)) {
      return "down";
    } else return "none";
  };

  // ADDED HERE: compute how near the end we are
  /** @returns The progress between 0.0 and 1.0 */
  const computeProgress = async (mx: number, my: number): Promise<number> => {
    const direction = await selectEarlyDirection(mx, my);
    if (direction == "left" || direction == "right") {
      return Math.abs(mx - x.current) / (props.detectingSize ?? 100);
    } else if (direction == "up" || direction == "down") {
      return Math.abs(my - y.current) / (props.detectingSize ?? 100);
    }
    return 0.0;
  };

  const onStart = async (mx: number, my: number) => {
    x.current = mx;
    y.current = my;
  };
  const onMove = async (mx: number, my: number) => {
    if (target.current === null) return;
    if (props.horizontalOnly) my = y.current;

    if (props.onPreSwipe) props.onPreSwipe(await selectEarlyDirection(mx, my), await computeProgress(mx, my));

    const origin = await getRotateOrigin(mx);
    let angle =
      (Math.abs(mx - x.current) * angleMax * (1 - Math.abs(my - mid.current) / mid.current / 2)) /
      target.current?.offsetWidth;
    if (props.horizontalOnly) angle = Math.abs(angle);

    console.log(angle);

    if (origin !== undefined) {
      gsap.to(target.current, {
        transformOrigin: `${origin[0]}% ${origin[1]}%`,
        x: (mx - x.current) * 0.2,
        y: (my - y.current) * 0.8,
        rotation: origin[2] * angle,
        duration: 0,
      });
    }
  };

  const onEnd = async (mx: number, my: number) => {
    if (target.current === null) return;
    if (props.horizontalOnly) my = y.current;

    const mid = target.current?.offsetHeight / 2;
    const angle = (Math.abs(mx - x.current) * angleMax * (1 - Math.abs(my - mid) / mid)) / target.current?.offsetWidth;
    const d = await selectDirection(mx, my);

    if (d === "right" || d === "left") {
      const tl = gsap.timeline();
      tl.to(target.current, {
        x: (mx - x.current > 0 ? 1 : -1) * (props.throwLimit ?? 3000) + "px",
        y: (my - y.current > 0 ? 1 : -1) * (props.throwLimit ?? 3000) * Math.tan((angle * Math.PI) / 180) + "px",
        duration: 0.5,
        ease: "power1.in",
      });
      tl.to(target.current, {
        display: "none",
        duration: 0,
      });
    } else if (d === "up" || d === "down") {
      const tl = gsap.timeline();
      tl.to(target.current, {
        x: (mx - x.current > 0 ? 1 : -1) * (props.throwLimit ?? 3000) * Math.tan((angle * Math.PI) / 180) + "px",
        y: (my - y.current > 0 ? 1 : -1) * (props.throwLimit ?? 3000) + "px",
        duration: 0.5,
        ease: "power1.in",
      });
      tl.to(target.current, {
        display: "none",
        duration: 0,
      });
    } else {
      gsap.to(target.current, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }

    x.current = 0;
    y.current = 0;

    await props.onSwipe?.(d);
  };

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    const mx = e.targetTouches[0].clientX;
    const my = e.targetTouches[0].clientY;

    onStart(mx, my);
  };

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    const mx = e.changedTouches[0].clientX;
    const my = e.changedTouches[0].clientY;
    onMove(mx, my);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
    const mx = e.changedTouches[0].clientX;
    const my = e.changedTouches[0].clientY;
    onEnd(mx, my);
  };

  const mouseClicked = useRef<Boolean>(false);

  const handleMouseDown = (e: MouseEvent<HTMLElement>) => {
    mouseClicked.current = true;
    const mx = e.clientX;
    const my = e.clientY;
    onStart(mx, my);
  };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (mouseClicked.current) {
      const mx = e.clientX;
      const my = e.clientY;
      onMove(mx, my);
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLElement>) => {
    console.log("mouse up !");
    if (mouseClicked.current) {
      mouseClicked.current = false;
      const mx = e.clientX;
      const my = e.clientY;
      onEnd(mx, my);
    }
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    if (mouseClicked.current) {
      mouseClicked.current = false;
      const mx = e.clientX;
      const my = e.clientY;
      onEnd(mx, my);
    }
  };

  useEffect(() => {
    const info = target.current?.getBoundingClientRect();
    if (info !== undefined) {
      mid.current = (info.top + info.bottom) / 2;
    }

    if (target.current !== null) {
      target.current.addEventListener("touchstart", (ev) => {
        ev.preventDefault();
      });

      target.current.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
      });

      target.current.addEventListener("touchmove", (ev) => {
        ev.preventDefault();
      });

      target.current.addEventListener("mousemove", (ev) => {
        ev.preventDefault();
      });

      target.current.addEventListener("touchend", (ev) => {
        ev.preventDefault();
      });

      target.current.addEventListener("mouseup", (ev) => {
        ev.preventDefault();
      });

      target.current.addEventListener("mouseleave", (ev) => {
        ev.preventDefault();
      });
    }
  }, []);
  return (
    <div
      ref={target}
      className={props.className ?? ""}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {props.contents}
    </div>
  );
};
