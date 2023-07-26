import {BiSupport, BiSolidHome, BiSolidBank} from "react-icons/bi"
import {FaPiggyBank} from "react-icons/fa"


		export const NavMenu = [
			  {
			  	id : 1,
			  	menu : "Home",
			  	path : "/",
			  	icon : <BiSolidHome/>,
			  },
			  {
			  	id : 2,
			  	menu : "Business",
			  	icon : <FaPiggyBank/>,
			  	subNav : [
			  		  {
			  		  	menu : "Service-details",
			  		  	path : "/service",
			  		  },
			  		  {
			  		  	menu : "Solution",
			  		  	path : "/solution"
			  		  }
			  		]
			  },
			  {
			  	id : 3,
			  	menu : "Company",
			  	icon : <BiSolidBank/>,
			  	subNav : [
			  		  {
			  		  	menu : "About Us",
			  		  	path : "/about",
			  		  },
			  		  {
			  		  	menu : "Team",
			  		  	path : "/team"
			  		  }
			  		]
			  },
			  {
			  	id : 4,
			  	menu : "Support",
			  	path : "/support",
			  	icon : <BiSupport/>,
			  }
			]