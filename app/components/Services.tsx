import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
	return (
		<section id="work" className="gap-16  py-10 h-full mt-10 ">
			<div className="mx-auto py-20 w-5/6 bg-black text-white rounded-xl flex flex-col items-center justify-center ">
				<p className="py-5 text-gray-500 font-bold text-xs md:text-sm">
					OUR SERVICES
				</p>
				<h2 className="text-4xl font-black text-center w-3/6 ">
					We help businesses to make their product come to life, worldwide.
				</h2>
				<ServiceCard />
			</div>
		</section>
	)
}

export default Services
