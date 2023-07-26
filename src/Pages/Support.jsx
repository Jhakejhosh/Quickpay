import {useEffect} from "react"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import SupportSection from "../components/SupportSection"
import HeroSection from "../utils/HeroSection"
import Head from "../utils/Head"


const Support = () => {
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <>
		    <Head title="Support" description="Let's help you"/>
		    <main className="bg-bgColor w-full relative">
		      <Navbar/>
		      <HeroSection page="Support" headline="Your Go-To Source To Manage Payment"/>
		    </main>
		    <SupportSection/>
		    <Contact/>
		  </>
		)
}

export default Support



