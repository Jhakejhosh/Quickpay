import clients from "../assets/images/newclients.png"
import mobile from "../assets/images/MobileApp03-768x1400.png"
import card from "../assets/images/App-Block01.png"
import card2 from "../assets/images/card2.png"
import card3 from "../assets/images/App-Block02.png"
import {motion} from "framer-motion"


const HomeBanner = () => {
	
	const elementSlideIn = {
		offscreen: {y:100, opacity:0},
		onscreen: {y:0, opacity:1,
			transition: {duration:1, delay:0.2}
		}
	}
const cardImageSlideIn = {
		offscreen: {y:100, opacity:0},
		onscreen: {y:0, opacity:1,
			transition: {duration:1}
		}
	}
const ImageSlideIn = {
		offscreen: {x:100, opacity:0},
		onscreen: {x:0, opacity:1,
			transition: {duration:1, delay:2}
		}
	}
	
	return (
		  <motion.main className="pt-[6rem] px-4 pb-[5rem] md:flex md:justify-between md:px-10" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.5}} transition={{staggerChildren:0.5}}>
		    <motion.div className="md:pt-12" variants={elementSlideIn}>
		      <h1 className="text-gray-50 font-bold text-4xl md:text-6xl md:leading-relaxed">Your Go-To Source To Manage Fast Payment <b className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">With Complete Ease.</b></h1>
		      <p className="text-subtle my-6 md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		      <div className="flex items-center">
		        <img src={clients} alt="users" loading="lazy" className="w-36"the/>
		        <p className="text-gray-50 font-semibold ml-6">50k+ Active Users</p>
		      </div>
		    </motion.div>
		    <motion.div className="relative w-full py-6" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.9}} transition={{staggerChildren:0.5}}>
		      <img src={mobile} alt="mobile" loading="loading" className="w-9/12 md:z-10"/>
		      <motion.img src={card} alt="card" loading="loading" className="md:w-[220px] w-[170px] absolute bottom-[-5%] md:bottom-[2%] md:right-8 right-0 md:z-20" variants={cardImageSlideIn}/>
		      <img src={card2} alt="atm-card" loading="loading" className="md:block w-[250px] hidden absolute top-40 z-0 right-6 origin-center rotate-45"/>
		      <motion.img src={card3} alt="card3" loading="loading" className="md:block w-[250px] hidden absolute top-40 z-20 right-6" variants={ImageSlideIn}/>
		    </motion.div>
		  </motion.main>
		)
}
export default HomeBanner