import '../App.css'
import Contents from '../template/Contents'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Api() {
	const [message, setMessage] = useState()

	useEffect(() => {
		axios
			.get('https://www.googleapis.com/books/v1/volumes?q=夏目漱石')
			.then((response) => {
				let str = ''
				response.data.items.map((item) => {
					console.log(item.volumeInfo)
					str += `title:${item.volumeInfo.title}\ndescription:${item.volumeInfo.description}\n\n`
				})
				setMessage(str)
			})
			.catch((error) => {
				console.error('リクエストエラー:', error)
			})
	}, [])

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
