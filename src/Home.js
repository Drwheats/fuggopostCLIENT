export default function Home() {
    return (
        <div className="homePageBody">
            <div>

                <div className="homePageHeader">
                    <h1 className="homePageTitle">Welcome to Ben Dot Place</h1>
                    <p></p>
                    <br/>
                    <p>I host all of my completed apps on this website. </p>

                </div>
                <h1 className="homePageProjects">Projects</h1>
                <div className="projectHolder">
                    <div className="project">
                        <a href={"/b"}>

                            <img className="projectImg" src="/homeicon.png" alt="boardLogo"></img>
                            <div className="projectContainer">
                                <h4><b>React Imageboard</b></h4>
                                <p>A modern imageboard written in React. Styled after the infamous 4chan, except 70%
                                    less toxic. Uses my API/API server to serve posts.</p>
                            </div>
                        </a>

                    </div>


                    <div className="project">
                        <a href={"/mons"}>

                            <img className="projectImg" alt="monslogo" src="/amoguscircle.png"></img>
                            <div className="projectContainer">
                                <h4><b>Pokemon Draft League Helper</b></h4>
                                <p>A front end for the Pokemon league that I play in. Contains a few tools to help
                                    Pokemon coaches. Uses a Google Docs sheet as a database. A lot of information comes
                                    from pokeAPI. (https://pokeapi.co/)</p>
                            </div>
                        </a>

                    </div>
                    <div className="project">
                        <a href={"/calendar"}>

                            <img className="projectImg" alt="cameraLogo" src="/cameraicon.png"></img>
                            <div className="projectContainer">
                                <h4><b>Local Theatre Calendar</b></h4>
                                <p>A calendar that shows what's playing in a variety of local Toronto theatres. The data
                                    comes from a scraper that I made and is hosted on my API server. Non-monthly view
                                    coming soon.</p>
                            </div>
                        </a>

                    </div>

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
            <h5 className="copyrightMons">Copyright
                ©2024 ben dot place </h5>
        </div>

    )
}