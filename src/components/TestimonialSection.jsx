import {testimony, partner} from "../assets/data/Testimony"
import {motion} from "framer-motion"


const Testimonial = () => {
	
const elementAppear = {
		offscreen: {x:100, opacity:0},
		onscreen: {x:0, opacity:1,
			transition: {duration:1},
			rotate:[45, 0]
		}
	}
	
	return (
		  <section className="pt-12">
		    <h1 className="mb-8 text-center text-xl font-bold px-6">Don't Just Take Our Word For It</h1>
		    <div>
		      <div className="w-full gap-6 relative overflow-x-hidden md:flex justify-between items-center px-4 md:px-0">
		      {
		      	testimony.map(list => {
		      		const {id, name, img, text} = list;
		      		return (
		      			<motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.2}}>
		      			  <motion.div key={id} className="max-w-full rounded-md p-4 mb-10 border-2 border-lightbgColor2" variants={elementAppear}>
		      			    <p className="text-sm font-light mb-6">{text}</p>
		      			    <div className="flex justify-center items-center">
		      			      <img src={img} alt={name} loading="lazy" className="w-[45px] mr-3"/>
		      			      <p className="text-sm font-bold">{name}</p>
		      			    </div>
		      			  </motion.div>
		      			</motion.div>
		      			)
		      	})
		      }</div>
		      <div className="bg-bgColor px-4 py-8 md:px-10">
		      <h1 className="font-bold text-lg text-gray-50 mb-6">Our Technology Partners</h1>
		      <div className="grid grid-cols-3 gap-8 md:flex justify-between items-center w-full">
		        {partner.map(part => {
		        	const {id, img} = part;
		        	return (
		        		  <div className="w-full"><img src={img} alt="partner" key={id} loading="lazy" className="w-full"/></div>
		        		)
		        })}</div></div>
		    </div>
		  </section>
		)
}

export default Testimonial