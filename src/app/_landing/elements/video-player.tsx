"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/_core/components/lib/utils";

interface IProps {
  url: string;
  title: string;
  label?: string;
  className?: string;
  description?: string;
  thumbnailURL: string;
  videoClassName?: string;
  footerClassName?: string;
  theme?: "default" | "red" | "blue" | "green" | "purple" | "dark";
}

export default function VideoPlayer(props: IProps) {
  const {
    url,
    title,
    label,
    description,
    thumbnailURL,
    className = "",
    theme = "default",
    videoClassName = "",
    footerClassName = "",
  } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <article className={cn("app-video-player h-full flex flex-col", className)}>
      <figure className={cn("relative flex-grow rounded-t-xl overflow-hidden")}>
        <video
          ref={videoRef}
          preload="metadata"
          poster={thumbnailURL}
          onClick={handleTogglePlay}
          className={cn("w-full h-full  object-cover bg-black", videoClassName)}
        >
          <source src={url} type="video/mp4" />
        </video>

        {!isPlaying && (
          <button
            onClick={handleTogglePlay}
            className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Play className="w-16 h-16 text-white" />
          </button>
        )}
      </figure>

      <footer
        className={cn(
          "rounded-b-xl bg-primary pt-6 pb-3 relative",
          theme,
          footerClassName
        )}
      >
        <button
          onClick={handleTogglePlay}
          className="absolute top-[-18px] text-white rounded-lg p-1 left-3 shadow-md px"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <section className="px-3 flex flex-col h-full">
          <h5 className="font-bold">{title}</h5>
          {description && <p className="mt-3 font-semibold">{description}</p>}
          {label && <small className="mt-auto">{label}</small>}
        </section>
      </footer>
    </article>
  );
}
