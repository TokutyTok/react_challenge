import '../App.css'
import { Link } from 'react-router-dom'

import Button from '../ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import BasicModal from '../modal/BasicModal'

import { useState } from 'react'

export default function ModalWindow() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
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
					<Button name={<FontAwesomeIcon style={{ color: 'red' }} icon={faPlayCircle} />} onClickEvent={handleOpen} />
					<BasicModal open={open} onClose={handleClose} />
				</div>
				<footer></footer>
			</div>
		</>
	)
}
