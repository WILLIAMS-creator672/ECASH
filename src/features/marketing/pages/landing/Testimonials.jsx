import Reveal from "@/components/Reveal"
import { APP_CONFIG } from "@/constants/appConfig"
import { NavLink } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi";


export default function Testimonials(){
return (
    <section className="section-padding bg-gray-200 flex flex-col gap-10 lg:gap-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
                <p className="text-brand-blue">TESTIMONIALS</p>
                <Reveal delay={0.2} className="section-heading">Success Stories: Clients <br /> Share Their Journey</Reveal>
            </div>

         
            <NavLink to='/'  className="flex items-center gap-2 text-brand-red hover:tracking-wider mt-6 active:bg-gray-400 active:gray-400">
            VIEW ALL FEEDBACK <FiArrowRight />
            </NavLink>
        </div>
    </section>
)
}