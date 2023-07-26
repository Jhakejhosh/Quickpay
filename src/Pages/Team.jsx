import {useEffect} from "react"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import TeamSection from "../components/TeamSection"
import HeroSection from "../utils/HeroSection"
import Head from "../utils/Head"


const Team = () => {
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <>
		    <Head title="Team" description="Our awesome team"/>
		    <main className="bg-bgColor w-full relative">
		      <Navbar/>
		      <HeroSection page="Team" headline="Our Awesome Team"/>
		    </main>
		    <TeamSection/>
		    <Contact/>
		  </>
		)
}

export default Team



