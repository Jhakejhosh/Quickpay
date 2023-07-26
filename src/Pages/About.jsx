import {useEffect} from "react"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import AboutSection from "../components/AboutSection"
import Testimonial from "../components/TestimonialSection"
import HeroSection from "../utils/HeroSection"
import Head from "../utils/Head"


const About = () => {
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <>
		    <Head title="About Us" description="Quick_pay is the future of payment"/>
		    <main className="bg-bgColor w-full relative">
		      <Navbar/>
		      <HeroSection page="About" headline="Quick_pay Is The Future Of Payment"/>
		    </main>
		    <AboutSection/>
		    <Testimonial/>
		    <Contact/>
		  </>
		)
}

export default About



