import {
  Chevron,
  ScrollDownContainer,
  ScrollDownText,
} from "@/utils/styles/scrollIndicator";
import React, { useEffect, useState } from "react";

const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollDownContainer style={{ display: isVisible ? "flex" : "none" }}>
      <Chevron />
      <Chevron />
      <Chevron />
      <ScrollDownText>Scroll down</ScrollDownText>
    </ScrollDownContainer>
  );
};

export default ScrollDownIndicator;
