export default function BenResumePage() {
    return (
        <body className="homePageBody">
        <div>
            <div className="homePageHeader">
                <h1 className="homePageName">Ben Gallagher's ePortfolio</h1>

                <br/>
                <img src={"./APITEC1.jpeg"} alt={"AI generated images are already getting boring"} width="500" height="500"/>

            </div>
            <div className="paragraphHolderPortfolio">
                <p className="truncatedParagraph">My name is Ben Gallagher. I am a third year ITEC student at York University, and I am showcasing my writing skills that I learned in the AP-WRIT 2201 program, and showcasing some of the projects that I made in this program as well.</p>

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
        <div>
        </div>
        <h1 className="homePageProjects">Links</h1>
        <div className="projectHolder">
            <a href={"https://github.com/drwheats/"}>
                <div className="project">
                    <img className="projectImg" src="/gitcat.png"></img>
                    <div className="projectContainer">
                        <h4><b>GitHub</b></h4>
                        <p>This is my GitHub account. I mostly program in Javascript and in Python. Graphic design is my passion.</p>
                    </div>
                </div>
            </a>
            <a href={"https://www.ifixit.com/User/4387835/Ben+G"}>
                <div className="project">
                    <img className="projectImg" src="/ifixit-logo-png-transparent.png"></img>
                    <div className="projectContainer">
                        <h4><b>GitHub</b></h4>
                        <p>This is my iFixit account. I specialize in repair guides for old electronics and micromobility.</p>
                    </div>
                </div>
            </a>

        </div>

        </body>

    )
}