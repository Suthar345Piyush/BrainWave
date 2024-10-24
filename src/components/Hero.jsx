import React, { useRef } from "react";
import Section from "./Section";
import Button from "./Button";
import { robot, curve, heroBackground } from "../assets";
import Generating from "./Generating";
import Notification from "./Notification";
import { BackgroundCircles, Gradient, BottomLine } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
// import { CompanyLogos } from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="Hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-2 max-w-[60rem] mx-auto text-center mb-[3rem] md:mb-18 lg:mb:[6rem]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
            Talk, Learn, Discover with your AI companion Brainwave{" "}
            <span className="inline-block relative">
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl: -mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unlock Conversations with Brainwave for Future: Your Personal AI
            Chat Companion, Delivering Instant Answers, Thoughtful Insights, and
            Seamless Communication !
          </p>
          <Button href="/pricing">Get started</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] overflow-hidden">
              <div className="bg-gray-900 rounded-3xl overflow-hidden">
                <div className="w-full max-w-5xl h-[550px] bg-gray-900 rounded-lg  overflow-hidden relative">
                  <img
                    src={robot}
                    className="w-[1100px] h-[770px]  object-cover object-center"
                    alt="hero"
                  />
                  <ScrollParallax isAbsolutelyPositioned>
                    <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md: -translate-x-1/2" />
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={icon}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                </div>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[10rem] w-[10-rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -z-5  -top-[54%] left-1/2 w-[234%]  -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1400}
              height={1800}
              alt="herobackground"
            />
          </div>
          <BackgroundCircles />
        </div>
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block"></CompanyLogos> */}
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
