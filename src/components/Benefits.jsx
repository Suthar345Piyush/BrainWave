import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative  z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Empowering Tomorrow with Intelligent Solutions"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-reapet bg-[length:100%_100%] md-max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h-5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex mt-auto items-center">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    height={48}
                    width={48}
                  />
                  {/* tracking means spacing in tailwind css */}
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Discover More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 cursor-pointer">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      className="h-full w-full object-cover"
                      alt={item.title}
                      width={380}
                      height={362}
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
