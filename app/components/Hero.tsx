import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Hero = () => {
	return (
		<section id="home" className="gap-16  py-10 md:h-full md:pb-0 mt-20 ">
			<div className="mx-auto w-5/6 flex  md:h-full gap-5 ">
				<div className="basis-3/4 bg-macbook bg-cover bg-no-repeat w-full h-[80vh] rounded-xl ">
					<div className="p-20 items-start justify-end flex flex-col h-full">
						<p className="text-gray-100 opacity-50 font-semibold text-sm">
							SOFTWARE DEVELOPMENT SERVICE
						</p>
						<div className="flex justify-evenly w-full items-center">
							<h1 className="text-white text-5xl font-bold basis-3/4">
								We are a website & app development agency
							</h1>
							<div className="basis-1/4 w-full h-full flex items-center justify-center">
								<button className="bg-gray-100 py-4 px-12 font-bold text-md text-blue-500 hover:bg-gray-300 rounded-full  ">
									Get in touch
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="basis-1/4 w-full h-full rounded-xl ">
					<div className="content-laptop h-full w-full rounded-xl" />

					<div className="py-10">
						<p className="text-sm text-gray-500 mb-1">OUR LATEST WORK</p>
						<div className="flex items-center justify-between">
							<h3 className="text-2xl text-gray-900 font-bold">
								Dorset Capital
							</h3>
							<button className="rounded-full border border-1 border-gray-200 bg-gray-100 p-4">
								<ArrowRightIcon className="h-4 w-4 font-black text-gray-900" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
