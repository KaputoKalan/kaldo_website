import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Hero = () => {
	return (
		<section id="home" className="gap-16  md:py-10 md:h-full  mt-0 md:mt-20 ">
			{/* Left Section */}
			<div className="md:mx-auto md:w-5/6 flex md:h-full gap-5 ">
				<div className="md:basis-3/4 bg-macbook bg-cover bg-no-repeat w-screen md:w-full h-screen md:h-[80vh] md:rounded-xl ">
					<div className=" p-2 md:p-20  items-center md:items-start justify-center md:justify-end flex flex-col h-full min-w-full sm:w-full">
						<p className="text-gray-100 text-center opacity-50 font-semibold text-xs md:text-sm">
							SOFTWARE DEVELOPMENT SERVICE
						</p>
						<div className="flex  flex-col md:flex-row justify-evenly w-full items-center">
							<h1 className="text-white text-center md:text-left text-3xl  md:text-5xl font-bold basis-3/4  ">
								We are a website & app development agency
							</h1>
							<div className="basis-1/4 w-full h-full flex mt-5 md:mt-0   md:items-center items-center justify-center">
								<button className="bg-gray-100 py-4 px-8 md:px-12 font-bold text-md text-primary-500 hover:bg-gray-300 rounded-full  ">
									Get in touch
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* Right Section */}
				<div className="hidden md:block basis-1/4 w-full h-full rounded-xl ">
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
