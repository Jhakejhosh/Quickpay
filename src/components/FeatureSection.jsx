import {features} from "../assets/data/Featuresandsteps"
import {motion} from "framer-motion"

const Features = () => {
	
	const elementSlideIn = {
		offscreen: {x:-100, opacity:0},
		onscreen: {x:0, opacity:1,
			transition: {duration:1, type:"spring", bounce:0.4}
		}
	}
	
	return (
		  <section className="bg-bgColor text-gray-50 px-4 pt-16 md:px-10 pb-4">
		    <h1 className="text-xl text-gray-50 font-bold">How We Are Killing It With Some Magic</h1>
		    <p className="text-subtle font-light my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		    <div className="mt-10 md:flex justify-between md:gap-6">{
		    	features.map(feature => {
		    		const {id, icon, title, text} = feature;
		    		return (
		    			  <motion.div key={id} className="p-6 bg-cardColor rounded-md shadow-lg mb-6" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.3}} transition={{staggerChildren:0.5}}>
		    			    <motion.span className="rounded-full flex justify-center items-center p-4 bg-primary odd:bg-secondary w-[50px] h-[50px] mb-3 text-bgColor" variants={elementSlideIn}>{icon}</motion.span>
		    			    <h3 className="font-bold mb-4">{title}</h3>
		    			    <p className="font-light text-subtle">{text}</p>
		    			  </motion.div>
		    			)
		    	})
		    }</div>
		  </section>
		)
}

export default Features;