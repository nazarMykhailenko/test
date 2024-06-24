import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProductPage } from './pages/ProductPage'
import './App.scss'

export const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/products/:id' element={<ProductPage />} />
			</Routes>
			<Footer />
		</div>
	)
}
