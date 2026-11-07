import { offersContent } from "./data";
import Reveal from "@/components/Reveal";

export default function Offers() {
  return (
    <section className="section-padding flex justify-center bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-fit gap-10 lg:gap-20">
        {offersContent.map((item) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} className="p-10 w-fit lg:w-140 h-fit md:h-80 flex flex-col gap-5 shadow-2xl border-[1px] border-gray-200 rounded-3xl">
            <div className="flex items-center gap-5">
              <div className="card-icon-style">
                <Icon strokeWidth={2.5}/>
              </div>
              <h1 className="text-[13px] lg:text-[20px] font-extrabold">
                {item.title}
              </h1>
            </div>

            <p className="text-[14px] lg:text-[15px] leading-loose">
              {item.description}
            </p>
          </Reveal>
          )
        })}
      </div>
    </section>
  );
}
