import {quickpayContact, quickLinks} from "../assets/data/ContactData"
import {Link} from 'react-router-dom'
import {BiChevronRight} from "react-icons/bi"


const Contact = () => {
	return (
		  <section className="bg-bgColor pt-10 text-gray-50">
		    <div className="px-4 md:px-10">
		      <div className="font-bold text-xl">Quick_pay</div>
		      <div className="md:flex my-10 mb-6">
		        <div className="mb-6">
		          <h1 className="font-bold mb-4">Quick Links</h1>
		          <div>{
		          	quickLinks.map(link => {
		          		const {id, text, path} = link;
		          		return(
		          			  <div key={id} className="flex justify-center mb-2 md:mb-4 items-center">
		          			    <span className="w-[20px] h-[20px] mr-2 flex justify-center items-center text-primary font-light"><BiChevronRight/></span>
		          			    <Link to={path} className="text-subtle">{text}</Link>
		          			  </div>
		          			)
		          	})
		          }</div>
		        </div>
		        <div>
		          <h1 className="text-md font-bold mb-6">Company</h1>
		          <div>{
		          	quickpayContact.map(pay => {
		          		const {id, text, icon, title} = pay;
		          		return(
		          			  <div key={id} className="flex justify-center mb-4">
		          			    <span className="mr-2 w-[30px]">{icon}</span>
		          			    <div>
		          			      <h1 className="mb-2">{title}</h1>
		          			      <p className="text-subtle">{text}</p>
		          			    </div>
		          			  </div>
		          			)
		          	})
		          }</div>
		        </div>
		      </div>
		    </div>
		    <footer className="px-4 py-4 md:py-6 text-center">
		      <small className="text-center text-subtle">©quickpay. All Rights Reserved. Developed by Jacob Joshua✌️</small>
		    </footer>
		  </section>
		)
}

export default Contact