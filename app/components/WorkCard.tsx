import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import laptop from '@public/assets/laptop.png'

const WorkCard = () => {
	return (
		<div className="max-h-[500px] mt-20">
			<Image
				className=" object-cover rounded-2xl w-[300px] h-[200px] md:w-[600px] md:h-[400px]"
				src={laptop}
				alt="laptop"
			/>
			<div className="flex justify-between pt-8 items-center w-[300px] md:w-[600px]">
				<div>
					<h3 className=" text-xl md:text-2xl font-bold">
						Dorset Capital Limited
					</h3>
					<p className="text-lg">Website development</p>
				</div>
				<button className="rounded-full border border-1 border-gray-400 bg-gray-100 p-4">
					<ArrowRightIcon className="h-4 w-4 text-gray-900" />
				</button>
			</div>
		</div>
	)
}

export default WorkCard
