import {benefitThree} from "../assets/data/Benefit"
import dashboard from "../assets/images/Dashboard.png"


const SolutionSection = () => {
	return (
		  <section className="pt-10 px-4 md:px-10 md:flex justify-between items-center pb-10">
		    <div>
		      <h1 className="text-xl font-bold">What Do We Bring To The Table ?</h1>
		      <p className="font-light my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
          <div className="pl-6 w-full">{
		      	benefitThree.map(second => {
		      		const {id, title, text} = second;
		      		return(
		      			  <div key={id} className="flex justify-center border-l-2 border-l-lightbgColor2 relative pb-10 pl-8 last:border-0 pr-6">
		      			    <span className="rounded-full flex justify-center items-center p-4 bg-lightbgColor2 w-[50px] h-[50px] mr-3 absolute left-[-25px]"><p className="w-[10px] h-[10px] bg-primary rounded-full"></p></span>
		      			    <div>
		      			      <h3 className="mb-4 font-bold">{title}</h3>
		      			      <p className="font-light text-sm text-gray-500">{text}</p>
		      			    </div>
		      			  </div>
		      			)
		      	})
		      }</div>
		    </div>
		    <div className="w-full">
		      <img src={dashboard} alt="dashboard" loading="lazy" className="w-full"/>
		    </div>
		  </section>
		)
}

export default SolutionSection;