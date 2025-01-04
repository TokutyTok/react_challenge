import '../App.css'
import Contents from '../template/Contents'
import { Link } from 'react-router-dom'

import { useState } from 'react'

export default function ValueDisplayEntered() {
	const [message, setMessage] = useState('message')
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
					<Contents message={message} />
				</div>
				<footer></footer>
			</div>
		</>
	)
}
