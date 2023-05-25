import React from 'react'

const ServiceCard = () => {
	return (
		<div className="flex gap-20 w-5/6  mt-20">
			<div className=" basis-2/4  content-laptop h-[400px] w-[400px] rounded-2xl " />
			<div className="basis-2/4 flex justify-center items-start w-[500px] flex-col ">
				<h3 className="font-bold text-2xl">Website development</h3>
				<p className="text-gray-500 py-4">
					{' '}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque
					iste ratione rem possimus autem repudiandae mollitia beatae unde qui!
				</p>
				<button className="px-8 py-2 bg-gray-800 rounded-full">
					Learn more
				</button>
			</div>
		</div>
	)
}

export default ServiceCard
