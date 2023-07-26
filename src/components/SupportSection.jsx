import {supportCategories} from "../assets/data/Data"
import {motion} from "framer-motion"


const SupportSection = () => {
	
	const elementSlideIn = {
		offscreen: {y:100, opacity:0},
		onscreen: {y:0, opacity:1,
			transition: {duration:1, type:"spring", bounce:0.4}
		}
	}
	
	return (
		  <section className="pt-10 px-4 md:px-10 pb-8">
		    <h1 className="font-bold text-xl md:text-center">Question Category</h1>
		    <p className="font-light my-4 md:text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae </p>
		    <div className="md:grid grid-cols-3 gap-4">
		      {supportCategories.map(cat => {
		      	const {id, support, icon} = cat;
		      	return (
		      		  <motion.div key={id} className="text-center py-6 w-full rounded-md bg-lightbgColor2 mb-6" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.8}} transition={{staggerChildren:0.5}}>
		      		    <p className="font-bold mb-4">{support}</p>
		      		    <motion.span variants={elementSlideIn}>{icon}</motion.span>
		      		  </motion.div>
		      		)
		      })}
		    </div>
		  </section>
		)
}
export default SupportSection;