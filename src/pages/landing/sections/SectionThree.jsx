import { div, h1 } from "motion/react-client";
import missionVisionImg from "../../../assets/images/landing/missionVision.jpg";
import { SectionThreeContent } from "../data";
import { FiCheck } from "react-icons/fi";

export default function SectionThree() {
  return (
    <section className="section-padding bg-brand-blue flex flex-col items-center gap-4 lg:gap-8 h-100 relative">
      <div className="flex flex-col items-center gap-2 lg:gap-4 text-white">
        <p>MISSION & VISION</p>
        <h1 className="section-heading">
          World’s Leading Digital Bank. <br /> Your Trust, Our Technology.
        </h1>
      </div>
      <img
        src={missionVisionImg}
        alt=""
        className="w-auto lg:w-250 h-auto lg:h-80 rounded-2xl"
      />{" "}
      <br />

      <div className="flex flex-col lg:flex-row gap-10 mt-15 lg:mt-0">
        {SectionThreeContent.map((item) => {
          return (
            <div
              key={item.title}
              className="shadow-2xl flex flex-col justify-between w-fit lg:w-150 h-fit lg:h-100 px-8 py-8 rounded-2xl"
            >
              <h1 className="text-[17px] lg:text-[20px] font-extrabold">
                {item.title}
              </h1>{" "}
              <br />
              <p className="text-[14px] lg:text-[16px] leading-loose text-gray-800">
                {item.description}
              </p>{" "}
              <br />
              <div className="flex flex-col gap-4">
                {item.examples.map((example) => (
                  <div
                    key={example}
                    className="font-bold text-[14px] lg:text-[16px] flex items-center gap-3"
                  >
                    <FiCheck
                      strokeWidth={4.5}
                      className="text-l lg:text-xl shrink-0"
                    />
                    <p>{example}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
