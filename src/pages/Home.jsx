import { Link } from "react-router-dom";

export default function Home() {
    return(
      <>
        <head>
            <title>Home</title>
        </head>
        <body>
            <nav className="App-liststyle-none">
                <li>
                    <Link to="/ButtonClickChangeColor">ボタンを押下したら文字の色が切り替わる</Link>
                </li>
                <li>
                    <Link to="/ValueDisplayEntered">入力フィールドからの値を表示する</Link>
                </li>
                <li>
                    <Link to="/Counter">カウントアップするボタン</Link>
                </li>
            </nav>
        </body>
      </>
    )
} 