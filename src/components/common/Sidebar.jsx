import { BarChart2, Menu, PersonStanding, Users2, DollarSign, SquarePen, Key, Settings, SidebarOpen } from "lucide-react"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
// import ourlogo from '/assets/ourlogo'

const SIDEBAR_ITEMS = [
	{ name: "Overview", icon: BarChart2, color: "#6366f1", href: "/"},
	{ name: "Doctors", icon: Users2, color: "#8B5CF6", href: "/doctors" },
	{ name: "Patients", icon: PersonStanding, color: "#EC4899", href: "/patients" },
    { name: "Appointments", icon: SquarePen, color: "#F59E0B", href: "/appointments" },
	{ name: "Payments", icon: DollarSign, color: "#10B981", href: "/payments" },
	{ name: "Room Allotments", icon: Key, color: "#3B82F6", href: "/room-allotments" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];
const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <motion.div 
		className = {`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0
					${isSidebarOpen ? "w-64" : "w-20"}`}
		animate = {{ width : isSidebarOpen ? "256" : "80"}}
	>

		<div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r
		 border-gray-700'>
			<motion.button
				whileHover={{scale : 1.1}}
				whileTap={{scale : 0.9}}
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
			>
				<Menu size={24} />	
			</motion.button>
		
		</div>
    </motion.div>
  )
}

export default Sidebar
