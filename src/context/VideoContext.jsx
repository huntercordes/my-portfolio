import { createContext, useRef } from "react";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const activeVideoRef = useRef(null);

  const registerVideo = (videoElement) => {
    // Pause the currently active video if it's different
    if (activeVideoRef.current && activeVideoRef.current !== videoElement) {
      activeVideoRef.current.pause();
    }
    activeVideoRef.current = videoElement;
  };

  return (
    <VideoContext.Provider value={{ registerVideo }}>
      {children}
    </VideoContext.Provider>
  );
}
