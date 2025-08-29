import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import Logo from "../ui/Logo";

const navItems: string[] = ["Nexus", "Valut", "Prologue", "About", "Contact"];

function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { y: currScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  function toggleAudioIndicator() {
    setIsAudioPlaying((playing) => !playing);
  }

  useEffect(
    function () {
      const container = navContainerRef.current;
      if (!container) return;
      if (currScrollY === 0) {
        setIsNavVisible(true);
        container.classList.remove("floating-nav");
      } else if (currScrollY > lastScrollY) {
        setIsNavVisible(false);
        container.classList.add("floating-nav");
      } else if (currScrollY < lastScrollY) {
        setIsNavVisible(true);
        container.classList.add("floating-nav");
      }

      setLastScrollY(currScrollY);
    },
    [currScrollY, lastScrollY],
  );

  useEffect(
    function () {
      const container = navContainerRef.current;
      if (!container) return;
      gsap.to(container, {
        opacity: isNavVisible ? 1 : 0,
        y: `${isNavVisible ? 0 : -100}`,
        duration: 0.5,
      });
    },
    [isNavVisible],
  );

  useEffect(
    function () {
      const audio = audioRef.current;
      if (!audio) return;

      if (isAudioPlaying && hasUserInteracted) {
        audio.play();
      } else if (!isAudioPlaying) {
        audio.pause();
      }
    },
    [isAudioPlaying, hasUserInteracted],
  );

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  return (
    <header className="fixed top-0 z-20 w-full px-6 py-2.5">
      <div ref={navContainerRef} className="rounded-lg px-4 py-2">
        <nav className="flex size-full items-center justify-between">
          <div className="flex items-center gap-7">
            <Logo variant="white" containerClassName="h-10 w-10" alt="logo" />

            <Button
              rightIcon={<TiLocationArrow />}
              containerClass="text-sm flex-center gap-1 py-2! px-4!"
            >
              products
            </Button>
          </div>

          <div className="flex h-full items-center gap-5">
            <ul className="hidden gap-1 md:flex">
              {navItems.map((item, i) => {
                return (
                  <li key={i}>
                    <a href="#" className="nav-hover-btn">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button
              className="flex items-center space-x-0.5 px-4"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
                onLoadedData={() => setIsAudioPlaying(true)}
              />
              {[1, 2, 3, 4].map((bar) => {
                return (
                  <div
                    key={bar}
                    className={`indicator-line ${isAudioPlaying && hasUserInteracted ? "active" : ""}`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                );
              })}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
