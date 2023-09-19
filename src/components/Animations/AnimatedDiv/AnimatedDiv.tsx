import React, { CSSProperties, useEffect, useRef, useState } from "react";
import "./AnimatedDiv.scss"; // CSS file for animation styles

interface AnimatedDivProps extends React.PropsWithChildren {
  style?: CSSProperties;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (divRef.current && !isShown) {
      const rect = divRef.current.getBoundingClientRect();

      console.log(rect);
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      ref={divRef}
      className={`animated-div ${isVisible ? "visible" : ""} ${
        isAnimated ? "animated" : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;
