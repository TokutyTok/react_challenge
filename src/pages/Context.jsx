import '../App.css'
import Contents from '../template/Contents'
import { Link } from 'react-router-dom'

import { useState, useContext } from 'react'
import { ColorContext } from '../index'

export default function Context() {
	const [message, setMessage] = useState('message')
	const colors = useContext(ColorContext)
	return (
		<>
			<div className='App'>
				<header>
					<nav className='App-liststyle-none'>
						<li>
							<Link to='/'>Home</Link>
						</li>
					</nav>
				</header>
				<div className='App-header'>
					<Contents message={colors.red} />
				</div>
				<footer></footer>
			</div>
		</>
	)
}
