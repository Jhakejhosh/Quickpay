import {benefitOne, benefitTwo} from "../assets/data/Benefit"
import phone from "../assets/images/MobileApp02.png"
import {motion} from "framer-motion"


const Experiences = () => {
	
	const elementSlideIn = {
		offscreen: {y:100, opacity:0},
		onscreen: {y:0, opacity:1,
			transition: {duration:1}
		}
	}
	
	const imageAppear = {
		offscreen: {scale:0, opacity:0},
		onscreen: {scale:1, opacity:1,
			transition: {duration:1}
		}
	}
	
	return(
		  <section className="px-4 pt-16 w-full md:px-10">
		    <div className="text-center">
		      <h1 className="text-2xl font-bold md:text-3xl">A Clean And Easy To Use Experience <b className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">With Quick_pay</b></h1>
		      <p className="font-light my-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		    </div>
		    <div className="md:flex block justify-between items-center">
		      <motion.div className="pl-6 w-full" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.3}}>{
		      	benefitOne.map(first => {
		      		const {id, title, text} = first;
		      		return(
		      			  <motion.div key={id} className="flex justify-center border-l-2 border-l-lightbgColor2 relative pb-10 pl-8 last:border-0 pr-6 last:pb-4" variants={elementSlideIn}>
		      			    <span className="rounded-full flex justify-center items-center p-4 bg-lightbgColor2 w-[50px] h-[50px] mr-3 absolute left-[-25px]"><p className="w-[10px] h-[10px] bg-primary rounded-full"></p></span>
		      			    <div>
		      			      <h3 className="mb-4 font-bold">{title}</h3>
		      			      <p className="font-light text-sm text-gray-500">{text}</p>
		      			    </div>
		      			  </motion.div>
		      			)
		      	})
		      }</motion.div>
		      <motion.div className="flex justify-center items-center w-full" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.3}}>
		        <motion.img src={phone} alt="phone" loading="lazy" className="w-9/12" variants={imageAppear}/>
		      </motion.div>
		      
		      <motion.div className="pl-6 w-full" initial="offscreen" whileInView="onscreen" viewport={{once:true, amount:0.3}}>{
		      	benefitTwo.map(second => {
		      		const {id, title, text} = second;
		      		return(
		      			  <motion.div key={id} className="flex justify-center border-l-2 border-l-lightbgColor2 relative pb-10 pl-8 last:border-0 pr-6 pt-4" variants={elementSlideIn}>
		      			    <span className="rounded-full flex justify-center items-center p-4 bg-lightbgColor2 w-[50px] h-[50px] mr-3 absolute left-[-25px]"><p className="w-[10px] h-[10px] bg-primary rounded-full"></p></span>
		      			    <div>
		      			      <h3 className="mb-4 font-bold">{title}</h3>
		      			      <p className="font-light text-sm text-gray-500">{text}</p>
		      			    </div>
		      			  </motion.div>
		      			)
		      	})
		      }</motion.div>
		      
		    </div>
		  </section>
		)
}

export default Experiences