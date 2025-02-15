import '../App.css'
import Contents from '../template/Contents'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { useState } from 'react'

export default function ButtonAnimation() {
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
					<Stack spacing={2} direction='row'>
						<Button variant='text'>Text</Button>
						<Button variant='contained'>Contained</Button>
						<Button variant='outlined'>Outlined</Button>
					</Stack>
				</div>
				<footer></footer>
			</div>
		</>
	)
}
