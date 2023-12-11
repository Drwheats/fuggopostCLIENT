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

export default function BenResumeReflections() {
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

                <h1 className="homePageName">Reflections</h1>
                <br/>
                <img className="portfolioPics1" src={"./Reflections2201.jpg"} alt={"AI generated images are already getting boring"} width="500" height="500"/>

            </div>
            <h1 className="homePageProjects">Project : Reflections</h1>

            <div className="paragraphHolderPortfolio">
                <p className="truncatedParagraph">My name is Ben Gallagher. I am a third year ITEC student at York University, and I am showcasing my writing skills that I learned in the AP-WRIT 2201 program, and showcasing some of the projects that I made in this program as well.</p>
            </div>

            
        </div>
        <div>
        </div>

        </div>

        </body>

    )
}