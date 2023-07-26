import {BiChevronDown, BiChevronUp} from "react-icons/bi"
import React, {useState} from "react"
import {Link} from "react-router-dom"


const SubnavMenu = ({subNav, menu, icon}) => {
	
	const [showSubnav, setShowSubnav] = useState(false);
	
	return (
		<>
      <div className="hover:bg-lightbgColor hover:border-l-4 hover:border-l-primary py-6 transition-ease-in-out duration-500 md:hidden">
      	<div className="px-4 flex">
      	 <div className="flex justify-center items-center">
      	  <span className="w-[25px] h-[25px] md:hidden mr-4 flex justify-center items-center">{icon}</span>
      	  <p>{menu}</p>
      	 </div> 
      	  <span onClick={() => setShowSubnav(!showSubnav)} className="w-[25px] h-[25px] flex justify-center items-center">{subNav ? (<>{showSubnav ? <BiChevronUp/> : <BiChevronDown/>}</>) : null }</span>
      	</div>
      	{subNav&&showSubnav ? <div className="flex flex-col mt-4">{
      		subNav.map((nav, index) => {
      			return (
      				  <Link to={nav.path} key={index} className="pl-16 py-4 font-light">{nav.menu}</Link>
      				)
      		})
      	}</div> : null}
      </div>
      
      
      <div className="hidden md:flex hover:bg-lightbgColor hover:border-b-4 hover:border-b-primary py-6 transition-ease-in-out duration-500 relative">
      	<div className="px-4 flex">
      	 <div className="flex justify-center items-center">
      	  <span className="w-[25px] h-[25px] md:hidden mr-4 flex justify-center items-center">{icon}</span>
      	  <p>{menu}</p>
      	 </div> 
      	  <span onClick={() => setShowSubnav(!showSubnav)} className="w-[25px] h-[25px] flex justify-center items-center">{subNav ? (<>{showSubnav ? <BiChevronUp/> : <BiChevronDown/>}</>) : null }</span>
      	</div>
      	{subNav&&showSubnav ? <div className="flex flex-col absolute top-[100%] bg-gray-50 w-[200px] mr-4 shadow-md">{
      		subNav.map((nav, index) => {
      			return (
      				  <Link to={nav.path} key={index} className="p-4 font-light text-gray-700 w-full">{nav.menu}</Link>
      				)
      		})
      	}</div> : null}
      </div>
    </>
		)
}

export default SubnavMenu