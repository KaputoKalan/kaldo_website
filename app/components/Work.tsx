import React from 'react'
import WorkCard from './WorkCard'

const Work = () => {
	return (
		<section id="work" className="gap-16  py-10 h-full mt-10 ">
			<div className="mx-auto w-5/6">
				<p className=" py-5 text-gray-500 font-bold text-xs md:text-sm">
					OUR WORK
				</p>
				<div className="flex">
					<div className="basis-2/3 pr-10">
						<h2 className="text-4xl font-black w-5/6">
							We help businesses to make their production come to life,
							worldwide.
						</h2>
					</div>
					<div className="basis-1/3">
						<p className="text-gray-900">
							Our experience has helped our clients launch new companies in the
							digitial arena throughout the years. Take a look at some of our
							greatest work
						</p>
						<button className=" py-2 px-6 font-bold text-primary-500 bg-primary-100 rounded-full mt-5 ">
							See all work
						</button>
					</div>
				</div>
				<div className="overflex-x-auto w-full h-[600px] overflow-y-hidden  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-300 ">
					<ul className="w-[2800px] whitespace-nowrap">
						<WorkCard />
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Work
