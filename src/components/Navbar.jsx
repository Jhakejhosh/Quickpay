import { FaBars } from "react-icons/fa"
import {NavMenu} from "../assets/data/NavMenu.jsx"
import SubnavMenu from "./SubnavMenu.jsx"
import {Link} from "react-router-dom"
import React, {useState} from "react"

const Navbar = () => {
	
	const [showNavbar, setShowNavbar] = useState(false);
	
	return (
		    <nav className="w-full p-6 px-4 flex justify-between items-center bg-bgColor fixed z-50 md:px-10">
		      <div>
		        <h1 className="text-gray-50 text-xl font-bold">Quick_pay</h1>
		      </div>
		      
		      
		      {/****mobile view***/}
		      <ul className={`w-full fixed md:hidden z-50 top-[10%] block bg-bgColor ${showNavbar ? "right-0" : "right-[100%]"} h-screen py-6 transition-ease duration-500`}>{
		      	NavMenu.map((nav) => {
		      		return (
		      			<li key={nav.id}>
	                 <Link to={nav.path} className="text-gray-50">
	                   <SubnavMenu {...nav}/>
	                 </Link>
	              </li>   
		      			)
		      	})
		      }</ul>
		      
		      
		      {/***desktop view***/}
		      <ul className="hidden md:w-full md:relative md:flex z-100">{
		      	NavMenu.map((nav) => {
		      		return (
		      			<li key={nav.id}> 
                  <Link to={nav.path} className="text-gray-50">
                    <SubnavMenu {...nav}/>
                  </Link>
                </li>  
		      			)
		      	})
		      }</ul>
		      <div className="text-right text-gray-50 text-xl w-10 md:hidden"><FaBars className="text-xl" onClick={()=>setShowNavbar(!showNavbar)}/></div>
		    </nav>
		)
}

export default Navbar