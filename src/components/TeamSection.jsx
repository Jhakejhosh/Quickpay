import {people} from "../assets/data/Data" 


const TeamSection = () => {
	return (
		  <section className="pt-10 px-4 pb-8">
		    <div>
		      <h1 className="font-bold text-xl">The Awesome Executives Behind Our Powerful Solution</h1>
		      <p className="my-4 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		      <div className="flex justify-center items-center gap-4">{
		      	people.map(person => {
		      		const {id, image, category, name, job} = person;
		      		return (
		      			  <>{
		      			  	category==="leader" ? (
		      			  		  <div key={id} className="overflow-hidden rounded-md w-full md:w-[150px] relative">
		      			  		    <img src={image} alt={name} className="w-full h-[220px] md:w-[150px]"/>
		      			  		    <div className="absolute bottom-4 py-2 text-center bg-gray-50">
		      			  		      <h3 className="font-bold text-sm">{name}</h3>
		      			  		      <p className="font-light text-sm">{job}</p>
		      			  		    </div>
		      			  		  </div>
		      			  		) : null
		      			  }</>
		      			)
		      	})
		      }</div>
		    </div>
		    
		    <div className="pt-8">
		      <h1 className="font-bold text-xl">Meet Our Awesome Team</h1>
		      <p className="my-4 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
		      <div className="grid grid-cols-2 md:flex justify-center items-center gap-4">{
		      	people.map(person => {
		      		const {id, image, category, name, job} = person;
		      		return (
		      			  <>{
		      			  	category==="team" ? (
		      			  		  <div key={id} className="overflow-hidden rounded-md w-full relative">
		      			  		    <img src={image} alt={name} className="w-full h-[220px]"/>
		      			  		    <div className="absolute bottom-4 py-2 text-center bg-gray-50">
		      			  		      <h3 className="font-bold text-sm">{name}</h3>
		      			  		      <p className="font-light text-sm">{job}</p>
		      			  		    </div>
		      			  		  </div>
		      			  		) : null
		      			  }</>
		      			)
		      	})
		      }</div>
		    </div>
		    
		  </section>
		)
}

export default TeamSection