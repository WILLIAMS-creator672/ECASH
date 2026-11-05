import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { statsContent } from "./data";

export default function Stats() {
  return (
    <section className="section-padding flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-around w-full gap-5">
        {statsContent.map((item) => (
          <Reveal key={item.id} className="w-70 h-40 p-4 py-6 text-center flex flex-col items-center gap-5 rounded-2xl shadow-2xl border-[1px] border-gray-200">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-red">
              <Counter to={item.to} suffix={item.suffix}/>
            </h2>
            <p className="text-gray-700 font-bold">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
