import '../App.css'
import Input from '../ui/Input'
import Contents from '../template/Contents'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useState } from 'react'

export default function SearchBar() {
	const [message, setMessage] = useState('')
	const [searchWord, setSearchWord] = useState('')
	const bookData = [
		{ title: '攻略本A', price: 1000 },
		{ title: '攻略本B', price: 900 },
		{ title: '攻略本C', price: 800 },
	]

	const searchBook = (e) => {
		if (e.target.value === '') {
			setMessage('該当なし')
			setSearchWord('')
			return
		}
		const regex = new RegExp(`${e.target.value}`)
		let filterSearcWord = bookData.filter((book) => (regex.test(book.title) ? book : ''))
		let filterDisplayMessage = filterSearcWord.map((book) => `${book.title} : ${book.price}`)
		filterDisplayMessage.length > 0 ? setMessage(filterDisplayMessage.join(',')) : setMessage('該当なし')
		setSearchWord(e.target.value)
		// Api取得の場合
		// setSearchWord(e.target.value)
		// axios
		// 	.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
		// 	.then((response) => {
		// 		console.log(response.data.totalItems)
		// 		setMessage(response.data.totalItems)
		// 	})
		// 	.catch((error) => {
		// 		console.error('リクエストエラー:', error)
		// 	})
	}

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
					<Input value={searchWord} onChangeEvent={searchBook} />
					<Contents message={message} />
				</div>
				<footer></footer>
			</div>
		</>
	)
}
