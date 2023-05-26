import React from 'react'
import ServiceCard from './ServiceCard'

const services: Array<ServiceType> = [
	{
		title: 'Website development',
		description:
			'Websites and eCommerce do not have to be expensive or complicated on order to be effective. We deal with a wide spectrum of client with varying budgets and needs.',
		image: 'content-web',
	},
	{
		title: 'Website app development',
		description:
			'Experience the digital revolution with our top-notch web application development services. We craft custom web applications that are tailored to your unique business requirements. Whether you need a responsive e-commerce platform, a robust CRM system, or a dynamic web portal, we have the skills and expertise to bring your vision to life. Harness the power of the web and elevate your online presence with our web application development solutions.',
		image: 'content-webapp',
	},
	{
		title: 'Mobile app development',
		description:
			'Unlock the power of mobility with our cutting-edge mobile app development services. We specialize in creating innovative and user-friendly applications for both iOS and Android platforms. From concept to deployment, our expert team ensures seamless functionality, captivating design, and a seamless user experience.',
		image: 'content-app',
	},
]

const Services = () => {
	return (
		<section id="services" className="gap-16  py-10 h-full mt-10 ">
			<div className="mx-auto py-20 w-5/6 bg-black text-white rounded-xl flex flex-col items-center justify-center ">
				<p className="py-5 text-gray-500 font-bold text-xs md:text-sm">
					OUR SERVICES
				</p>
				<h2 className="text-4xl font-black text-center w-3/6 ">
					We help businesses to make their product come to life, worldwide.
				</h2>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						image={service.image}
					/>
				))}
			</div>
		</section>
	)
}

export default Services
