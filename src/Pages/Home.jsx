import {useEffect} from "react"
import Navbar from "../components/Navbar"
import HomeBanner from "../components/HomeBanner"
import OfferSection from "../components/OfferSection"
import Experiences from "../components/ExperienceSection"
import Features from "../components/FeatureSection"
import Testimonial from "../components/TestimonialSection"
import Contact from "../components/Contact"
import Head from "../utils/Head"


const Home = () => {
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <>
		    <Head title="Quick_pay" description="Your Go-To Source To Manage Fast Payment"/>
		    <main className="bg-bgColor w-full relative">
		      <Navbar/>
		      <HomeBanner/>
		    </main>
		    <OfferSection/>
		    <Experiences/>
		    <Features/>
		    <Testimonial/>
		    <Contact/>
		  </>
		)
}

export default Home