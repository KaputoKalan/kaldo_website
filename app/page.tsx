'use client'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

export default function Home() {
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		'Home' as SelectedPage,
	)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true)
				setSelectedPage('Home' as SelectedPage)
			}
			if (window.scrollY !== 0) {
				setIsTopOfPage(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<main className="app">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Hero />
			<Work />
			<Services />
			<About />
			<Testimonials />
			<Contact />
		</main>
	)
}
