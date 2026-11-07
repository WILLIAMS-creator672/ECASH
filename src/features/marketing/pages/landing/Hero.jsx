import heroBg from "@/assets/images/landing/heroBg.jpg";
import { APP_CONFIG } from "@/constants/appConfig";
import { heroContent } from "./data";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="sectionBgStyle section-padding h-fit flex flex-col gap-10"
    >
      <div className="text-white flex flex-col gap-4">
        <p>YOUR MONEY, YOUR WAY</p>

        <Reveal y={-40} delay={0.4} className="heroHeading">
          Elevate Your Banking <br /> Experience With Us
        </Reveal>

        <Reveal x={60} y={0} delay={0.4} className="heroDescription">
          Experience seamless banking with {APP_CONFIG.name} Bank. Manage your
          finances effortlessly, enjoy quick transactions, and stay in control
          of your money anytime, anywhere.
        </Reveal>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-fit lg:w-full gap-10">
        {heroContent.map((item, id) => {
          const Icon = item.icon;

          return (
            <Reveal
              x={-60}
              y={0}
              delay={0.2}
              key={item.id}
              className="transparentCard backdrop-blur-lg flex flex-col justify-between gap- w-fit lg:w-90 h-90 lg:h-120 text-white px-4 py-6 rounded-2xl"
            >
              <div className="flex w-fit items-center gap-5">
                <div className="card-icon-style">
                  <Icon strokeWidth={2.5}/>
                </div>
                <h1 className="text-[17px] lg:text-[20px] font-extrabold">
                  {item.title}
                </h1>
              </div>
              <p className="text-[13px] lg:text-[15px] leading-loose">
                {item.description}
              </p>

              <NavLink
                to="/"
                className={`hover:tracking-wider flex items-center text-[12px] lg:text-[14px] font-bold gap-2 w-fit cursor-pointer active:bg-gray-400`}
              >
                <p>LEARN MORE</p>
                <FiArrowRight />
              </NavLink>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
