export default function BenResumePage() {

    function w3_open() {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }

    function w3_close() {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
}
    return (
        <body className="homePageBody">
        <div className="w3-sidebar w3-bar-block">
            <a href="#" className="w3-bar-item w3-button">Link 1</a>
            <a href="#" className="w3-bar-item w3-button">Link 2</a>
            <a href="#" className="w3-bar-item w3-button">Link 3</a>
        </div>

        <div>
            ... page content ...
        </div>
        <div>

            <div className="homePageHeader">
                <h1 className="homePageName">Ben Gallagher's ePortfolio</h1>

                <br/>
                <img className="portfolioPics1" src={"./APITEC1.jpeg"} alt={"AI generated images are already getting boring"} width="500" height="500"/>

            </div>
            <h1 className="homePageProjects">About</h1>

            <div className="paragraphHolderPortfolio">
                <p className="truncatedParagraph">My name is Ben Gallagher. I am a third year ITEC student at York University, and I am showcasing my writing skills that I learned in the AP-WRIT 2201 program, and showcasing some of the projects that I made in this program as well.</p>
            </div>
            <h1 className="homePageProjects">Summary</h1>

            <div className="paragraphHolderPortfolio">
                <p>AP ITEC 2201 helped me to think more about what I am writing; What points am I trying to get across? Who is my intended audience? Am I writing just to fill empty space on the page?</p>
                <br/>
                <p>However, today we live in an evidence-based society - and me saying that I learned something from this course does not necessarily prove it. Therefore, I will give examples of how I improved at writing, and I will highlight some writing projects that I have successfully completed.</p>

            </div>
            <div className="paragraphHolderPortfolio">
                <h1 className="homePageProjects">Projects</h1>
            </div>
            <div className="projectHolder">
                <a href={"https://github.com/drwheats/"}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>One</b></h4>
                            <p>This is project number 1 - and these are the writing skills that it exhibits.</p>
                        </div>
                    </div>
                </a>
                <a href={"https://www.ifixit.com/User/4387835/Ben+G"}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>Two</b></h4>
                            <p>This is project number two, along with the skills that I learned from <it className=""></it></p>
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
                        <h4><b>iFixit</b></h4>
                        <p>This is my iFixit account. I specialize in repair guides for old electronics and micromobility.</p>
                    </div>
                </div>
            </a>

        </div>

        </body>

    )
}