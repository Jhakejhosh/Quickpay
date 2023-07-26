import {useEffect} from "react"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import OfferSection from "../components/OfferSection"
import Features from "../components/FeatureSection"
import HeroSection from "../utils/HeroSection"
import Head from "../utils/Head"


const Service = () => {
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <>
		    <Head title="Service" description="Your go-to source to manage payment"/>
		    <main className="bg-bgColor w-full relative">
		      <Navbar/>
		      <HeroSection page="Service" headline="Your Go-To Source To Manage Payment"/>
		    </main>
		    <OfferSection/>
		    <Features/>
		    <Contact/>
		  </>
		)
}

export default Service


