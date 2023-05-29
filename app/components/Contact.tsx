import React from 'react'
import Footer from './Footer'

const Contact = () => {
	return (
		<section
			id="contact"
			className="gap-16  md:py-10 md:h-full bg-black text-white   mt-0 md:mt-20 ">
			<div className="mx-auto py-20 w-5/6  flex flex-col items-center justify-centerl">
				<p className="uppercase py-5 text-gray-500 font-bold text-xs md:text-sm">
					Contact Us
				</p>
				<h2 className="font-black  text-3xl sm:text-5xl text-center">
					You've got this far. <br /> Ready to get Started?
				</h2>
				<button className="py-4 px-8 mt-10 bg-primary-500 rounded-full">
					Get in touch
				</button>
			</div>
			<Footer />
		</section>
	)
}

export default Contact
