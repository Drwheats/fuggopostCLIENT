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

export default function BenResumePage() {
    // const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    //     useProSidebar();
    return (
        <body className="homePageBody">
        <div className="portfolioPage">

        <div className="sideBarStyles">

            <Sidebar className="sideBar">
                <Menu>
                    <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
                        <h2> Ben G</h2>
                    </MenuItem>
                    <MenuItem icon={<GridViewRoundedIcon />}> Home </MenuItem>
                    <MenuItem icon={<ReceiptRoundedIcon />}> About </MenuItem>
                    <SubMenu label="Projects" icon={<BarChartRoundedIcon />}>
                        <MenuItem icon={<TimelineRoundedIcon />}> Writing Project </MenuItem>
                        <MenuItem icon={<BubbleChartRoundedIcon />}>iFixit Project</MenuItem>
                    </SubMenu>
                    <SubMenu label="Skills" icon={<WalletRoundedIcon />}>
                        <MenuItem icon={<AccountBalanceRoundedIcon />}>
                            More Skills
                        </MenuItem>
                        <MenuItem icon={<SavingsRoundedIcon />}>Skills</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<MonetizationOnRoundedIcon />}>Bibliography</MenuItem>
                    <SubMenu label="Sources" icon={<SettingsApplicationsRoundedIcon />}>
                        <MenuItem icon={<AccountCircleRoundedIcon />}> Ben </MenuItem>
                        <MenuItem icon={<ShieldRoundedIcon />}> Ben </MenuItem>
                        <MenuItem icon={<NotificationsRoundedIcon />}>
                            WRIT 2201
                        </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<LogoutRoundedIcon />}> Help </MenuItem>
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
                <p>AP ITEC 2201 helped me to think more about what I am writing; What points am I trying to get across? Who is my intended audience? Am I writing just to fill empty space on the page?</p>
                <br/>
                <p>However, today we live in an evidence-based society - and me saying that I learned something from this course does not necessarily prove it. Therefore, I will give examples of how I improved at writing, and I will highlight some writing projects that I have successfully completed.</p>

            </div>
            <div className="paragraphHolderPortfolio">
                <h1 className="homePageProjects">Projects</h1>
            </div>
            <div className="projectHolder">
                <a href={"#"}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>One</b></h4>
                            <p>This is project number 1 - and these are the writing skills that it exhibits.</p>
                        </div>
                    </div>
                </a>
                <a href={""}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>Two</b></h4>
                            <p>This is project number two, along with the skills that I learned from it </p>
                        </div>
                    </div>
                </a>

            </div>
            <div className="projectHolder">
                <a href={""}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>Three</b></h4>
                            <p>This is project number 3 - and these are the writing skills that it exhibits.</p>
                        </div>
                    </div>
                </a>
                <a href={""}>
                    <div className="project">
                        <img className="projectImg" src="/questionmark.png"></img>
                        <div className="projectContainer">
                            <h4><b>Four</b></h4>
                            <p>If I learned 4 things, the 4th thing will go here. </p>
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