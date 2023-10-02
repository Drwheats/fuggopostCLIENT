import boardPNG from "./board.png";
import monsPNG from "./mons.png"
export default function Home() {
    return (
        <body className="homePageBody">


        <div>

            <div className="homePageHeader">
                <h1 className="homePageName">Ben</h1>
                <h2 className="homePageTitle">Fullstack Web Developer</h2>
                <p>Welcome to Ben's portfolio page.</p>
                <br/>
                <p>All of these projects are hosted on a Vercel instance, and my API server is run in a Google Cloud VM. </p>

            </div>
            <h1 className="homePageProjects">Projects</h1>

            <div className="projectHolder">
                <a href={"https://www.ben.place/b"}>

                <div className="project">

                        <img className="projectImg" src={boardPNG}></img>
                        <div className="projectContainer">
                            <h4><b>React Imageboard</b></h4>
                            <p>A modern imageboard written in React. Styled after the infamous 4chan, except 70% less toxic. Uses my fuggo.lol API as a backend to serve posts.</p>
                        </div>
                    </div>
                </a>

                <a href={"https://www.ben.place/mons"}>
                    <div className="project">
                        <img className="projectImg" src={monsPNG}></img>
                        <div className="projectContainer">
                            <h4><b>Pokemon Draft League Helper</b></h4>
                            <p>A database of the Pokemon league that I play in. Contains a few tools to help Pokemon coaches such as a matchup tool. Uses my fuggo.lol API as a backend, with a Google Docs sheet as a database. Some of the tools use the very excellent pokeAPI. (https://pokeapi.co/)</p>
                        </div>
                    </div>
                    </a>
                <a href={"https://www.ben.place/calendar"}>
                    <div className="project">
                        <img className="projectImg" src={monsPNG}></img>
                        <div className="projectContainer">
                            <h4><b>Local Theatre Calendar</b></h4>
                            <p>A calendar that shows what's playing in a variety of local Toronto theatres. The data comes from a scraper that I made and host at fuggo.lol. </p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
        </body>
    )
}