import React from 'react'

interface ServiceType {
	title: string
	description: string
	image: string
}

const ServiceCard: React.FC<ServiceType> = ({ title, description, image }) => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-20 w-5/6  mt-20">
			<div
				className={` basis-2/4  ${image} h-[400px] w-[400px] rounded-2xl object-cover `}
			/>
			<div className="basis-2/4 flex justify-center items-start w-[500px] flex-col ">
				<h3 className="font-bold text-2xl">{title}</h3>
				<p className="text-gray-500 py-4"> {description}</p>
				<button className="px-8 py-2 bg-gray-800 rounded-full">
					Learn more
				</button>
			</div>
		</div>
	)
}

export default ServiceCard
