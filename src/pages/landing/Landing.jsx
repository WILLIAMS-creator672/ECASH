import NavBar from "../../components/Navbar";
import { usePageTitle } from "../../hooks/usePageTitle";
import Hero from "./sections/Hero";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";

export default function Landing(){
usePageTitle('Secure Banking')

    return (
        <main>
            <NavBar/>
            <Hero/>
            <SectionTwo/>
            <SectionThree/>
        </main>
    )
}