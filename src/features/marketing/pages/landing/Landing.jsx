import { usePageTitle } from "@/hooks/usePageTitle";
import Hero from "./Hero";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Stats from "./Stats"
import Offers from "./Offers"

export default function Landing(){
usePageTitle('Secure Banking')

    return (
        <main>
            <Hero/>
            <SectionTwo/>
            <SectionThree/>
            <Stats/>
            <Offers/>
        </main>
    )
}

