import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { FiUmbrella } from "react-icons/fi";
import insuranceImage from "@/assets/images/landing/insurance.jpg";
import Reveal from "@/components/Reveal";

export default function SectionTwo() {
  return (
    <section className="section-padding bg-gray-100 flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <p className="text-brand-blue ">OUR SOLUTIONS</p> <br />
          <Reveal x={-60} y={0} delay={0.2} className="section-heading">
            Your Financial Goals, Our <br /> Purpose: Explore Our <br />{" "}
            Solutions.
          </Reveal>
        </div>

        <NavLink
          to="/services"
          className="flex items-center gap-2 text-brand-red hover:tracking-wider mt-6 active:gray-400"
        >
          VIEW ALL SOLUTONS <FiArrowRight />
        </NavLink>
      </div>

      <div className="flex flex-col lg:flex-row justify-start gap-10 bg-gray-50 rounded-2xl p-4 shadow-2xl">
        <Reveal x={-60} y={0} delay={0.2}>
            <img src={insuranceImage} alt="" className="h-auto lg:h-70 w-auto lg:w-110" />
        </Reveal>

        <Reveal x={60} y={0} delay={0.2} className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <div className="text-brand-blue rounded-full bg-gray-200 p-2 lg:p-4">
              <FiUmbrella strokeWidth={2.5} className="text-2xl" />
            </div>
            <h1 className="text-[17px] lg:text-[20px] font-extrabold">Insurance Service</h1>
          </div>

          <p className="w-fit lg:w-150 mt-5 lg:mt-0 mb-5 lg:mb-0">Protect your financial future with our tailored insurance plans, ensuring security for you and your loved ones.</p>

          <NavLink className='flex items-center gap-2 text-brand-red hover:text-brand-blue hover:tracking-wider w-fit active:gray-400'>
            LEARN MORE <FiArrowRight/>
          </NavLink>
        </Reveal>
      </div>
    </section>
  );
}
