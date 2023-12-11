import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import React from "react";
import { Link } from 'react-router-dom';

export default function BenResumePage() {
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
                    <MenuItem icon={<ReceiptRoundedIcon />}> About </MenuItem>
                    <SubMenu label="Projects" icon={<BarChartRoundedIcon />}>
                        <MenuItem icon={<TimelineRoundedIcon />} component={<Link to="/eportfolio-devicepage" />}> SEO Project </MenuItem>
                        <MenuItem icon={<BubbleChartRoundedIcon />} component={<Link to="/eportfolio-fastfix" />}>Fast Fix Project</MenuItem>
                        <MenuItem icon={<AccountBalanceRoundedIcon />} component={<Link to="/eportfolio-reflections" />}>Reflections</MenuItem>
                        <MenuItem icon={<SavingsRoundedIcon />} component={<Link to="/eportfolio-eportfolio" />}>ePortfolio</MenuItem>

                    </SubMenu>
                    <SubMenu label="External Links" icon={<SettingsApplicationsRoundedIcon />}>
                        <a href="https://www.ifixit.com/User/4387835/Ben+G">
                            <MenuItem icon={<LogoutRoundedIcon />}> iFixit Profile Page </MenuItem>
                        </a>
                        <a href="">
                            <MenuItem icon={<LogoutRoundedIcon />} > iFixit Fast Fix Project </MenuItem>

                        </a>
                        <a href="https://www.ifixit.com/Device/Siemens_Servo_Screen_390">
                        <MenuItem icon={<LogoutRoundedIcon />}>
                            iFixit SEO Project
                        </MenuItem>
                        </a>
                        <a href="ben.place/eportfolio">
                            <MenuItem icon={<LogoutRoundedIcon />}> ePortfolio </MenuItem>

                        </a>

                    </SubMenu>
                </Menu>
            </Sidebar>
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
                <p>AP ITEC 2201 helped me to think more about what I am writing; What points am I trying to get across? Who is my intended audience? Am I writing just to fill empty space on the page? For many of the projects in this course, we had strict guidelines that needed to be followed. This included formatting guidelines, ways of writing, how to address our intended audience, and even what voice to use while writing. </p>
                <br/>
                <p>This course also taught me research skills - what type of information do I need for this project? Is the source credible, authoritative and relevant? </p>
                <br/>
                <p>However, today we live in an evidence-based society - and me saying that I learned something from this course does not necessarily prove it. Therefore, I will give examples of how I improved at researching and writing, and I will highlight some research and writing projects that I have successfully completed.</p>

            </div>
            <div className="paragraphHolderPortfolio">
                <h1 className="homePageProjects">Projects</h1>
            </div>
            <div className="projectHolder">
                <a href={"/eportfolio-fastfix"}>
                    <div className="project">
                        <img className="projectImg" src="./T8electricscooter.jpg"></img>
                        <div className="projectContainer">
                            <h4><b>iFixit Fast Fix Project</b></h4>
                            <p>My iFixit fast fix project. An iFixit repair guide documenting how to replace the battery in a titan T8 electric scooter. </p>
                        </div>
                    </div>
                </a>
                <a href={"/eportfolio-devicepage"}>
                    <div className="project">
                        <img className="projectImg" src="./phillips390image.jpg"></img>
                        <div className="projectContainer">
                            <h4><b>Device Page Project</b></h4>
                            <p>My iFixit device page profile. A page on iFixit documenting information on the Phillips Servo Screen 390. </p>
                        </div>
                    </div>
                </a>

            </div>
            <div className="projectHolder">
                <a href={"/eportfolio-reflections"}>
                    <div className="project">
                        <img className="projectImg" src="./Reflections2201.jpg"></img>
                        <div className="projectContainer">
                            <h4><b>Reflections</b></h4>
                            <p>Reflections on the WRIT2201 course - the skills that it's taught me, and what I've learned. </p>
                        </div>
                    </div>
                </a>
                <a href={"/eportfolio-eportfolio"}>
                    <div className="project">
                        <img className="projectImg" src="./APITEC1.jpeg"></img>
                        <div className="projectContainer">
                            <h4><b>ePortfolio Page</b></h4>
                            <p>The ePortfolio page, showing off all of the projects and achievements from the WRIT 2201 course. </p>
                        </div>
                    </div>
                </a>

            </div>

        </div>
        <div>
        </div>

        </div>

        </body>

    )
}