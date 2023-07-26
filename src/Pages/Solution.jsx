import {useEffect} from "react"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import SolutionSection from "../components/SolutionSection"
import AboutSection from "../components/AboutSection"
import HeroSection from "../utils/HeroSection"
import Head from "../utils/Head"


const Solution = () => {
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <>
		    <Head title="Solution" description="Quick_pay finance dashboard"/>
		    <main className="bg-bgColor w-full relative">
		      <Navbar/>
		      <HeroSection page="Solution" headline="Quick_pay Finance Dashboard"/>
		    </main>
		    <SolutionSection/>
		    <AboutSection/>
		    <Contact/>
		  </>
		)
}

export default Solution



