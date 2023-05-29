import Image from 'next/image'
import calc from '@public/assets/calc.png'

const Testimonials = () => {
	return (
		<section className="gap-16  md:py-10 md:h-[60vh]  mt-0 md:my-20 my-10 p-10  ">
			<div className="md:mx-auto md:w-3/6 flex flex-col md:h-full gap-5">
				<div className="gap-5">
					<p className="uppercase py-5 text-gray-500 font-bold text-xs md:text-sm">
						Testimonials
					</p>
					<h3 className=" text-3xl sm:text-4xl font-black text-gray-900 ">
						What they say about Us
					</h3>
				</div>
				<div className="flex gap-5 flex-col md:flex-row  ">
					<div className="flex basis-2/3 flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 border border-1 border-gray-200 p-10  rounded-2xl ">
						<figure className="mt-10 flex flex-auto flex-col justify-between">
							<blockquote className=" text-sm sm:text-lg leading-8 text-gray-900">
								<p>
									“Amet amet eget scelerisque tellus sit neque faucibus non
									eleifend. Integer eu praesent at a. Ornare arcu gravida
									natoque erat et cursus tortor consequat at. Vulputate gravida
									sociis enim nullam ultricies habitant malesuada lorem ac.
									Tincidunt urna dui pellentesque sagittis.”
								</p>
							</blockquote>
							<figcaption className="mt-10 flex items-center gap-x-6">
								<img
									className="h-14 w-14 rounded-full bg-gray-50"
									src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
								<div className="text-base">
									<div className="font-semibold text-gray-900">
										Judith Black
									</div>
									<div className="mt-1 text-gray-500">CEO of Tuple</div>
								</div>
							</figcaption>
						</figure>
					</div>
					<div className="bg-primary-500 p-10 gap-10 rounded-xl flex justify-between items-center flex-col basis-1/3 w-full md:w-[60px] ">
						<Image src={calc} alt="calc" className="h-42 w-42" />
						<h4 className="text-white text-2xl font-bold text-center">
							Want to estimate you project?
						</h4>
						<button className="py-4 px-8 bg-white text-gray-900 rounded-full font-bold">
							Project estimation
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
