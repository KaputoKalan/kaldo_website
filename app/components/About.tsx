import React from 'react'

const stats = [
	{ id: 1, name: 'Operated Years', value: '2' },
	{ id: 2, name: 'Happy Clients', value: '50+' },
	{ id: 3, name: 'Professionals', value: '10+' },
	{ id: 4, name: 'Amazing Projects', value: '20+' },
]

const About = () => {
	return (
		<section id="about" className="gap-16  md:py-10 md:h-full  mt-0 md:mt-20 ">
			<div className="md:mx-auto md:w-5/6 flex md:h-full gap-5">
				{/* left */}
				<div className="basis-1/2">
					<div className="flex flex-col   gap-4 w-[500px] ">
						<p className="uppercase py-5 text-gray-500 font-bold text-xs md:text-sm">
							{' '}
							About us
						</p>
						<h3 className="text-4xl font-black text-gray-900 ">
							The team will turn your ideas into reality
						</h3>
						<p className="md:text-sm text-xs">
							We feel that in this digital age, connect is required to develop a
							successful corporate empire. Having user-focused websites or
							mobile applications that are simple to use and can increase your
							market competitiveness
						</p>
					</div>
					<button className=" py-2 px-6 font-bold text-primary-500 bg-primary-100 rounded-full mt-5 ">
						More about us
					</button>
					<div className="border border-1 border-gray-200 rounded-2xl mt-16 flex items-center justify-center w-[400px] p-10 ">
						<dl className=" grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2 ">
							{stats.map((stat) => (
								<div
									key={stat.id}
									className="flex flex-col gap-y-3 text-center">
									<dt className="text-sm leading-6 text-gray-300">
										{stat.name}
									</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				{/* right */}
				<div className="basis-1/2 content-about rounded-2xl h-[80vh] w-full shadow " />
			</div>
		</section>
	)
}

export default About
