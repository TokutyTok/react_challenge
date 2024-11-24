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
                    <Link to="/buttonClickChangeColor">ButtonClickChangeColor</Link>
                </li>
            </nav>
        </body>
      </>
    )
} 