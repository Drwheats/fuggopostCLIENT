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

export default function BenResumeDevicePage() {
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

                <h1 className="homePageName">Device Page and SEO Project</h1>
                <br/>
                <img className="portfolioPics1" src={"./phillips390image.jpg"} alt={"greenandbluemedicaldevice"} width="500" height="500"/>

            </div>
            <br />
            <h1 className="homePageProjects">What is the SEO Project?</h1>

            <div className="paragraphHolderPortfolio">
                <a href="https://www.ifixit.com/Device/Siemens_Servo_Screen_390">
                    <img src={"./devicepage1.png"} alt={"screenshot-device-page"} width="1000" height="250"/>
                </a>

                <p className="truncatedParagraph">SEO (Search Engine Optimization) is the process of optimizing a web page so that when a user enters certain keywords into Google Search, your web page shows up early (or first) in the results. This means that a user who was searching for the information that our web page was showing would find our web page easily, improving the visibility and accessibility of our page, and bringing more traffic to iFixit as a whole.
                </p>
                <br />
                <h1 className="homePageProjects">Stages of the SEO Project:</h1>
                <h3 className="smallTitle">The Research Stage:</h3>
                <p className="truncatedParagraph">
                    The first stage in the SEO project was to find resources for the page I was going to create - in this case, the Siemens Servo Screen 390. I mostly used Google - while I searched in other places, only Google had reputable sources for this medical device. I used quotations in all of my Google searches, as we were searching for an extremely specific object with a precise model number, and only wanted to find information about this one thing.
                </p>
                <br />
                <p className="truncatedParagraph"> I also had to research the format that iFixit used for their device pages - it's a very specific format to give all guides and devices a uniform look throughout the website. I looked at example pages on iFixit that had been approved, and I took note on how these pages were structured, and on iFixit's guidelines for new device pages.
                </p>
                <br />
                <h3 className="smallTitle">Evaluating Resources:</h3>
                <p className="truncatedParagraph"> Now that I had finished my research and had a bunch of different sources and information to work with, I then needed to evaluate the different sources to decide if they were good enough to include in my final project. I evaluated all of my sources using the EAT method (Expertise, Authoritativeness, Trustworthiness).  </p>
                <br/>
                <p className="truncatedParagraph">This was not really a factor in my project, as my project was not only on an almost 30 year old medical device, but also on a device that was part of a 5000$ ventilator system. There were no "unqualified" sources about my device, so I took 100% of my information from official documents from Siemens, and from authorized Siemens vendors. The official manual that shipped with the Servo Screen 390 had lots of useful information on the system, and my page borrowed heavily from it. </p>

                <br/>
                <h3 className="smallTitle">Analyzing and Writing:</h3>
                <p className="truncatedParagraph">At this stage of my project, I had a list of trusted sources and a list of required information that iFixit wanted in the device page. So I just needed to go through my manuals and vendor specifications, get the information that iFixit wanted on the page, and format it to iFixit's specifications. The manuals contained all of the information except for one thing, which luckily I was able to find on the vendor's website. I submitted my final draft to iFixit and waited for them to approve it, which they did.  </p>

                <br/>
                <h3 className="smallTitle">Reflections:</h3>
                <p className="truncatedParagraph">While I did not find this project particularly challenging or difficult, I found this exercise to be a good crash course in evaluating, collecting, compiling, and formatting information based on a given list of parameters. I learned good Google techniques for seeking out highly specific information, and I learned how to evaluate information when it needs to be very precise and trustworthy by using Google's "EAT" parameters. I formatted all of this information in a way that would satisfying the requirements of both Google's search engine and iFixit's format - the result being very easily readable by humans, and also optimized for Google search. As proof, my article comes up as the first result when searching for "servo screen 390 repair". <a href="https://www.ifixit.com/Device/Siemens_Servo_Screen_390">Click here to go to my finished device page profie on iFixit.com.</a> </p>
                <br />

                <a href="https://www.google.com/search?client=firefox-b-d&q=servo+screen+390+repair">
                <img src="./googlesearchifixit.png" height="400" width="1000" alt="numberonesearchresult"/>
                </a>

            </div>

            <Link to={"/eportfolio-fastfix"}>
                <img src="./nextArrow.png" alt="next arrow" height="250" width="250"/>
            </Link>
        </div>
        <div>
        </div>

        </div>

        </body>

    )
}