import {offers} from "../assets/data/Offer"
import pos from "../assets/images/Blog06-768x480 - 2023-07-18T115716.836.jpg"
import card from "../assets/images/App-Block04.png"
import {motion} from "framer-motion"


const OfferSection = () => {
	
const elementAppear = {
		offscreen: {opacity:0},
		onscreen: {opacity:1,
			transition: {duration:1.2,}
		}
	}
	
const imageSlide = {
		offscreen: {y:100, opacity:0},
		onscreen: {y:0, opacity:1,
			transition: {duration:1,}
		}
	}
	
	return (
		  <motion.section className="w-full pt-14 px-4 md:flex md:justify-between md:items-center pb-6 md:px-10" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.2}} transition={{staggerChildren:0.5}}>
		    <motion.div className="md:mr-12" variants={elementAppear}>
		      <h1 className="text-2xl font-bold md:text-3xl">We Strive To Offer An Unparalleled Experience</h1>
		      <p className="my-4 font-light text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		      <div>{
		      	offers.map((offer) => {
		      		const {id, title, icon, text} = offer;
		      		return(
		      			  <div key={id} className="flex justify-center mb-8">
		      			    <span className="rounded-full flex justify-center items-center p-4 bg-subtle w-[50px] h-[50px] mr-3">{icon}</span>
		      			    <div>
		      			      <h3 className="font-bold text-base mb-4">{title}</h3>
		      			      <p className="font-light text-sm text-gray-500">{text}</p>
		      			    </div>
		      			  </div>
		      			)
		      	})
		      }</div>
		    </motion.div>
		    <motion.div className="w-full relative inline-block mb-10" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.9}} transition={{staggerChildren:0.5}}>
		      <img src={pos} alt="pos" loading="lazy" className="rounded-md w-11/12 float-right"/>
		      <motion.img src={card} alt="card" loading="lazy" className="shadow-md w-[120px] absolute bottom-[-30px] left-0" variants={imageSlide}/>
		    </motion.div>
		  </motion.section>
		)
}

export default OfferSection;