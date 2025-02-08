import '../App.css'
import Contents from '../template/Contents'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceTired } from '@fortawesome/free-regular-svg-icons'

import useGoodCounter from '../customHook/CustomHook'

export default function CustomHook() {
	const [count, { incrementCount, decrementCount }] = useGoodCounter()
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
					<div className='Custom-hook-flex'>
						<Button name={<FontAwesomeIcon style={{ color: 'blue' }} icon={faFaceSmile} />} onClickEvent={incrementCount} />
						<Button name={<FontAwesomeIcon style={{ color: 'red' }} icon={faFaceTired} />} onClickEvent={decrementCount} />
					</div>
					<Contents message={count} />
				</div>
				<footer></footer>
			</div>
		</>
	)
}
