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
                    <Link to="/ButtonClickChangeColor">ButtonClickChangeColor</Link>
                </li>
                <li>
                    <Link to="/ValueDisplayEntered">ValueDisplayEntered</Link>
                </li>
            </nav>
        </body>
      </>
    )
} 