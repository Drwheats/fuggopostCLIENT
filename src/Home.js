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
                <a href={"/b"}>
                <div className="project">
                        <img className="projectImg" src="/homeicon.png" alt="boardLogo"></img>
                        <div className="projectContainer">
                            <h4><b>React Imageboard</b></h4>
                            <p>A modern imageboard written in React. Styled after the infamous 4chan, except 70% less toxic. Uses my API/API server to serve posts.</p>
                        </div>
                    </div>
                </a>

                {/*<a href={"https://www.ben.place/bomgl"}>*/}
                {/*    <div className="project">*/}
                {/*        <img className="projectImg" src="/questionmark.png" alt="questionmarklogo"></img>*/}
                {/*        <div className="projectContainer">*/}
                {/*            <h4><b>bomgl</b></h4>*/}
                {/*            <p>cool video chat to meet cool teens</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</a>*/}

                <a href={"/mons"}>
                    <div className="project">
                        <img className="projectImg" alt="monslogo" src="/amoguscircle.png"></img>
                        <div className="projectContainer">
                            <h4><b>Pokemon Draft League Helper</b></h4>
                            <p>A database of the Pokemon league that I play in. Contains a few tools to help Pokemon coaches such as a matchup tool. Uses a Google Docs sheet as a database. A lot of information comes from pokeAPI. (https://pokeapi.co/)</p>
                        </div>
                    </div>
                    </a>
                <a href={"/calendar"}>
                    <div className="project">
                        <img className="projectImg" alt="cameraLogo" src="/cameraicon.png"></img>
                        <div className="projectContainer">
                            <h4><b>Local Theatre Calendar</b></h4>
                            <p>A calendar that shows what's playing in a variety of local Toronto theatres. The data comes from a scraper that I made and on my API server. </p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
        <h1 className="homePageProjects">Links</h1>
        <div className="projectHolder">
            <a href={"https://github.com/drwheats/"}>
                <div className="project">
                    <img className="projectImg" alt="githubcatlogo" src="/gitcat.png"></img>
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