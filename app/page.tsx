"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Hls from "hls.js";

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const src =
      "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

    if (!video) return;

    let hls: Hls | null = null;

    // Native HLS support (Safari, some browsers)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => undefined);
      return;
    }

    // HLS.js for other browsers
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else {
      // Last–resort fallback: let the browser try
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        style={{ opacity: 0.6 }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      
      {/* Radial vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, black 70%)",
        }}
      />

      {/* Mouse-following glow effect */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
          left: "50%",
          top: "50%",
          marginLeft: "-300px",
          marginTop: "-300px",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center animate-fade-in-up flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="FLYFE Developers"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            priority
          />
        </div>
        
        {/* Coming Soon text */}
        <h1 
          className="text-white text-2xl sm:text-3xl md:text-4xl font-light"
          style={{
            textShadow: "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)",
            letterSpacing: "0.8em",
          }}
        >
          COMING SOON
        </h1>
      </div>

      {/* Bottom gradient line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
        }}
      />
    </div>
  );
}
