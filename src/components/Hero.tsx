import { useRef, useState } from "react";

function Hero() {
  const [currIndex, setCurrIntex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos: number = 4;
  const nextVideoRef = useRef(null);

  function handleMiniVideoClick() {
    setHasClicked(true);
    setCurrIntex((idx) => idx + 1);
  }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="bg-blue-75 relative z-10 h-dvh overflow-hidden rounded-lg"
      >
        <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div onClick={handleMiniVideoClick} className="origin-center">
            <video ref={nextVideoRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
