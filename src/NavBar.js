import {Link, useMatch, useResolvedPath} from "react-router-dom";


export default function NavigationBar() {


    return (
        <nav className="nav">
            <Link to="/home" className="site-title"><img className="logoBen" src={"/bendotplace.png"} /> </Link>
            <ul className="navIconHolder">
                <CustomLink to="/b"><img className="navIcon" src="/homeicon.png" /> </CustomLink>
                <CustomLink to="/Mons"><img className="navIcon" src="/squamogus.png" /></CustomLink>

                <CustomLink to="/about"><img className="navIcon" src="/questionmark.png" /> </CustomLink>
                <CustomLink to="/Login"><img className="navIcon" src="/manicon.png" /> </CustomLink>
                <a href={"https://github.com/drwheats/" }><img className="navIcon" src="/gitcat.png" /> </a>

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

