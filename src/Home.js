export default function Home() {
    return (
        <div className="homePageBody">
        <div>

            <div className="homePageHeader">
                <h1 className="homePageTitle">Welcome to Ben Dot Place</h1>
                <p></p>
                <br/>
                <p>I host all of my completed apps on this website.  </p>

            </div>
            <h1 className="homePageProjects">Projects</h1>
            <div className="projectHolder">
                <a href={"https://www.ben.place/b"}>
                <div className="project">
                        <img className="projectImg" src="/board.png" alt="boardLogo"></img>
                        <div className="projectContainer">
                            <h4><b>React Imageboard</b></h4>
                            <p>A modern imageboard written in React. Styled after the infamous 4chan, except 70% less toxic. Uses my fuggo.lol API as a backend to serve posts.</p>
                        </div>
                    </div>
                </a>

                <a href={"https://www.ben.place/bomgl"}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png" alt="questionmarklogo"></img>
                        <div className="projectContainer">
                            <h4><b>bomgl</b></h4>
                            <p>cool video chat to meet cool teens</p>
                        </div>
                    </div>
                </a>

                <a href={"https://www.ben.place/mons"}>
                    <div className="project">
                        <img className="projectImg" alt="monslogo" src="/mons.png"></img>
                        <div className="projectContainer">
                            <h4><b>Pokemon Draft League Helper</b></h4>
                            <p>A database of the Pokemon league that I play in. Contains a few tools to help Pokemon coaches such as a matchup tool. Uses my fuggo.lol API as a backend, with a Google Docs sheet as a database. Some of the tools use the very excellent pokeAPI. (https://pokeapi.co/)</p>
                        </div>
                    </div>
                    </a>
                <a href={"https://www.ben.place/calendar"}>
                    <div className="project">
                        <img className="projectImg" alt="questionmarklogo" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>Local Theatre Calendar</b></h4>
                            <p>A calendar that shows what's playing in a variety of local Toronto theatres. The data comes from a scraper that I made and host at fuggo.lol. </p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
        <h1 className="homePageProjects">Links</h1>
        <div className="projectHolder">
            <a href={"https://github.com/drwheats/"}>
                <div className="project">
                    <img className="projectImg" src="/gitcat.png"></img>
                    <div className="projectContainer">
                        <h4><b>GitHub</b></h4>
                        <p>This is my GitHub account. </p>
                    </div>
                </div>
            </a>

        </div>
        </div>

    )
}