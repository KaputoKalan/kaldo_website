'use client'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
// import Logo from "../assets/Dorset-Capital-Logo.png";
import NavLink from './NavLink'
import useMediaQuery from '@/app/hooks/useMediaQuery'
import Link from 'next/link'

type Props = {
	selectedPage: SelectedPage
	setSelectedPage: (value: SelectedPage) => void
	isTopOfPage: boolean
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
	const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4 `}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* Left Side */}
						{/* <Image src={Logo} height={100} width={100} alt="Dorset Logo" /> */}
						<h1>Kaldo Tech</h1>
						{/* Right Side */}
						{isAboveMediumScreens ? (
							<div className={`flex w-full items-center justify-end `}>
								<div
									className={`${flexBetween}  justify-start mr-60 gap-10 text-sm`}>
									<NavLink
										page="Home"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<NavLink
										page="Work"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<NavLink
										page="Services"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<NavLink
										page="About"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<NavLink
										page="Contact"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div>
									<button className="bg-gray-100 py-2 px-6 font-bold text-blue-500 hover:bg-gray-300 rounded-full ">
										Project estimation
									</button>
								</div>
							</div>
						) : (
							<div>
								<button
									className="rounded-full bg-primary-500 p-2"
									onClick={() => setIsMenuToggled(!isMenuToggled)}>
									<Bars3Icon className="h-6 w-6 text-white" />
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			{!isAboveMediumScreens && isMenuToggled && (
				<div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ">
					{/* CLOSE ICON */}
					<div className="flex justify-end p-12">
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</button>
					</div>
					{/* MENU ITEMS */}
					<div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
						<NavLink
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<NavLink
							page="Work"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<NavLink
							page="Services"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<NavLink
							page="About"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<NavLink
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
