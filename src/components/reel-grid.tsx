"use client";

import { useEffect, useRef } from "react";

const reels = [
  {
    src: "/media/red-setup.mp4",
    poster: "/photos/red-floral.webp",
    title: "An elevated setup with red florals, linens, and the bites",
    href: "https://www.instagram.com/reel/DdfFEoxRpbJ/",
  },
  {
    src: "/media/grazing-setup.mp4",
    poster: "/photos/grazing.webp",
    title: "Styling a grazing table before the reveal",
    href: "https://www.instagram.com/reel/Db1uUjDxpu0/",
  },
  {
    src: "/media/birthday.mp4",
    poster: "/photos/birthday.webp",
    title: "A themed first birthday, decor and catering together",
    href: "https://www.instagram.com/reel/Dd1-wsgBGlt/",
  },
  {
    src: "/media/setups.mp4",
    poster: "/photos/spread.webp",
    title: "A tour of recent party setups",
    href: "https://www.instagram.com/reel/DeIzgx4RsBQ/",
  },
];

export function ReelGrid() {
  const refs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    refs.current.forEach((video) => {
      if (!video) return;
      video.muted = true;
      const play = video.play();
      if (play) play.catch(() => undefined);
    });
  }, []);

  return (
    <div className="reel-grid">
      {reels.map((reel, index) => (
        <figure key={reel.src} className="reel-card">
          <video
            ref={(node) => {
              refs.current[index] = node;
            }}
            controls
            playsInline
            muted
            loop
            preload="metadata"
            poster={reel.poster}
            aria-label={reel.title}
          >
            <source src={reel.src} type="video/mp4" />
          </video>
          <figcaption>
            <p>{reel.title}</p>
            <a href={reel.href}>Watch on Instagram</a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
