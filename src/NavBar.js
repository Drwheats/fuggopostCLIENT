import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {ImHome, ImQuestion, ImUser} from "react-icons/im"


export default function NavBar() {


    return (
        <nav className="nav">
            <Link to="/home" className="site-title">Ben.place</Link>
            <ul>
                <CustomLink to="/home"><ImHome/></CustomLink>
                <CustomLink to="/about"><ImQuestion/></CustomLink>
                <CustomLink to="/Login"><ImUser/></CustomLink>
                {/*<CustomLink to="/scores">HighScores</CustomLink>*/}
            </ul>
        </nav>)
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>

        </li>
    )
}

