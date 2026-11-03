import NavBar from "../../components/Navbar"
import { usePageTitle } from "../../hooks/usePageTitle";
import Reveal from "../../components/Reveal";

export default function ContactUs(){
usePageTitle('Contact Us')

    return(
        <main>
            <NavBar/>
            <Reveal x={60} y={0} delay={0.2}>contact us</Reveal>
        </main>
    )
}