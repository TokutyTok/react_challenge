import Home from '../src/pages/Home'
import ButtonClickChangeColor from '../src/pages/ButtonClickChangeColor'
import ValueDisplayEntered from '../src/pages/ValueDisplayEntered'
import Counter from '../src/pages/Counter'
import ShowList from '../src/pages/ShowList'
import GoodButton from '../src/pages/GoodButton'
import ChangeTabs from '../src/pages/ChangeTabs'
import Api from '../src/pages/Api'
import SearchBar from './pages/SearchBar'

const linkList = {
	'/ButtonClickChangeColor': 'ボタンを押下したら文字の色が切り替わる',
	'/ValueDisplayEntered': '入力フィールドからの値を表示する',
	'/Counter': 'カウントアップするボタン',
	'/ShowList': 'リストを受け取って表示する',
	'/GoodButton': 'Goodボタン',
	'/ChangeTabs': 'タブを切り替える',
	'/Api': 'APIからデータ取得',
	'/SearchBar': '検索バー',
}

const routeList = {
	'/': <Home />,
	'/ButtonClickChangeColor': <ButtonClickChangeColor />,
	'/ValueDisplayEntered': <ValueDisplayEntered />,
	'/Counter': <Counter />,
	'/ShowList': <ShowList />,
	'/GoodButton': <GoodButton />,
	'/ChangeTabs': <ChangeTabs />,
	'/Api': <Api />,
	'/SearchBar': <SearchBar />,
}

export { linkList, routeList }
