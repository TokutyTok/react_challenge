import Home from '../src/pages/Home'
import ButtonClickChangeColor from '../src/pages/ButtonClickChangeColor'
import ValueDisplayEntered from '../src/pages/ValueDisplayEntered'
import Counter from '../src/pages/Counter'
import ShowList from '../src/pages/ShowList'

const linkList = {
    "/ButtonClickChangeColor":"ボタンを押下したら文字の色が切り替わる",
    "/ValueDisplayEntered":"入力フィールドからの値を表示する",
    "/Counter":"カウントアップするボタン",
    "/ShowList":"リストを受け取って表示する"
}

const routeList = {
    "/":<Home/>,
    "/ButtonClickChangeColor":<ButtonClickChangeColor/>,
    "/ValueDisplayEntered":<ValueDisplayEntered/>,
    "/Counter":<Counter/>,
    "/ShowList":<ShowList/>
}

export { linkList, routeList };
