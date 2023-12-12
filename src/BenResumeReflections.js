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

export default function BenResumeReflections() {
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

                <h1 className="homePageName">Reflections</h1>
                <br/>
                <img className="portfolioPics1" src={"./Reflections2201.jpg"} alt={"AI generated images are already getting boring"} width="500" height="500"/>

            </div>
            <h1 className="homePageProjects">Project : Reflections</h1>

            <div className="paragraphHolderPortfolio">
                <p className="truncatedParagraph">WRIT 2201 helped me to overcome many challenges that I and other aspiring writers often have. This course challenged what I thought I knew about research and writing - I had just assumed that I was a good writer, and most of my writing was fictional/creative in nature. The 4 main projects and all of the accompanying feedback from the iFixit team and my peers really helped me to understand what a typical reader of a technical document is looking for. I found the fast fix project to be especially helpful - the many different rounds of feedback let me know when I wasn't being concise or specific enough, and I found that the iFixit format is very readable and efficient at getting technical details and instructions across. I will likely closely mimic the format that iFixit uses for their repair guides while writing documentation in the future. </p>
                <br/>
                <p className="truncatedParagraph">I think that the format of this course is quite educational - the deadlines and multiple rounds of feedback mimic a workplace, or a client with deliverables, quite effectively. I think that this course is very practical, and has helped me prepare for the workforce. This course's heavy focus on how the information is presented, formatted and displayed is also useful - as often the writer of a technical document will be given strict guidelines on how to format their writing by their boss or client.</p>
                <br/>
                <img src="./robotpencil1.jpg" alt="robotwithpencil" height="500" width="500"/>
                <p className="truncatedParagraph">This course also had a focus on showing us how to filter and evaluate information, whether for accuracy or for relevancy. The way that I have already begun implementing ideas from this course into my life, is in applying for jobs. The act of reading a specifications document, finding the relevant information, and then formatting it by the client's standards is very applicable to applying for jobs, as recruiters are looking for extremely specific keywords, skills and experience, and want to see this information in a very specific format.</p>
                <br />
                <p className="truncatedParagraph">I had never really thought about technical writing as being different from regular writing (fiction, facebook posts, etc) until this class - as technical writing was just something that my job made me do for money. I found the feedback from my peers and from iFixit very interesting, and I will certainly apply it to my career and schoolwork in the future - as well as anything that requires step by step instructions or guides or documentation.</p>
            </div>

            <Link to={"/eportfolio"}>
                <img src="./nextArrow.png" alt="portfolio" height="250" width="250"/>
            </Link>
        </div>
        <div>
        </div>

        </div>

        </body>

    )
}