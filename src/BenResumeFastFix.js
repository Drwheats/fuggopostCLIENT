import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {Link} from "react-router-dom";
import React from "react";

export default function BenResumeFastFix() {
    // const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    //     useProSidebar();
    return (
        <body className="homePageBody">
        <div className="portfolioPage">

        <div className="sideBarStyles">

            <Sidebar className="sideBar">
                <Menu>
                    <MenuItem className="menu1" icon={<MenuRoundedIcon />} component={<Link to="/eportfolio" />}>
                        <h2> Ben G</h2>
                    </MenuItem>
                    <MenuItem icon={<GridViewRoundedIcon />} component={<Link to="/eportfolio" />}> Home </MenuItem>
                    <MenuItem icon={<ReceiptRoundedIcon />} component={<Link to="/eportfolio-reflections" />}>Reflections</MenuItem>
                    <SubMenu label="Projects" icon={<BarChartRoundedIcon />}>
                        <MenuItem icon={<TimelineRoundedIcon />} component={<Link to="/eportfolio-devicepage" />}> SEO Project </MenuItem>
                        <MenuItem icon={<BubbleChartRoundedIcon />} component={<Link to="/eportfolio-fastfix" />}>Fast Fix Project</MenuItem>
                        <MenuItem icon={<SavingsRoundedIcon />} component={<Link to="/eportfolio-eportfolio" />}>ePortfolio</MenuItem>
                    </SubMenu>
                    <SubMenu label="External Links" icon={<SettingsApplicationsRoundedIcon />}>
                        <a href="https://www.ifixit.com/User/4387835/Ben+G">
                            <MenuItem icon={<LogoutRoundedIcon />}> iFixit Profile Page </MenuItem>
                        </a>
                        <a href="https://www.ifixit.com/Guide/Unicool+Titan+T8+Battery+Removal-Replacement/167035">
                            <MenuItem icon={<LogoutRoundedIcon />} > iFixit Fast Fix Project </MenuItem>

                        </a>
                        <a href="https://www.ifixit.com/Device/Siemens_Servo_Screen_390">
                            <MenuItem icon={<LogoutRoundedIcon />}>
                                iFixit SEO Project
                            </MenuItem>
                        </a>
                        <a href="https://ben.place/eportfolio">
                            <MenuItem icon={<LogoutRoundedIcon />}> ePortfolio </MenuItem>

                        </a>

                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
        <div>

            <div className="homePageHeader">

                <h1 className="homePageName">Fast Fix Project</h1>
                <br/>
                <img className="portfolioPics1" src={"./T8electricscooter.jpg"} alt={"greenandbluescooter"} width="500" height="500"/>

            </div>
            <br />
            <h1 className="homePageProjects">What is the Fast Fix Project?</h1>

            <div className="paragraphHolderPortfolio">
                <p className="truncatedParagraph">The Fast Fix Project is meant to teach students how to complete a technical writing project, while also creating a high quality step-by-step repair guide on an electronic device. This program will help users repair their devices, keep broken things out of landfills, and teach students the basics on how to write a proposal, follow specifications, and finish a technical writing guide/repair manual.
                </p>
                <br />
                <a href="https://www.ifixit.com/Guide/Unicool+Titan+T8+Battery+Removal-Replacement/167035">
                    <img src={"./fastfixss1.png"} alt={"screenshot-device-page"} width="1000" height="500"/>
                </a>
                <br/>
                <br />
                <h1 className="homePageProjects">Stages of the Fast Fix Project:</h1>
                <h3 className="smallTitle">The Research Stage:</h3>
                <p className="truncatedParagraph">
                    While no Googling or online research/reading is required, iFixit has a very stringent set of guidelines that all Fast Fix projects must follow. iFixit has a lot of example projects that I used as a template, and guidelines that I used to evaluate my project while I was writing it and after I had performed some of the steps.
                </p>
                <br />
                <p className="truncatedParagraph"> A lot of iFixit's guidelines would help students become a better technical writer in general - for example, iFixit requires every step to be written in the active voice ("remove the screw" rather than "the screws can be removed") and to avoid repetitive sentences like "now that you have removed all of the screws", so that every step is straightforward and to the point.
                </p>
                <br />
                <p className="truncatedParagraph"> I found iFixit's guidelines on technical writing very helpful, and after I edited my guide to follow them, my guide seemed to flow vey naturally, and it's readability was highly improved.</p>
                <br />
                <h3 className="smallTitle">The Proposal Stage:</h3>
                <p className="truncatedParagraph"> iFixit has very strict guidelines on how a project proposal must be structured - they want an explanation on why this guide is needed, and how it will help other users. They wanted a general outline of the tools and steps that will be required in this repair guide, and what you will be repairing on the device. </p>
                <p className="truncatedParagraph"> I followed iFixit's guidelines while writing my proposal, and submitted it to the iFixit technical writing team. </p>
                <br/>
                <h3 className="smallTitle">Photography and Writing:</h3>
                <p className="truncatedParagraph"> The main 2 components of this guide were taking high quality, descriptive pictures, and matching the pictures to a written guide explaining each step of the process in repairing the device.</p>
                <p className="truncatedParagraph"> I wrote the steps out first from memory, while visualizing my device in my mind, and then I went and took pictures while I dissassembled my scooter. As there are 12 different steps in my guide, I needed to take tons of pictures, and as my device is very physically large, I needed to take pictures from many different angles so that the reader was always oriented properly (I couldn't jump from the deck of the scooter to the stem, for example - the pictures needed to show the reader where they were supposed to be - with some pictures in between showing me rotating the device).    </p>
                <br/>

                <div className="hold2images">
                        <img src="./fastfixwriting1.png" height="300" width="300" alt="fastfixwriting"/>
                    <img src="./fastfiximage1.jpg" height="400" width="700" alt="dissassembledscooter1"/>

                </div>

                <br/>
                <h3 className="smallTitle">User Testing and Feedback:</h3>
                <p className="truncatedParagraph"> We used Kritik.io to get feedback from our peers. I found it very helpful to get feedback from people who have never seen the device that I was working on - some of my classmates found my pictures to be disorienting, and my guide to be missing information. I used my peers feedback to make the guide more user-friendly, and iFixit also provided feedback to help my guide be in line with their specifications and standards.</p>
                <br />
                <h1 className="homePageProjects">Reflections:</h1>
                <br />
                <p className="truncatedParagraph"> I found the iFixit Fast Fix project to be an excellent way to practice technical writing, writing for a certain audience, and using feedback to improve a written article. Although I am quite skilled in repairing electronics, I have never written out a repair guide, or documented a process to make it replicable to other people. I found the hardest part of the guide to be taking appropriate pictures that properly showed the steps of the guide, and I ended up needing to take many repeat pictures as they lacked context or were zoomed in too much.</p>
                <br/>
                <p className="truncatedParagraph">I would single out the user feedback portion of the project as being particularly helpful in developing my technical writing skills - I found it very illuminating to see if 5 random classmates could follow my guide, as they had likely never taken apart an electric scooter before. The changes I made based on my peers feedback and iFixit's guidelines made the guide much more readable, and is a solid foundation on learning how to document a process so that anyone can follow it, regardless of their skill level or current knowledge of the process.</p>
                <br/>
                <p className="truncatedParagraph">This project was definitely less research based than the others, and more focused on writing and then editing based on feedback, but I still found it helpful to read other successful fast fix projects and implement the same tactics and formatting that they used. This project made me better at communicating my ideas in a simple and readable way, and helped me to take a complicated idea and learn to simplify it, while also formatting it based on iFixit's guidelines.</p>
                <br/>


                <p>
                <img src="./fastfixss2.png" height="500" width="1000" alt="numberonesearchresult"/>
                    a step from my fast fix repair guide
                </p>

            </div>

            <Link to={"/eportfolio-eportfolio"}>
                <img src="./nextArrow.png" alt="next arrow" height="250" width="250"/>
            </Link>
        </div>
        <div>
        </div>

        </div>

        </body>

    )
}