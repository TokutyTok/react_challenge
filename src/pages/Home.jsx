import { Link } from "react-router-dom";
import { linkList } from "../Transition";

export default function Home() {
    return(
      <>
        <title>Home</title>
        <div>
            <nav className="App-liststyle-none">
                <ul>
                    {Object.entries(linkList).map(([key, value]) => (
                        <li key={key}>
                            <Link to={key}>{value}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
      </>
    )
} 