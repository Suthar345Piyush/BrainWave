import Section from "./Section";
import Heading from "./Heading";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { service1, service2, service3, check } from "../assets";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI built for Creators."
          text="Brainwave unlocks the future potential of the AI applications"
        />
        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* Left side with image */}
            <div className="flex-1 relative h-full">
              <div className="absolute inset-0 lg:-left-20 lg:-top-20 lg:-bottom-20">
                <img
                  src={service1}
                  alt="Smart AI"
                  className="h-full w-full object-cover scale-110"
                  width={800}
                  height={730}
                />
              </div>
            </div>

            {/* Right side with content */}
            <div className="flex-1 relative z-2 max-w-[24rem] mt-8 lg:mt-0 lg:ml-8 bg-n-8/90 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="h4 mb-4">Smart AI</h4>
              <p className="body-2 mb-8 text-n-3">
                Brainwave unlocks the future potential of the AI applications
              </p>
              <ul className="body-2 space-y-4">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Modified Generating component styles for longer search bar */}
          <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-[15%] lg:bottom-8 lg:-translate-x-1/2 min-w-[300px] lg:min-w-[500px] z-5" />
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service2}
                alt="robot"
                className="object-cover w-full h-full"
                width={630}
                height={750}
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Photo Editing</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Automatically improve your photos using AI app&apos;s photo
                editing with advanced editing tools. Try now!
              </p>
            </div>
            <PhotoChatMessage />
          </div>

          <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Video generation</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Create stunning, high quality videos with AI
              </p>

              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center ${
                      index === 2
                        ? "w-[3rem] p-0.25 bg-conis-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img
                        src={item}
                        width={24}
                        height={24}
                        alt="service icon"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                src={service3}
                alt="robot"
                className="object-cover w-full h-full"
                height={400}
                width={520}
              />
              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
