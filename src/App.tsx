import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './App.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='*' element={<HomePage />} />
			</Routes>
			<Footer />
		</div>
	)
}
