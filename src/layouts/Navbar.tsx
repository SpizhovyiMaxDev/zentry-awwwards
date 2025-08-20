import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems: string[] = ["Nexus", "Valut", "Prologue", "About", "Contact"];

function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { y: currScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);

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
      if (isAudioPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    [isAudioPlaying],
  );

  return (
    <div className="fixed top-0 z-20 w-full px-6 py-2.5">
      <header ref={navContainerRef} className="rounded-lg px-4 py-2">
        <nav className="flex size-full items-center justify-between">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              rightIcon={<TiLocationArrow />}
              containerClass="text-sm flex-center gap-1  py-2! px-4!"
            >
              products
            </Button>
          </div>

          <div className="flex h-full items-center">
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
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => {
                return (
                  <div
                    key={bar}
                    className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                  />
                );
              })}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
