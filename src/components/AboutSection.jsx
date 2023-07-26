import blog from "../assets/images/Blog03.jpg"
import block1 from "../assets/images/App-Block02.png"
import block2 from "../assets/images/App-Block03.png"


const AboutSection = () => {
	
	const aboutLists = ["Fast & Secured Payment Processing", "Optimised For Any Transaction", "Lasting Reliability & Trust"]
	
	return (
		  <section className="py-10 px-4 md:px-10 md:flex justify-between">
		    <div>
		      <h1 className="text-2xl font-bold">Securing You Digital Experiences</h1>
		      <p className="font-light my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		      <div>{
		      	aboutLists.map((list, index) => {
		      		return (
		      			  <div key={index} className="mb-6 flex justify-center items-center">
		      			    <span className="bg-primary text-gray-50 font-bold rounded-full p-2 w-[10px] h-[10px] flex justify-center items-center mr-2">+</span>
		      			    <p className="font-light">{list}</p>
		      			  </div>
		      			)
		      	})
		      }</div>
		    </div>
		    <div className="relative">
		      <img src={blog} alt="blog" loading="lazy" className="w-full rounded-md"/>
		      <img src={block1} alt="block-1" loading="lazy" className="w-[150px] absolute top-2 right-2"/>
		      <img src={block2} alt="block-2" loading="lazy" className="w-[150px] absolute bottom-2 left-2"/>
		    </div>
		  </section>
		)
}

export default AboutSection;