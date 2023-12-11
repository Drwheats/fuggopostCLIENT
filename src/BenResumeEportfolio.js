import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
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

export default function BenResumeEportfolio() {
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

                <h1 className="homePageName">Device Page and SEO Project</h1>
                <br/>
                <img className="portfolioPics1" src={"./writ2201cartoon.jpg"} alt={"greenandbluemedicaldevice"} width="500" height="500"/>

            </div>
            <br />
            <h1 className="homePageProjects">What is the ePortfolio Project?</h1>

            <div className="paragraphHolderPortfolio">


                <p className="truncatedParagraph"> For the ePortfolio project, we had to compile all of the written work from the course in a user friendly and easy to read location. We described the process of writing most of our work, and also described the skills we learned while completing the projects.
                </p>
                <br/>
                <p className="truncatedParagraph">I chose to do a Project based ePortfolio, as opposed to a skills based ePortfolio. Although this was a no-code project, I used a layout that I coded in HTML/JavaScript (a long time ago, for a personal website) as the template, because I'm very comfortable with these languages and because I am going to use HTML/JavaScript as the template for my portfolio site in the future.</p>
                <br/>
                <h1 className="homePageProjects">Conceptualization/Planning</h1>
                <br/>
                <p className="truncatedParagraph">I planned out my ePortfolio by reading through all of my submitted assignments and projects in this class, and writing down the main steps I was required to take while completing the assignment, as well as the corresponding skills that I developed while working on each step. I tried to demonstrate unique skills required by each project, although there was certainly a lot of overlap in skills from each project.</p>
                <br />
                <p className="truncatedParagraph">I looked through some of the past ePortfolios provided by the professor, and tried to format my project based on those past successful portfolios, and I tried to discuss most of those skills if they were applicable to my portfolio and more.  </p>
                <br/>

                <h1 className="homePageProjects">User Testing and Feedback</h1>
                <br/>
                <p className="truncatedParagraph">We used Kritik.io to showcase a demo of our ePortfolio to our classmates, and we gave feedback on each other's website drafts. This helped to see if our website format was user friendly, and if our writing was readable and fulfilled the requirements of the assignment. </p>
                <br/>
                <img className="portfolioPics1" src={"./kritikiorubericforprortfolio.png"} alt={"portfolioruberic"} width="500" height="700"/>
                <br />

                <p className="truncatedParagraph">I used my classmate's feedback to make improvements to the layout of my portfolio site, and to make the portfolio page flow better.</p>
                <br />

                <h1 className="homePageProjects">Reflection</h1>
                <br />

                <p className="truncatedParagraph">The Eportfolio project was helpful in bringing all of the research, writing and formatting skills that I learned in this course together. Giving feedback on my classmates portfolio pages gave me a lot of ideas on what I wanted my page to look like in the end, and receiving feedback helped me to make my ideas more legible. There was a lot of information to sift through while making this portfolio, and this would have been the main challenge. Luckily I had documented the process of making all of my other projects while I was doing them, as and I had also documented all of the skills required to do the projects.</p>
                <br />
                <p className="truncatedParagraph">It's important to learn how to compile and organize your ideas and achievements, as self-promotion and organization is a very necessary skill in today's corporate environment. I think that this is the best skill that I've taken away from the ePortfolio project, as well as refreshing my memory on all of the other projects I've completed this semester. I also enjoyed making all of my media fit one cohesive theme. </p>
                <br />
                <a href="/eportfolio">
                    <img src="./nextArrow.png" height="450" width="450" alt="a big blue and green arrow saying next"></img>
                </a>


            </div>

            
        </div>

        <div>
        </div>

        </div>

        </body>

    )
}